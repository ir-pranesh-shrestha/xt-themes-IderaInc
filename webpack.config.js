const path = require('path'),
  webpack = require('webpack'),
  WrapperPlugin = require('wrapper-webpack-plugin');

let IS_DEV = process.env.NODE_ENV === 'development',
moduleWrapperHeader = `
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FusionCharts);
  }
}(function (FusionCharts) {
`,
  moduleWrapperFooter = `
}));
`;

function getPlugins () {
  var plugins = [new WrapperPlugin({
    test: /\.js$/,
    header: moduleWrapperHeader,
    footer: moduleWrapperFooter
  })];

  if (!IS_DEV){
    plugins.push(
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
    );
  }
  return plugins;
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
