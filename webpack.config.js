const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry :{
      'app' :"./src/index.js",
      'assets/js/banner': "./src/assets/js/banner.js",
      'assets/js/tabs': "./src/assets/js/tabs.js",
      'assets/js/upload': "./src/assets/js/upload.js",
      'assets/js/chart': "./src/assets/js/chart.js",
    },
    output: {
      path: path.resolve(__dirname, './app'),
      filename: '[name].js',
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
            test: /\.(ttf|eot|svg)?(\?[a-z0-9#=&.]+)?$/, 
            exclude :/images/,
            use: [
              {
                loader: 'file-loader',
                options:{
                  name: '[name].[ext]',
                  outputpath:"./assets/fonts/"
                }
              },
            ],
          },
          {
            test: /\.(gif|png|jpe?g)$/,
            exclude :/fonts/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images'
                }
              }
            ]
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/button.html",
          filename:"components/button.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/textfeild.html",
          filename:"components/textfeild.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/card.html",
          filename:"components/card.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/banner.html",
          filename:"components/banner.html",
          chunks:['app', 'assets/js/banner'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/list.html",
          filename:"components/list.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/tabs.html",
          filename:"components/tabs.html",
          chunks:['app', 'assets/js/tabs'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/upload.html",
          filename:"components/upload.html",
          chunks:['app', 'assets/js/upload'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/help.html",
          filename:"components/help.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/summary.html",
          filename:"components/summary.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/actions.html",
          filename:"components/actions.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/sidebar.html",
          filename:"components/sidebar.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/table.html",
          filename:"components/table.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          template:"./src/components/chart.html",
          filename:"components/chart.html",
          chunks:['app', 'assets/js/chart']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename:"assets/css/style.css"
        }),
        
        new OptimizeCssAssetsPlugin ({}),
    ],
  };