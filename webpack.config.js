var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/ng-toolbox.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'ng-toolbox.min.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
