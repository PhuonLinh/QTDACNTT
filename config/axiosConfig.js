import axios from "axios";
const request = axios.create({
    baseURL: 'http://192.168.31.103:5000/'
})
export default request;