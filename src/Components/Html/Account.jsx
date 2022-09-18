import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Contexts/AuthUser';
import Banner from '../Resource/image/Banner.jpg';
import SavedShows from './SavedShows';

const Account = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  })
  return (
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src={Banner} alt="Netflix BG" />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
    </div>
    <SavedShows />
    </div>
  )
}

export default Account