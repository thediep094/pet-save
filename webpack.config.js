const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyFilePlugin = require('copy-webpack-plugin');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;
const WriteFilePlugin = require('write-file-webpack-plugin');
const { BuildJsonPlugin } = require('./build-utils/addons/webpack.build-json');
// const publicPath = `${__dirname}/shopify/`;
const assetsPath = `${__dirname}/shopify/assets`;

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV;
// Source map setting
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  // Entry point
  entry: {
    main: './src/ts/main.ts',
  },
  // Output files
  output: {
    path: assetsPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader', 'glob-import-loader'],
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              // 0 => no loaders;
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [
                  ['autoprefixer', { grid: true }],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
          {
            loader: 'glob-import-loader'
          }
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new BuildJsonPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new WatchExternalFilesPlugin({
      files: [
        './src/shopify/**/*.js',
        './src/shopify/**/*.json',
        './src/shopify/**/*.liquid'
      ]
    }),
    new CopyFilePlugin(
     {
      patterns: [
        {
          context: 'src/shopify',
          from: '**/*.script-external.js',
          // to: `${assetsPath}/[name][ext]`,
          to: ({ absoluteFilename }) => {
            const fileName = path.parse(absoluteFilename).base.replace('.script-external.js', '.js');
            return `${assetsPath}/${fileName}`;
          },
          // info: { minimized: true },
          // globOptions: {
          //   dot: true,
          //   gitignore: true,
          //   ignore: ['**/*.ts', '**/*.tsx', '**/*.scss'],
          // }
        },
      ]
     }
    ),
    new WriteFilePlugin(),
  ],
  target: ['web', 'es5'],
};
