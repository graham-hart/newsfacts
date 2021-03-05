import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dimension: [],
		newssite: [],
		vote: [],
		person: [],
		user: { "person_id": 1, "email_address": "graham@harts.net", "added": "2021-03-05T23:19:27.210521+00:00" }
	},
	mutations: {
		refreshData(state) {
			for (let table of ["dimension", "newssite", "vote", "person"]) {
				axios.get(`http://localhost:3000/${table}`).then(r => { state[table] = r.data; });
			}
		},
	},
});
