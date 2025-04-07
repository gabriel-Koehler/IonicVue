const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    port:"9921",
    // https:true
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/docs/1.0/'  // This is whatever your path from the root is
    : '/'
})
