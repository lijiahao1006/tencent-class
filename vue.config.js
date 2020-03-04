const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 相对路径
  publicPath: process.env.NODE_ENV === 'production'
  ? '/production-sub-path/'
  : './',
  // 别名
  chainWebpack: (config) =>{
    config.resolve.alias
      .set('styles',resolve('src/assets/styles'))
      .set('scripts',resolve('src/assets/scripts'))
      .set('components',resolve('src/components'))
    config.plugin('html')
      .tap(args => {
      args[0].title = '123'
      return args
    })
  },
  configureWebpack: (config) => {
    // 生产环境
    if (process.env.NODE_ENV === 'production') {
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
};