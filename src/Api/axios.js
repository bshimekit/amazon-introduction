import axios from "axios";
const axiosInstance = axios.create({
    // local
    // baseURL: " http://127.0.0.1:5001/fir-d24d3/us-central1/api",
    // render
    baseURL:"https://amazon-api-deploy-47h0.onrender.com",
})
export {axiosInstance}