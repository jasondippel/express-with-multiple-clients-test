const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder; ignore index.html file in webpack.common.js (it gets added by html webpack plugin)
  public: path.resolve(__dirname, '../public'),
}
