import { resolve } from "path";

import CircularDependencyPlugin from "circular-dependency-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration, type WebpackPluginInstance } from "webpack";

const config: Configuration = {
  entry: {
    app: ["./src/index.tsx"]
  },
  optimization: {
    usedExports: true
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src/")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd()
    }) as unknown as WebpackPluginInstance,
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["app"]
    })
    // new BundleAnalyzerPlugin()
  ]
};

export default config;
