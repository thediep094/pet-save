const fs = require('fs');
const sass = require('sass');
const commonPath = require('../common-path');

/**
 *
 * @param {*} sectionLocaleSchema hàm mutate biến này gắn string vào
 */
const processSectionLiquid = (compilation, RawSource, file, sectionLocaleSchema) => {
  const commonFolder = `${commonPath.themeDevPath}/common`;
  const cssPadding = require(`${commonFolder}/css-padding`);

  let folder = file.replace('/en.schema.json', '').split('/').pop();
  const liquidFile = file.replace('/en.schema.json', `/${folder}.liquid`);
  const schemaFile = file.replace('/en.schema.json', '/schema.js');
  const inlineJSFile = file.replace('/en.schema.json', `/${folder}.script-internal.js`);
  const sassFile = file.replace('/en.schema.json', `/section-${folder}.scss`);

  const str = `{"${folder}": ${fs.readFileSync(file, 'utf8')}}`;
  sectionLocaleSchema = Object.assign(sectionLocaleSchema, JSON.parse(str));

  // complie sass
  if (fs.existsSync(sassFile)) {
    const result = sass.compile(sassFile, { style: 'expanded' });
    const css = result.css.toString();
    compilation.emitAsset(`../assets/section-${folder}.css`, new RawSource(css));
  }

  // build section liquid
  if (fs.existsSync(liquidFile)) {
    const { schema } = require(schemaFile);
    const liquid = fs.readFileSync(liquidFile, 'utf8');
    let liquidFinal = liquid.replace('__CSSPADDING__', cssPadding);

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
}

module.exports = processSectionLiquid;
