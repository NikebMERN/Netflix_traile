const TheApiKey = process.env.REACT_APP_apikey;

const requsts = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${TheApiKey}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${TheApiKey}&language=en-US&page=1`,
    fetchOrigins: `https://api.themoviedb.org/3/discover/tv?api_key=${TheApiKey}&with_networks=213`,
    fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TheApiKey}&language=en-US&page=1`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TheApiKey}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TheApiKey}&with_genres=35`,
    fetchHorror: `https://api.themoviedb.org/3/search/movie?api_key=${TheApiKey}&language=en-US&query=horror&page=1&include_adult=false`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${TheApiKey}&with_genres=10749`,
    fetchDocumantries: `https://api.themoviedb.org/3/discover/movie?api_key=${TheApiKey}&with_genres=99`,
}

export default requsts;