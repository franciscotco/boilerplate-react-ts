import ESLintPlugin from "eslint-webpack-plugin";
import "webpack-dev-server";
import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    chunkFilename: `./[name].js`,
    filename: `./[name].js`,
    publicPath: "/"
  },
  devServer: {
    hot: true,
    port: 6677,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsc", "ts", "tsx"],
      overrideConfigFile: `.eslintrc.json`,
      fix: true,
      failOnError: false,
      emitWarning: true
    })
  ]
});

export default config;
