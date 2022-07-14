const fs = require('fs');
// const isGlob = require('is-glob');
const glob = require('glob');
const commonPath = require('../common-path');
const { schemaString } = require('../helpers/schemaString');
const processSectionLiquid = require('../helpers/processSectionLiquid');

class BuildJsonPlugin {
  static defaultOptions = {
    localesFile: '../locales/en.default.schema.json',
    settingsFile: '../config/settings_schema.json',
  };

  // Any options should be passed in the constructor of your plugin,
  // (this is a public API of your plugin).
  constructor(options = {}) {
    // Applying user-specified options over the default options
    // and making merged options further available to the plugin methods.
    // You should probably validate all the options here as well.
    this.options = { ...BuildJsonPlugin.defaultOptions, ...options };
  }

  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // webpack module instance can be accessed from the compiler object,
    // this ensures that correct version of the module is used
    // (do not require/import the webpack or any symbols from it directly).
    const { webpack } = compiler;

    // Compilation object gives us reference to some useful constants.
    const { Compilation } = webpack;

    // RawSource is one of the "sources" classes that should be used
    // to represent asset sources in compilation.
    const { RawSource } = webpack.sources;
    // Tapping to the "thisCompilation" hook in order to further tap
    // to the compilation process on an earlier stage.
    compiler.hooks.thisCompilation.tap('BuildJsonPlugin', (compilation) => {
      // Tapping to the assets processing pipeline on a specific stage.
      compilation.hooks.processAssets.tap(
        {
          name: 'BuildJsonPlugin',

          // Using one of the later asset processing stages to ensure
          // that all assets were already added to the compilation by other plugins.
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        () => {
          //
          // locales/en.default.schema.json
          // Build section schema
          const sectionFiles = glob.sync(`${commonPath.themeDevPath}/sections*/**/en.schema.json`);
          let sectionLocaleSchema = {};
          sectionFiles.forEach((file) => {
            processSectionLiquid(compilation, RawSource, file, sectionLocaleSchema);
          });

          // Build theme settings schema
          const themeFiles = glob.sync(`${commonPath.themeDevPath}/config/**/en.schema.json`);
          const themeSchema = schemaString(themeFiles, 'settings');

          const schemaObj = {
            settings_schema: themeSchema,
            sections: sectionLocaleSchema,
          }
          compilation.emitAsset(this.options.localesFile, new RawSource(JSON.stringify(schemaObj, null, 2)));

          //
          // config/settings_schema.json
          const themeSettingsFiles = glob.sync(`${commonPath.themeDevPath}/config/**/settings.schema.json`);
          const themeSettingsArr = [];
          const themeInfo = fs.readFileSync(`${commonPath.themeDevPath}/config/theme-info.json`, 'utf8');
          themeSettingsArr.push(JSON.parse(themeInfo));
          themeSettingsFiles.forEach((file) => {
            const str = fs.readFileSync(file, 'utf8');
            themeSettingsArr.push(JSON.parse(str));
          });
          compilation.emitAsset(this.options.settingsFile, new RawSource(JSON.stringify(themeSettingsArr, null, 2)));

        }
      );
    });
  }
}

module.exports = { BuildJsonPlugin };
