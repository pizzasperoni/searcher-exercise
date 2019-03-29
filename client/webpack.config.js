const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    // new ExtractTextPlugin("css/[name].css"),
    // new HtmlWebpackPlugin()
  ]

  // if (env.NODE_ENV === 'production') {
  //   plugins.push(
  //     new CleanWebpackPlugin(['dist'], {root: __dirname})
  //   )
  // }

  return {
    entry: {
      meli: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: path.resolve(__dirname, 'dist')+"/"
    },
    devServer: {
      port: 9000,
      historyApiFallback: {
        index: 'index.html'
      }
    },
    module: {
      rules: [
        {
          // test: que tipo de archivo quiero reconocer,
          // use: que loader se va a encargar del archivo
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        { 
          //que tipo de archivo quiero reconocer
          test: /\.(s*)css$/,
          //que loader manejara ese tipo de archivo
          use: ['style-loader','css-loader', 'sass-loader']
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
