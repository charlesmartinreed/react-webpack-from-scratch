const path = require("path");

// HtmlWebpackPlugin creates our index.html file for us when using webpack
// we're using our template, which was created by simply created an index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// testing a basic CSS implementation
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// specify the entry file for React. This is what we compiled, our entire react structure
// output is where the compiled code goes, a bundled JS file
// module object specifies our loader - inside is the rules array where we specify what we want babel to compile
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: "./src/index.html"
    })
  ]
};
