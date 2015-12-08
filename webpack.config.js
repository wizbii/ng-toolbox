var path = require('path')
var webpack = require('webpack')

var pkg = require('./package.json')
var banner = [
  '/*!',
  ` * ${pkg.name} - v${pkg.version}`,
  ` * ${pkg.description}`,
  ` * ${pkg.homepage}`,
  ' *',
  ` * @author ${pkg.author}`,
  ` * @license ${pkg.license}`,
  ' */',
  ''
].join('\n')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'ng-toolbox' + (process.argv.indexOf('-p') > -1 ? '.min' : '') + '.js'
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
    new webpack.BannerPlugin(banner, { raw: true })
  ]
}
