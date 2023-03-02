const Ipaddress="http://10.30.1.114"
const ServiceOneIpaddress="http://10.30.1.114:8080"
const ServiceTwoIpaddress="http://10.30.1.114:8082"
const ServiceThreeIpaddress="http://10.30.1.114:8083"
// const Ipaddress="http://192.168.0.109"
// const Ipaddress="http://192.168.224.121"
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/one': {
        target: `${ServiceOneIpaddress}`,
        pathRewrite: {'^/one' : ''}
      },
      '/two': {
        target: `${ServiceTwoIpaddress}`,
        pathRewrite: {'^/two' : ''}
      },
      '/three':{
        target:`${ServiceThreeIpaddress}`,
        pathRewrite:{'^/three':''}
      },
      '/four':{
        target:`${Ipaddress}:8087`,
        pathRewrite:{'^/four':''}
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blogcreation/'
    : '/'
})
