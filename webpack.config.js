const resolve = require("path").resolve;
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const url = require("url");
const publicPath = "";
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = (options = {}) => ({
  entry: {
    vendor: "./src/vendor",
    index: "./src/main.js"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: options.dev ? "[name].js" : "[name].js?[chunkhash]",
    chunkFilename: "[id].js?[chunkhash]",
    publicPath: options.dev ? "/assets/" : publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".vue", ".json", ".css"]
  },
  devServer: {
    host: "127.0.0.1",
    port: 8010,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? "/assets/" : publicPath).pathname
    }
  },
  devtool: options.dev ? "#eval-source-map" : "#source-map"
});
