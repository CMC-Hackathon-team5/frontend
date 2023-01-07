import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://gcpeter.shop:8080/api/',
})

export const getData = async () => {
  try {
    const response = await Axios.get('/improvement-management/improvement/list')
    // const response = await Axios.get('/improvement-management/improvement/list')
    console.log(response)
  } catch (error) {
    console.error(error);
  }
}

export default Axios;