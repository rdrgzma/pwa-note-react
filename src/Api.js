import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3004/'
})

const apis = {
    produtosApi: () => api.get('produtos')
}

export default apis