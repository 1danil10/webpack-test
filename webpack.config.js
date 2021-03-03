const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

// if (process.env.NODE_ENV === "development") {
//   mode = "production";
//   target = "browserslist";
// }
//fix for windows?

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: "assets/images/[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        //type: "asset/inline ",  => base64 enc
        //type: "asset",  =>for both types: resource + base64 enc
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
        //  PARSER FOR FILE MAXSIZE.
        // rule test SVG => inline ?
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    hot: true,
    contentBase: "./dist",
  },
};
