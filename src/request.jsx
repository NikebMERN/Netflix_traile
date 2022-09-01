const TheApiKey = process.env.REACT_APP_apikey;

const requsts = {
    fetchTrending: `/trending/all/week?api_key=${TheApiKey}&language=en-US`,
    fetchOrigins: `/discover/tv?api_key=${TheApiKey}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${TheApiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TheApiKey}&with_genres=10749`,
    fetchDocumantries: `/discover/movie?api_key=${TheApiKey}&with_genres=99`,
}

export default requsts;