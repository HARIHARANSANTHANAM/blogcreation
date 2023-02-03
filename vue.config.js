const Ipaddress="http://10.30.1.164"
// const Ipaddress="http://192.168.0.109"
// const Ipaddress="http://192.168.224.121"
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/one': {
        target: `${Ipaddress}:8080`,
        pathRewrite: {'^/one' : ''}
      },
      '/two': {
        target: `${Ipaddress}:8082`,
        pathRewrite: {'^/two' : ''}
      },
      '/three':{
        target:`${Ipaddress}:8083`,
        pathRewrite:{'^/three':''}
      },
      '/four':{
        target:`${Ipaddress}:8087`,
        pathRewrite:{'^/four':''}
      }
    }
  }
})
