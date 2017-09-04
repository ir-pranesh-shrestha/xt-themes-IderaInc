const path = require('path'),
  webpack = require('webpack');

let IS_DEV = process.env.NODE_ENV === 'development';

function getPlugins () {
  if (IS_DEV) {
    return [];
  } else {
    return [
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourceMap: true,
        mangleProperties: {
          screw_ie8: false,
          ignore_quoted: true
        },
        compress: {
          screw_ie8: false,
          properties: false
        },
        output: {
          screw_ie8: false
        }
      })
    ];
  }
}

module.exports = {
  entry: {
    'fusioncharts.theme.boilerplate': './develop/wrappers/fusioncharts.theme.boilerplate.js',
    'fusioncharts.theme.carbon': './develop/wrappers/fusioncharts.theme.carbon.js',
    'fusioncharts.theme.fint': './develop/wrappers/fusioncharts.theme.fint.js',
    'fusioncharts.theme.ocean': './develop/wrappers/fusioncharts.theme.ocean.js',
    'fusioncharts.theme.zune': './develop/wrappers/fusioncharts.theme.zune.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes')
  },
  externals: {
    FusionCharts: 'FusionCharts'
  },
  devServer: {
    contentBase: path.join(__dirname, 'sample'),
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: 'source-map',
  plugins: getPlugins()
};
