import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import createServer from '@inertiajs/server'
import Vuetify from "vuetify"

Vue.use(Vuetify),
createServer((page) => createInertiaApp({
  page,
  render: createRenderer().renderToString,
  resolve: name => require(`./Pages/${name}`),
  setup({ app, props, plugin }) {
    Vue.use(plugin)
    .use(require('vue-moment'))
    return new Vue({
      vuetify:new Vuetify(),
      render: h => h(app, props),
    })
  },
}));
