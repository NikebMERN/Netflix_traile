import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Banner from './Components/html/Banner';
import Row from './Components/html/Row';
import requsts from './request';
import Nav from './Components/html/Nav';
import Footer from './Components/html/Footer';
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#FFFFFF");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false)
    }, 15000);
  }, [])

  return (
    <div className='bg-black'>
    {
      loading 
      ? 
 
      <div className='p-nn text-center d-flex justify-content-center align-item-center w-100 vh-100'>
      <RingLoader

    color={color} 
    loading={loading} 
    size={30} />
    </div>

    :

    <div className='text-white bg-black'>
      <Nav />
      <Banner />
      
    
      <Row title="Netflix Original" fetchUrl={requsts.fetchOrigins} isLargesize />
      <Row title="Trending Now" fetchUrl={requsts.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requsts.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requsts.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requsts.fetchComedyMovies} />
      <Row title="Horro Movies" fetchUrl={requsts.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requsts.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requsts.fetchDocumantries} />

      <Footer />
    </div>
    }
    </div>
  )
}



// Deploy complete!

// Project Console: https://console.firebase.google.com/project/netflix-493fd/overview
// Hosting URL: c


export default App;