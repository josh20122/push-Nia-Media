import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify)

const opts = {}

export default new Vuetify({
    theme: {
      themes: {
        light: {
          main: '#f5f5f5',
          background: '#edeff0',
          drawer: '#2a3042',
          verify: '#f6f8fc',
          // nav: '#1c1c27',
          nav: '#3e474f',
          tag: '#28293d',
        },
      },
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
  });

//  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

// @import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css');

// @import "vuetify/dist/vuetify.min.css"; 