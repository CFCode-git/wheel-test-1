const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index:'./lib/index.tsx'
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
  }
}
