import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://myapi-server-es.herokuapp.com/api/v1/',
});

export default axios;
