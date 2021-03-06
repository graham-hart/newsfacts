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
		user: { "person_id": 2, "email_address": "graham@harts.net", "added": "2021-03-05T23:19:27.210521+00:00" }
	},
	mutations: {
		refreshData(state) {
			for (let table of ["category", "newssite", "vote", "person"]) {
				api.get(`${table}`).then(r => { state[table] = r.data; });
			}
		},
	},
});
