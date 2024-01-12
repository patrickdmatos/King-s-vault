import axios from 'axios'

const apiBasicLayout = axios.create({
  baseURL: 'http://localhost:3030'
})

export default apiBasicLayout
