import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
axios.defaults.baseURL = "http://localhost:3000";
Vue.config.productionTip = false;
new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app');
