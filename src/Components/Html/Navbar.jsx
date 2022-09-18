import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Contexts/AuthUser';
import '../Css/Navbar.css';

// Importing Images
import netflixlogohistory from '../Resource/image/netflixlogohistory.png';

const Navbar = () => {
const navigate = useNavigate();
const { user, logOut } = UserAuth();
const [show, setShow] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) setShow(true);
        else setShow(false);
    })
    // return () => window.removeEventListener('scroll');
}, []);
// console.log(user);


const signup = () => navigate('/signup');
const acountant = () => navigate('/account');
const signito = () => navigate('/login');
const LOGOUT = async (e) => {
  e.preventDefault();
  try {
    await logOut();
    navigate('/');
  } catch (err) {
    alert(err);
  }
}

  return (
    <div style={{ transition: 'all 0.5s' ,transitionTimingFunction: 'ease-in' }} className={`pt-2 flex items-center justify-between px-10 z-[100] w-full fixed ${show && 'bg-black py-5'}`}>
        <Link to='/'><img src={netflixlogohistory} alt="Netflix Logo" className='tt cursor-pointer' /></Link>
    <div className='text-white'>
        <button onClick={user?.email ? acountant : signito} className='text-white pr-4'>{user?.email ? 'Account' : 'Sign In'}</button>
        <button onClick={!user ? signup : LOGOUT} className='bg-red-600 px-6 py-2 rounded cursor-pointer'>{!user ? 'Sign Up' : 'Logout'}</button>
    </div>
    </div>
  )
}

export default Navbar;