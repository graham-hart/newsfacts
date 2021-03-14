import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Sites from '@/views/Sites.vue';
import SitePage from '@/views/SitePage.vue';
import Login from '@/views/Login.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [

		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/sites",
			name: "Sites",
			component: Sites
		},
		{
			path: "/sites/:site",
			name: "Site",
			component: SitePage
		},
		{
			path: "/login",
			name: "Login",
			component: Login
		},
		{
			path: "/*",
			name: "404",
			component: PageNotFound,
		}
	]
});

