import ESLintPlugin from "eslint-webpack-plugin";
import { Configuration as WebpackConfigation } from "webpack";
import { Configuration as WebpackConfigurationDevServer } from "webpack-dev-server";
import { merge } from "webpack-merge";

import common from "./webpack.common";

// Config
const HRM_HOST = "0.0.0.0";
const HRM_PORT = 6677;

interface Configuration extends WebpackConfigation {
  devServer?: WebpackConfigurationDevServer;
}

const config = merge<Configuration>(common, {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  output: {
    chunkFilename: `./[name].js`,
    filename: `./[name].js`,
    publicPath: "/"
  },
  devServer: {
    hot: true,
    host: HRM_HOST,
    port: HRM_PORT,
    compress: true,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minChunks: 1,
      minSize: 1,
      maxInitialRequests: Infinity,
      maxAsyncRequests: Infinity,

      cacheGroups: {
        default: false
      }
    }
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
