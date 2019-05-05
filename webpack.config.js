const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';
module.exports = () => {
  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.(jpg|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.join(__dirname, './src')
      ]
    },
    devServer: {
      port: 8080,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        favicon: 'src/favicon.ico'
      }),
      new CopyPlugin([{
        from: 'src/static',
        to: 'static'
      }]),
      new CleanWebpackPlugin()
    ]
  };
};
