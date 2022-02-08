const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index:"./src/async.js",
  }, // 入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: "development",
  devtool: 'source-map', 
};
