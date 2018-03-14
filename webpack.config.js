const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 01/24/18 BUNDLE.JS DOESN'T COMPILE AND PAGE WONT RNDER IN LOCALHOST
// output should not go to public but to app/bundle.js
// bundle.js compliles in production(green) not in dev(yellow)
/* ------------------ TRY GITHUB BATTLE CONFIG NEXT TIME -----------*/

let config = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'), // dirname resolves to a specific directory that we specify, here
    // it's 'build'.
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // test: a regex that matched file extensions to run in this loader
        exclude: /node_modules/, // include/ exclude: optional, which files to loader should add or ignore
        loader: 'babel-loader',
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
    ],
  },
  devServer: {
    // contentBase: './public', // without conntentBase, the dev server will serve files in the root of proj
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  plugins: [new ExtractTextPlugin('styles.css'), new webpack.HotModuleReplacementPlugin()],
}
module.exports = config

//  loaders deal with each source file, one at a time, as they are “loaded” during the build process.
//  Plugins do not operate on individual source files: they influence the build process as a whole.
