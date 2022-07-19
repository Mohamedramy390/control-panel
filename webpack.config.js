const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry :{
      'app' :"./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, './app'),
      filename: 'app.js',
    },
    devServer: {
      static: path.join(__dirname, './app'),
      port: 2222,
      devMiddleware: {
        writeToDisk: true,
      },
    },

    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader,
               "css-loader" ,
               "postcss-loader",
                "sass-loader"
              ],
          },
          {
            test: /\.(svg|woff|woff2|ttf|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options:{
                  name: '[name].[ext]',
                  outputpath:"assets/fonts"
                }
              },
            ],
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename:"assets/css/style.css"
        }),
        new OptimizeCssAssetsPlugin ({}),
    ],
  };