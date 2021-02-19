import axios from "axios";
let tables = ["dimension", "vote", "person", "newssite"];
function set_item(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
function get_data(table, filter = null) {
	if (!filter) {
		return JSON.parse(localStorage.getItem(table));
	} else {
		return JSON.parse(localStorage.getItem(table)).filter(filter);
	}

}
async function refresh_data(endpoint = "") {
	if (endpoint.length == 0) {
		for (let table of tables) {
			await axios_get(`http://localhost:3000/${table}`).then(r => {
				set_item(table, r.data);
			});
		}
	} else {
		await axios_get(`http://localhost:3000/${endpoint}`).then(r => {
			set_item(endpoint, r.data);
		});
	}
}
async function axios_get(endpoint) {
	const res = await axios.get(endpoint);
	return res;
}
async function axios_post(endpoint, value) {
	const res = await axios.post(endpoint, value);
	await refresh_data();
	return res;

}

const api = {
	set_item,
	refresh_data,
	get_data,
	axios_post,
	tables,
};
export default api;