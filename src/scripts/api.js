import axios from 'axios';

function post(endpoint, data) {
	axios.post(`${endpoint}`, data).then(r => console.log(r)).catch(err => { throw err; });
}
async function get(endpoint, query = "") {
	return await axios.get(`${endpoint}${query}`);
}
function patch(endpoint, body) {
	axios.patch(endpoint, body).then(r => console.log(r)).catch(err => { throw err; });
}
function remove(endpoint, body) {
	axios.delete(endpoint, body).then(r => console.log(r)).catch(err => { throw err; });
}


let api = { post, get, patch, remove };
export default api;