import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

//uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


/**************************************************************************
全局组件
*/
import myDropdown from '@/components/dropdown/index'
Vue.component('myDropdown', myDropdown)

import panel from '@/components/panel'
Vue.component('panel', panel)


/**************************************************************************
原型链
*/
import XEUtils from 'xe-utils'
Vue.prototype.$utils = XEUtils
import * as fn from "@/utils/fn.js"
Vue.prototype.$fn = fn;

import * as validator from "@/utils/validate"
Vue.prototype.$validator = validator;
