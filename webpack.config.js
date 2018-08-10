const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig =
  new HTMLWebpackPlugin ({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    entry: path.resolve(__dirname + '/app/index.js'),
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname + '/build')
    },
    plugins: [HTMLWebpackPluginConfig]
};