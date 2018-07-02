import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) // 所有的组件对象都多了一个属性: $http(对象, 有get()/post())


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})