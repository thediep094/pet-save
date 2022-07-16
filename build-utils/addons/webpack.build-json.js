const fs = require('fs');
// const isGlob = require('is-glob');
const glob = require('glob');
const commonPath = require('../common-path');

const schemaString = (files, type) => {
  let dataObj = {};
  files.forEach((file) => {
    let folder = file.replace('/en.schema.json', '').split('/').pop();
    if (type === 'settings') {
      folder = folder.replace(/[\d]-/g, '');
    }
    const str = `{"${folder}": ${fs.readFileSync(file, 'utf8')}}`;
    dataObj = Object.assign(dataObj, JSON.parse(str));
  });
  return dataObj;
}

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
          const langFiles = glob.sync(`${commonPath.themeDevPath}/sections/**/en.schema.json`);
          let sectionLocaleSchema = {};
          langFiles.forEach((file) => {
            let folder = file.replace('/en.schema.json', '').split('/').pop();
            const liquidFile = file.replace('/en.schema.json', `/${folder}.liquid`);
            const schemaFile = file.replace('/en.schema.json', '/schema.js');
            const inlineJSFile = file.replace('/en.schema.json', `/${folder}.script-internal.js`);
            const str = `{"${folder}": ${fs.readFileSync(file, 'utf8')}}`;
            sectionLocaleSchema = Object.assign(sectionLocaleSchema, JSON.parse(str));

            // build section liquid
            if (fs.existsSync(liquidFile)) {
              const { schema } = require(schemaFile);
              const liquid = fs.readFileSync(liquidFile, 'utf8');
              let liquidFinal = liquid;
              if (fs.existsSync(inlineJSFile)) {
                const inlineJS = fs.readFileSync(inlineJSFile, 'utf8');
                liquidFinal += `
{% javascript %}
${inlineJS}
{% endjavascript %}
`;
              }
              liquidFinal += `
{% schema %}
${JSON.stringify(schema, null, 2)}
{% endschema %}
`;
              compilation.emitAsset(`../sections/${folder}.liquid`, new RawSource(liquidFinal));
            }
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
