import Vue from 'vue'
import App from './App.vue'
import vuer from 'vue-resource'
Vue.use(vuer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.filter('he',(e)=>{
  if (e.lenght>=7) {
    return e=e.substring(0,7)+"..."
  } 
    return e
  
})