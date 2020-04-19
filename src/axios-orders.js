import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-ed64a.firebaseio.com/'
})

export default instance;