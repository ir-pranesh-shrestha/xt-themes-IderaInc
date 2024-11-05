const path = require('path'),
  webpack = require('webpack'),
  WrapperPlugin = require('wrapper-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  fs = require('fs-extra'),
  BASE_PATH = './develop/wrappers';

let moduleWrapperHeader = `
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

let debServerConfig = {
    contentBase: path.join(__dirname, 'sample'),
    watchContentBase: true
  },
  moduleConfig = {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test:/\.css$/,
      use:[ 
      {
        loader: "style-loader",
        options: {
          insert: require.resolve("./insert-function"),
        },
      },
      'css-loader'
      ]
    }]
  };


function getPlugins (isSource) {
  var plugins = [new WrapperPlugin({
    test: /\.js$/,
    header: moduleWrapperHeader,
    footer: moduleWrapperFooter
  })];
  if (!isSource){
    plugins.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          ecma: 5,
          ie8: true,
          mangle: false,
          compress: false,
          keep_classnames: true,
          keep_fnames: true
        }
      })
    );
  }
  return plugins;
}

function getEntryObject(){
  var themeFiles = fs
    .readdirSync(path.resolve(__dirname, BASE_PATH))
    .filter(file => file.match(/.*\.js$/));

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
  plugins: getPlugins(false),
},
{
  entry: entryObject,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes/source')
  },
  devServer: debServerConfig,
  module: moduleConfig,
  plugins: getPlugins(true),
  optimization: {
    minimize: false
  }
}
];
