let mode = "development";

if (process.env.NODE_DEV === "production") {
  mode = "production";
}
module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
