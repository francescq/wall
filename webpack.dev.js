const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    compress: true,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
});
