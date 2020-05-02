const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = () => {
  const output = merge(common(), {
    mode: 'production',
    output: {
      filename: '[name].[contenthash].js',
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  });

  return output;
};