import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=965aa342df5e25391186ff911d215636

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;