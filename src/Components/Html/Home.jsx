import React from 'react'
import requsts from '../../request';
import Main from './Main';
import Row from './Row';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title="Netflix Original" fetchURL={requsts.fetchOrigins} isLargeSize />
        <Row rowID='2' title="Trending Now" fetchURL={requsts.fetchTrending} />
        <Row rowID='3' title="Popular" fetchURL={requsts.fetchPopular} />
        <Row rowID='4' title="Top Rated" fetchURL={requsts.fetchTopRatedMovies} />
        <Row rowID='5' title="Action Movies" fetchURL={requsts.fetchActionMovies} />
        <Row rowID='6' title="Comedy Movies" fetchURL={requsts.fetchComedyMovies} />
        <Row rowID='7' title="Horro Movies" fetchURL={requsts.fetchHorror} />
        <Row rowID='8' title="Romance Movies" fetchURL={requsts.fetchRomanceMovies} />
        <Row rowID='9' title="Documentaries Movies" fetchURL={requsts.fetchDocumantries} />
    </div>
)
}

export default Home;