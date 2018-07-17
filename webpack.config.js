const path = require('path');
const webpack = require('webpack');
// const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, "node_modules"),
                loader: 'babel-loader',
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    devtool: "source-map",
    plugins: [
        // new ngAnnotatePlugin({
        //     add: true
        // }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false, sourceMap: true })
    ]
}