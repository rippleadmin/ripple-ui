const mix = require('laravel-mix')
const fs = require('fs')
const path = require('path')

mix.setPublicPath('public')
  .js('resources/js/main.js', 'public/js')
  .vue()
  .webpackConfig({
    output: {
      publicPath: '/vendor/ripple-ui/',
      chunkFilename: 'js/[name].js?id=[chunkhash]'
    },
    externals: {
      vue: 'Vue'
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js',
        '@': path.resolve('resources/js')
      }
    }
  })
  .sourceMaps()
  .version()

// Auto copy assets to test Laravel project
fs.access('../ripple-test', error => {
  if (!error) {
    mix.then(() => {
      // Run Laravel Mix copy file method
      new (require('laravel-mix/src/tasks/CopyFilesTask'))({
        from: 'public',
        to: new (require('laravel-mix/src/File'))('../ripple-test/public/vendor/ripple-ui')
      }).run()
    })
  }
})
