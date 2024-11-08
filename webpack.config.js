const path = require('path');
const webpack = require('webpack');
const WrapperPlugin = require('wrapper-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs-extra');
const BASE_PATH = './develop/wrappers';

let moduleWrapperFooter = '}));';
let moduleWrapperHeader = `
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FusionCharts);
  }
}(function (FusionCharts) {
`;

let debServerConfig = {
  contentBase: path.join(__dirname, 'sample'),
  watchContentBase: true
};
let moduleConfig = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            insert: require.resolve('./insert-function')
          }
        },
        'css-loader'
      ]
    }
  ]
};

function getPlugins (isSource, isUMD) {
  var plugins = [];

  if (isUMD) {
    plugins.push(
      new WrapperPlugin({
        test: /\.js$/,
        header: moduleWrapperHeader,
        footer: moduleWrapperFooter
      })
    );
  }

  if (!isSource) {
    plugins.push(
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          ie8: true,
          mangle: false,
          compress: false,
          keep_classnames: true,
          keep_fnames: true,
          output: {
            // Retain license and copyright comments
            comments: /(?:^!|@(?:license|preserve|cc_on)|copyright)/i
          }
        },
        extractComments: false
      })
    );
  }
  return plugins;
}

function getEntryObject () {
  var themeFiles = fs.readdirSync(path.resolve(__dirname, BASE_PATH)).filter((file) => file.match(/.*\.js$/));

  let entryObj = themeFiles.reduce((entryObj, themeFile) => {
    entryObj[themeFile.replace(/.js$/, '')] = './' + path.join(BASE_PATH, themeFile);
    return entryObj;
  }, {});
  return entryObj;
}

let entryObject = getEntryObject();

module.exports = [
  {
    entry: entryObject,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'themes/min')
    },
    devServer: debServerConfig,
    module: moduleConfig,
    devtool: 'source-map',
    plugins: getPlugins(false, true)
  },
  {
    entry: entryObject,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'themes/source')
    },
    devServer: debServerConfig,
    module: moduleConfig,
    plugins: getPlugins(true, true),
    optimization: {
      minimize: false
    }
  },
  {
    entry: entryObject,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'es'),
      module: true,
      libraryTarget: 'module'
    },
    devServer: debServerConfig,
    module: moduleConfig,
    experiments: {
      outputModule: true
    },
    // plugins: getPlugins(true, false),
    optimization: {
      minimize: false
    }
  }
];
