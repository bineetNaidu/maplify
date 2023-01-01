import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api-bineetnaidu-io.onrender.com/api/v1/',
});

export default axios;
