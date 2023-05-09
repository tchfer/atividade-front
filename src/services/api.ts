import axios from 'axios'
const api = axios.create({
    baseURL: 'https://atividade-back.herokuapp.com/'
})
export default api;