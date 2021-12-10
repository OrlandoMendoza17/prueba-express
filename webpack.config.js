const path = require("path")
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: "./src/client/index.js",
  devtool: "source-map",
  output:{
    path: path.resolve(__dirname, "src/server/public"),
    filename: "[name].js",
    publicPath: "/"
  },
  mode: "development",
  devServer:{
    historyApiFallback: true,
    compress: true,
    port: 8000,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use:[
          "style-loader",
          "css-loader",
        ]
      },
      // {
      //   test: /\.html$/,
      //   use: "html-loader"
      // }
    ]
  },
  plugins:[
    new Dotenv(),
    new WebpackManifestPlugin({}),
    // new HtmlWebpackPlugin({
    //   inject: "body",
    //   template: path.resolve(__dirname, "./public/index.html"),
    //   filename: "index.html"
    // })
  ]
}