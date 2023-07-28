const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    // 配置开发服务器
    devServer: {
      port: 6001,
      // 微前端 必须是跨域的
      headers: {
        /** 设置本地运行的跨域 */ "Access-Control-Allow-Origin": "*",
      },
    },
})
