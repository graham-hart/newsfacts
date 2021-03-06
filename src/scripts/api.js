import axios from 'axios';

function post(store, endpoint, data) {
	axios.post(`${endpoint}`, data).then(r => { store.commit("refreshData"); return r; }).catch(err => { throw err; });
}
async function get(endpoint, query = "") {
	return await axios.get(`${endpoint}${query}`);
}
function patch(store, endpoint, body) {
	axios.patch(endpoint, body).then(r => { store.commit("refreshData"); return r; }).catch(err => { throw err; });
}
function remove(store, endpoint, body) {
	axios.delete(endpoint, body).then(r => { store.commit("refreshData"); return r; }).catch(err => { throw err; });
}


let api = { post, get, patch, remove };
export default api;