import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://my-api-server-en.herokuapp.com/api/v1/',
});

export default axios;
