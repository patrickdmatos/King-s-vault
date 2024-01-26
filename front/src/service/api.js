import axios from 'axios'

const apiConnection = axios.create({
  baseURL: 'http://localhost:3030'
})

export default apiConnection
