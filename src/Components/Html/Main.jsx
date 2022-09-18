import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requsts from '../../request';
import '../Css/Main.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Contexts/AuthUser';

const base_urlb= 'https://image.tmdb.org/t/p/original';
const Main = () => {
    const [Movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const { user } = UserAuth();

    const ALERTER = () => navigate('/account');
    const nuller = () => alert('Please Login To see Your List');

    useEffect(() => {
    axios.get(requsts.fetchPopular).then((res) => (setMovies(res.data.results)));
    }, []);
    // console.log(Movies);

    const movies = Movies[Math.floor(Math.random() * Movies.length)];

    const truncateString = (str,) => {
        if (str?.length > 150) {
          return str.slice(0, 150) + '...';
        } else {
          return str;
        }
      };

    // console.log(movies);

  return (
    <div className='w-full h-[615px] text-white'>
        <div className="w-full h-full">
            <div className="absolute w-full h-[615px] bg-gradient-to-r from-black"></div>
        <img src={`${base_urlb}/${movies?.backdrop_path}`} alt={movies?.title} className='w-full h-full object-cover' />
        <div className='w-full absolute top-[36%] md:p-8'>
            <h1 className='text-3xl font-bold md:text-5xl ml-4'>{ movies?.title }</h1>
            <div className="banner_Buttons ml-4 my-3">
                        <button className='banner_btn font-bold cursor-pointer text-white outline-none border-none border-r-2 px-8 mr-4 py-2'>Play</button>
                        <button className='banner_btn font-bold cursor-pointer text-white outline-none border-none border-r-2 px-8 mr-4 py-2' onClick={user ? ALERTER : nuller}>My List</button>
            </div>
        <p className='text-gray-400 text-sm ml-4 mb-2'>Released: { movies?.release_date }</p>
        <p className='pl-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{ truncateString(movies?.overview) }</p>
        </div>
        </div>
    </div>
  )
}

export default Main;