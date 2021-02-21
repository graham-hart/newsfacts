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
	},
	mutations: {
		refreshData() {
			for (let table of ["dimension", "newssite", "vote", "person"]) {
				axios.get(`http://localhost:3000/${table}`).then(r => { this.state[table] = r.data; });
			}
		}
	},
});