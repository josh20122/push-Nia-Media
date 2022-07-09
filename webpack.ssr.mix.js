const path = require('path')
const mix = require('laravel-mix')
require('vuetifyjs-mix-extension');
const webpackNodeExternals = require('webpack-node-externals')

mix
  .options({ manifest: false })
  .js('resources/js/ssr.js', 'public/js')
//   .postCss('resources/css/app.css', 'public/css', [
//     require("tailwindcss"),
// ])
.vuetify('vuetify-loader')
  .vue({ version: 2, options: { optimizeSSR: true } })
  .alias({ '@': path.resolve('resources/js') })
  .webpackConfig({
    target: 'node',
    externals: [webpackNodeExternals()],
  })