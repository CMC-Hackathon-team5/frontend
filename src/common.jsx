import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://gcpeter.shop:8080',
})

const URL = 'http://gcpeter.shop:8080'

export const getDateTodo = async () => {
  try {
    const response = await Axios.get(`/api/improvement-management/todo?date=2023-01-01`)
    console.log('common', response.data)
    return response.data
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

export const getMovies = async () => {
  try {
   const response = await fetch('https://reactnative.dev/movies.json');
   const json = await response.json();
   console.log('jsonjsonjsonjson', json);
 } catch (error) {
   console.error(error);
 } 
}

export const getDateFunc = async () => {
  try {
    const response = await fetch(`http://gcpeter.shop:8080/api/improvement-management/improvement/list`)
    const data = await response.json()
    console.log('getDateFunc', data)
    // const response = await Axios.get('/api/improvement-management/improvement/list')
    // console.log('common', response.data)
    // return response.data
  } catch (error) {
    console.error('getDateFunc',error);
  }
}

export default Axios;