import { resolve } from "path";
import TerserPlugin from "terser-webpack-plugin";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
    publicPath: "/"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  cache: {
    type: "filesystem",
    compression: "gzip",
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [
    new DefinePlugin({
      webpackDevServer: false
    }),
  ]
});

export default config;
