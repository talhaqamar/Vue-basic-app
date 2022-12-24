const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
   port: 3000,
   proxy: {
    '^/api': {
      target: 'http://localhost:4000',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: { '^/api': '/' },
    },
   }
  }
})
