const BASE_JS = "./static/js/";
const path = require("path");
module.exports = {
  entry: {
    main: BASE_JS + "main.js",
    header: BASE_JS + "html/" + "header.js",
    startApp: BASE_JS + "html/" + "startApp.js",
  },
  mode: "development",
  watch: true,
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       filename: "css",
  //     }),
  //   ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "assets", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
