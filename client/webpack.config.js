const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = [
  {
    entry: "./src/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "./dist/client"),
      filename: "client_bundle.js"
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"]
        }, {
          test: /\.(png|svg|ttf)$/i,
          type: "asset/resource"
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:"./src/index.html"
      })
    ]
  }
]