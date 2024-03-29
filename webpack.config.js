"use strict";

const { resolve } = require("path");

module.exports = {
  entry: ["babel-polyfill", "./app/index"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=1000000"
      },
      {
        test: /\.(pdf)$/,
        use: "file-loader?name=[path][name].[ext]"
      }
    ]
  }
};
