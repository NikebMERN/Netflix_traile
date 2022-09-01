import React, { useState, useEffect } from 'react';
import axios from '../../axioses';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_Url = 'https://image.tmdb.org/t/p/original/';
const Row = ({ title, fetchUrl, isLargesize }) => {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, settrailerUrl] = useState('');

    useEffect(() => {
        async function Fetcher() {
            const request = await axios.get(fetchUrl);
            // console.log(request);
            // console.log(request.data.results);
            setMovie(request.data.results);
            return request;
        }
        Fetcher();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playervars: {
            autoplay: 1,
        }
    }

    const handleclick = (movie) =>{
        if(trailerUrl){
            settrailerUrl("");
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                const urlparams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlparams.get("v"));
            })
            .catch((err)=>{if(err)throw err});
        }
    } 


    return (
        <div className='ms-4' id='ROW'>
            <h3 className='mt-4'>{title}</h3>
            <div className='row__posters d-flex p-4'>
                {movie.map((movies, i) => (
                    <img key={i} onClick={() => handleclick(movies)} className={`row__poster me-3 ${isLargesize && "rowPosterLarge"}`} src={`${base_Url}${isLargesize ? movies?.poster_path : movies?.backdrop_path}`} alt={movies.name} />
                ))}
            </div>
            <div className="youtube_trailer" style={{ padding: '40px', }}>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}



export default Row;