const webpack = require("webpack")
const MiniCss = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },

  plugins: [
    new MiniCss({
      filename: "style.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"],
      },
    ],
  },
}
