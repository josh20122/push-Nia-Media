require('./bootstrap');

import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { Link } from "@inertiajs/inertia-vue"
import { Head } from "@inertiajs/inertia-vue"
import { InertiaProgress } from '@inertiajs/progress'
import vuetify from '../plugins/vuetify'

createInertiaApp({
  title: title => `${title} - My App`,
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;
    return page;

  },
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
      .use(require('vue-moment'))
      .component('Link', Link)
      .component('Link', Head)
    new Vue({
      vuetify,
      render: h => h(App, props),
    }).$mount(el)
  },
});

InertiaProgress.init({
  color: 'red',
  includeCSS: true,
  showSpinner: false,
})