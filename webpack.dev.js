const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base')

module.exports = Object.assign({}, base, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-wheel',
      template: 'index.html',
    })
  ],
})
