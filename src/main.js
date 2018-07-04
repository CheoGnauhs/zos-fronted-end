// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VeLine from 'v-charts/lib/line.common';
import VeMap from 'v-charts/lib/map.common';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(VueResource);

[VeLine, VeMap].forEach(comp => {
  Vue.component(comp.name, comp);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
