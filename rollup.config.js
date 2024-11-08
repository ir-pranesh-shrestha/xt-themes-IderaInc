// import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import fs from 'fs-extra';
var configArr = [];
var i;
var target = fs.readdirSync('./develop/src/');

const injectCSS = (cssContent) => `
((content) => {
  const style = document.createElement('style');
  style.type = 'text/css';
  const metaTag = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (metaTag) {
    const contentAttr = metaTag.getAttribute('content');
    if (contentAttr) {
      const match = contentAttr.match(/'nonce-([^']+)'/);
      if (match) {
        style.setAttribute('nonce', match[1]);
      }
    }
  }
  style.styleSheet ? (style.styleSheet.cssText = content) : style.appendChild(document.createTextNode(content));
  document.head.appendChild(style);
})(${cssContent});
`;

for (i = 0; i < target.length; i++) {
  fs.lstatSync('./develop/src/' + target[i]).isDirectory() &&
    configArr.push({
      input: './develop/src/' + target[i] + '/index.js',
      output: {
        file: './es/fusioncharts.theme.' + target[i] + '.js',
        format: 'es'
      },
      plugins: [
        styles({
          mode: ['inject', injectCSS]
        })
        // plugin ends
      ]
    });
}

export default configArr;
