const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          { 
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "stylus-loader" },
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "ejs-loader"
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader"
          }
        ]
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            query: {
              inlineRequires: "/images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Enable HMR
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.ejs",
      title: "Link's Journal",
    })
  ]
}
