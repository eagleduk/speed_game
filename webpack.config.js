const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            meta: {
                viewport: "width=device-width, initial-scale=1.0"
            },
            minify: {
                collapseInlineTagWhitespace: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeComments: true,
            } 
        })
    ]
}