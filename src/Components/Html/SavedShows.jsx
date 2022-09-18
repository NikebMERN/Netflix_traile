import React, {
    // useEffect,
    useState } 
    from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../Contexts/AuthUser';
import { db } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { 
    // AiFillPlaySquare,
    AiOutlineClose }
    from 'react-icons/ai';
// import Youtube from 'react-youtube';
// import movieTrailer from 'movie-trailer';
// import requsts from '../../request';

const base_urlb = 'https://image.tmdb.org/t/p/w500';
const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    // const [movie, setMovie] = useState([]);
    // const [trailerUrl, settrailerUrl] = useState('');
    const { user } = UserAuth();

// useEffect(()=>{
//     function Fetcher () {
//         setMovie(requsts);
//     }
//     Fetcher();
// })

    const truncateString = (str,) => {
        if (str?.length > 23) {
            return str.slice(0, 23) + '...';
        } else {
            return str;
        }
    };

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    React.useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc => setMovies(doc.data()?.savedShows)))
    }, [user?.email])

    const MoviesREF =  doc(db, 'users', `${user?.email}`);

    const deletShows = async (passID) => {
        try {
            const result = movies.filter((item) => item?.id !== passID);
            await updateDoc(MoviesREF, {
                savedShows: result
            })
        } catch (err) {
            console.log(err)
        }
    }

    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playervars: {
    //         autoplay: 1,
    //     }
    // }

    // const handleclick = (movie) =>{
    //     if(trailerUrl){
    //         settrailerUrl("");
    //     }else{
    //         movieTrailer(movie?.title || movie?.name || movie?.original_name)
    //         .then((url) => {
    //             const urlparams = new URLSearchParams(new URL(url).search);
    //             settrailerUrl(urlparams.get("v"));
    //         })
    //         .catch((err)=>{if(err)throw err});
    //     }
    // } 

    return (
        <div>
            <>
                <h2 className='text-white font-bold md:text-4xl text-3xl p-4 mt-5'>Your Choices</h2>
                <div className='relative flex items-center group'>
                    <MdChevronLeft
                        onClick={slideLeft}
                        className='bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                        size={40}
                    />
                    <div
                        id={'slider'}
                        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                    >
                        {movies.map((item, i) => (
                            <>
                                <div key={i} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                    <img
                                        className='w-full h-auto block'
                                        src={`${base_urlb}/${item?.img}`}
                                        alt={item?.title}
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                            {truncateString(item?.title)}
                                            {/* <p className='absolute text-gray-200 top-4 left-4 font-bold' onClick={() => handleclick(movie)}><AiFillPlaySquare /></p> */}
                                            <p className='absolute text-gray-300 top-4 right-4 font-bold' onClick={() => deletShows(item?.id)}><AiOutlineClose /></p>
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <MdChevronRight
                        onClick={slideRight}
                        className='bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                        size={40}
                    />
                </div>
                <div className="youtube_trailer" style={{ padding: '40px', }}>
                {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
            </div>
            </>
        </div>
    )
}

export default SavedShows;