import axios from "axios";

// Configure Axios
const api = axios.create({
  baseURL: "http://localhost:8081", // Backend URL
  timeout: 5000,
});

export default api;
