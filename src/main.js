import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";
import titleMixin from "@/mixins/titleMixin.js";
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:3000";
Vue.mixin(titleMixin);
Vue.use(Auth0Plugin, {
	domain,
	clientId,
	redirectUri: "http://localhost:8080/login-callback",
	onRedirectCallback: appState => {
		router.push(
			appState && appState.targetUrl
				? appState.targetUrl
				: window.location.pathname
		);
	}
});
new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app');
