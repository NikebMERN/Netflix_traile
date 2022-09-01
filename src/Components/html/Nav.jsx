import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Nav.css';
import { Link } from 'react-router-dom';

// Importing Images
import Logo from '../Resource/image/netflix-logo-history-32.png';
import Avatar from '../Resource/image/avatar.png';

const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) setShow(true);
            else setShow(false);
        })
        // return () => window.removeEventListener('scroll');
    }, []);

    return (
        <div className={`nav position-fixed p-4 d-flex justify-content-between ${show && 'bg-dark pb-5'}`}>
            <Link to="/"><img className='nav__logo position-fixed' src={Logo} alt="Netflix Logo" /></Link>


        <img className='nav__avatar position-fixed' src={Avatar} alt="Avatar" /> 

            
        </div>
    )
}

export default Nav;