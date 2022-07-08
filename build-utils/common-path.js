const path = require('path');

module.exports = {
  /**
   * Input path
   */
  srcPath: path.resolve(__dirname, '../src'),

  /**
   * Folder path
   */
  componentsPath: path.resolve(__dirname, '../src/components'),
  helpersPath: path.resolve(__dirname, '../src/helpers'),
  stylesPath: path.resolve(__dirname, '../src/styles'),
  typesPath: path.resolve(__dirname, '../src/types'),
  themeDevPath: path.resolve(__dirname, '../src/shopify'), // Shopify structure

  /**
   * Output path
   */
  outputPath: path.resolve(__dirname, '../dist'),

};
