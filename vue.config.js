module.exports = {
    baseUrl: "",
    outputDir: '../phonegap-demo-app/www',
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].minify = false
            return args
          })
      },
      filenameHashing: false
}