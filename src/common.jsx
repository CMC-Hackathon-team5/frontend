import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://118.67.130.242:8080',
  headers: {
    'Content-Type' : 'application/json',
  }
})

export default Axios;