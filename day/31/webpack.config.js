const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: "production",
  // mode:'development'

  // devServer: {
  //   // static: {
  //   //   directory: path.join(__dirname, 'public'),
  //   // },
  //   // compress: true,
  //   // port: 9000,
  // },


};
