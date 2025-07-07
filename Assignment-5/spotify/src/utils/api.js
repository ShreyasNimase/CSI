import axios from "axios";
const api = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "YOUR_API_KEY", // Replace with valid key
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
});
export default api;
