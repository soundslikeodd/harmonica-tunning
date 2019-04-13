const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index-template.html",
            filename: "./index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'harmonica-tunning.js'
    },
    devServer: {
        contentBase: './dist'
    }
}
