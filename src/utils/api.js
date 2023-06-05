import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:3039"
})

export default API
