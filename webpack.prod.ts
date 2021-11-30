import { resolve } from "path";

import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minChunks: 1,
      minSize: 1,
      maxInitialRequests: Infinity,
      maxAsyncRequests: Infinity,

      cacheGroups: {
        // Cancels Webpack's default 'main' cache group
        default: false,

        // Overrides Webpack's default 'vendor' cache group
        vendors: {
          name: "vendors",
          test: "vendors",
          chunks: "initial",
          priority: 30
        },

        // Custom app bundle
        main: {
          name: "app",
          test: "app",
          chunks: "initial",
          priority: 10
        }
      }
    }
  }
});

export default config;
