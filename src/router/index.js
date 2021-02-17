import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Sites from '../views/Sites.vue';
import SitePage from '../views/SitePage.vue';

Vue.use(Router);

export default new Router({
	// mode: "history",
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
			path: "/sites/:sitename",
			name: "Site",
			component: SitePage
		}
	]
});

