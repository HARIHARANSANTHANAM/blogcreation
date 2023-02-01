const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/one': {
        target: 'http://10.30.1.164:8080',
        pathRewrite: {'^/one' : ''}
      },
      '/two': {
        target: 'http://10.30.1.164:8082',
        pathRewrite: {'^/two' : ''}
      },
      '/three':{
        target:'https://10.30.1.164:8083',
        pathRewrite:{'^/three':''}
      },
      '/four':{
        target:'https://10.30.1.164:8087',
        pathRewrite:{'^/four':''}
      }
    }
  }
})
