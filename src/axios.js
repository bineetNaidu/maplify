import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://my-api-server-en.herokuapp.com/',
});

export default axios;
