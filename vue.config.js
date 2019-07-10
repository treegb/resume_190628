const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
 devServer: {
   //host: '127.0.0.1',
   //port: 8023,
   // .This have to sync with comment id 190609m185630.
 },
  css: {
    loaderOptions: {
      sass: {
        //data: `@import "@/myStyles/myVariables.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('@myThinggg',resolve('src/assets/any/custom/path/you/want'));
  },
};
