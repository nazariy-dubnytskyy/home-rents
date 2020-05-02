const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = () => {
  const output = merge(common(), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      host: '0.0.0.0',
      contentBase: path.join(__dirname, 'dist'),
      port: 8080,
      // https: {
      //   key: fs.readFileSync('./keys/selfsigned.key'),
      //   cert: fs.readFileSync('./keys/selfsigned.crt'),
      // },
    },
  });

  return output;
};