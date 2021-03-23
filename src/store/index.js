import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/scripts/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		category: [],
		newssite: [],
		vote: [],
		person: [],
		adminEmails: ["graham@harts.net", "24ghart@shcp.edu", "newsfacts.app@gmail.com"],
		loaded: false
	},
	mutations: {
		refreshData(state) {
			for (let table of ["category", "newssite", "vote", "person"]) {
				api.get(`${table}`).then(r => { state[table] = r.data; state.loaded = true; });
			}
		},
	},
});
