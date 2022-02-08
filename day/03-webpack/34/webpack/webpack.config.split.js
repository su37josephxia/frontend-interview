const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  entry: {
    entryA: "./src/split/entryA.js",
    entryB: "./src/split/entryB.js",
  }, // 入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  optimization: {
    splitChunks: {
      chunks: 'initial', // 从入口开始优化
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
    },

  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "127.0.0.1",
      analyzerPort: 8889,
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info",
    }),
  ],
  // mode: "development",
  devtool: "source-map",
};
