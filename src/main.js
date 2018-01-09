// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import router from "./router/index"
import fontIcon from "./assets/fonts/font-icon.css"
import store from "./vuex/vuex.js"
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<layout/>',
  components: { layout }
})






//设置触摸事件
