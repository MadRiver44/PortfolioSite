const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js', //'[name].js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html', title: 'Portfolio' }), //title: 'My App', filename: 'admin.html'
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new ExtractTextPlugin('styles.css'),
    //new webpack.optimize.CommonsChunkPlugin('common.js'), creates a multiple file emit error to bundle.js
  ],
};
