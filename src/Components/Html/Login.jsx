import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Contexts/AuthUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Importing Image
import Banner from '../Resource/image/Banner.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [icon, setIcon] = useState(true);
  const [onShow, setOnShow] = useState('password');
  const { Login } = UserAuth();
  const navigate = useNavigate();

  const LOGED = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      await Login(email, pass);
      navigate('/')
    } catch (err) {
  setErr(err.message);
    }
  }


  const show = () => {
    if (onShow === 'password') {
        setOnShow('text');
        setIcon(false);
    } else {
        setIcon(true);
        setOnShow('password');
    }
}


  return (
    <div className='w-full h-screen'>
    <img className='hidden absolute sm:block w-full h-full object-cover' src={Banner} alt="Netflix BG" />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[400px] h-[490px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {!err ? null : <p className='p-3 my-2 bg-red-400 text-white'>{ err }</p>}
            <form className='w-full flex flex-col py-4' onSubmit={LOGED}>
              <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email Adress' value={email} onChange={e => setEmail(e.target.value)} />
              <div>
                <input 
              style={{ marginRight: "-30px", paddingRight: "135px" }}
              className='p-3 my-2 bg-gray-700 rounded' type={onShow} placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
              {icon && <VisibilityIcon className='text-black' onClick={show} />}{!icon && <VisibilityOffIcon className='text-black' onClick={show} />}
              </div>
            <button type='submit' className='bg-red-600 py-3 my-6 rounded font-bold'>Login</button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p><input type="checkbox" className='mr-2' />Remeber me</p>
            <Link to="/">Need Help?</Link>
            </div>
            <div className='py-8 flex'>
            <p className='text-gray-600 mr-1'>New to Netflix?</p><Link to="/signup">Sign Up</Link>
            </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Login;