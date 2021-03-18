import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Sites from '@/views/Sites.vue';
import SitePage from '@/views/SitePage.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0, };
		}
	},
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
			path: "/about",
			name: "About",
			component: About
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact
		},
		{
			path: "/*",
			name: "404",
			component: PageNotFound,
		}
	]
});

