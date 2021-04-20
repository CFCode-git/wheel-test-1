const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index:'./lib/index.tsx'
  },
  resolve: {
    extensions: ['.tsx','.ts','.jsx','.js']
  },
  output: {
    path: path.resolve(__dirname,'dist'), // 绝对路径
    library: 'react-wheel', // 输出的库的名字
    libraryTarget: 'umd' // 输出库的格式
  },
  module: {
    rules:[
      {
        test:/\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-wheel',
      template: 'index.html',
    })
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    },
  }
}
