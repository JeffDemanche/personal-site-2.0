const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssNormalize = require("postcss-normalize");

module.exports = {
  entry: ["./src/index.ts", "./src/style.css"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx|\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    open: true,
    watch: true,
  },
  mode: "development",
};
