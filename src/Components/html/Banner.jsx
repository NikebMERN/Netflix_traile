import React, { useEffect, useState } from 'react';
import '../css/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../axioses';
import requsts from '../../request';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_Url = 'https://image.tmdb.org/t/p/original/';
const Banner = () => {
    const [img, setImg] = useState([]);
    const [movie, setMovie] = useState([]);
    const [trailerUrl, settrailerUrl] = useState('');

    useEffect(() => {
        async function Fetcher() {
            const request = await axios.get(requsts.fetchOrigins);
            // console.log(request);
            // console.log(request.data.results);
            setMovie(request.data.results);
            return request;
        }
        Fetcher();
    }, []);

    useEffect(() => {
        async function Fetcher() {
            const requests = await axios.get(requsts.fetchOrigins);
            setImg(requests?.data.results[
                Math.floor(Math.random() * requests.data.results.length)
            ])
            return requests;
        }
        Fetcher();
    }, []);

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


    const truncate = (str) => {
        return str?.length > 150 ? str.substr(0, 150 - 1) + "..." : str;
    }

    return (
        <div>
            <header className='banner text-white' style={{ backgroundSize: "cover", backgroundImage: `url(${base_Url}${img?.backdrop_path})`, backgroundPosition: "center" }}>
                <div className="banner_containts ms-5">
                    <h1 className="banner_tittle py-3 fw-bolder">{img?.title || img?.name || img?.original_name}</h1>
                    <div className="banner_Buttons">
                        <button className='banner_btn fw-bold' onClick={() => handleclick(movie)}>Play</button>
                        <button className='banner_btn fw-bold'>My List</button>
                    </div>
                    <h1 className="banner_Descriptions">{truncate(img?.overview)}</h1>
                </div>
                <div className="banner_faded" />
            </header>
            <div className="youtube_trailer" style={{ padding: '40px', }}>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Banner;