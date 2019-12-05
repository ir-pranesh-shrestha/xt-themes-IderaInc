import postcss from 'rollup-plugin-postcss';
import fs from 'fs-extra';
var configArr = [],
  i,
  target = fs.readdirSync('./develop/src/');

for (i = 0; i < target.length; i++) {
  fs.lstatSync('./develop/src/' + target[i]).isDirectory() && configArr.push({
    input: './develop/src/' + target[i] + '/index.js',
    output: {
      file: './es/fusioncharts.theme.' + target[i] + '.js',
      format: 'es'
    },
    plugins: [
      postcss()
    ]
  });
}

export default configArr;