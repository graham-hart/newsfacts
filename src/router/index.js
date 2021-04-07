import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import SitePage from '@/views/SitePage.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import PageNotFound from '@/views/PageNotFound.vue';
// import VotingCriteria from '@/views/VotingCriteria.vue';
import LoginCallback from '@/views/LoginCallback.vue';

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
		// {
		// 	path: "/criteria",
		// 	name: "VotingCriteria",
		// 	component: VotingCriteria,
		// },
		{
			path: "/login-callback",
			name: "LoginCallback",
			component: LoginCallback,
		},
		{
			path: "/*",
			name: "404",
			component: PageNotFound,
		}
	]
});

