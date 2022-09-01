import axios from "axios";

const Instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
// Instance.get("/movie.top_rated");



export default Instance;