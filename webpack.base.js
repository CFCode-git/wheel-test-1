const path = require('path')

module.exports = {
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
      },
      {
        test:/\.svg$/,
        loader: 'svg-sprite-loader'
      },
    ]
  }
}
