import axios from 'axios';

async function post(store, data) {
	const r = await axios.post(`http://localhost:3000/${endpoint}`, data);

	return r;
}
async function patch(store, data) {
	const r = await axios.patch(`http://localhost:3000/${endpoint}/${data.id}`, data).then(store.commit("refreshData"));
	return r;
}