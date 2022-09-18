import React from 'react';
import axios from 'axios';
import '../Css/Row.css';
import Movies from './Movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import SavedShows from './SavedShows';

const Row = ({ title, fetchURL, rowID, isLargeSize }) => {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(fetchURL).then((res) => setMovies(res.data.results))
    })
    // console.log(movies);
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
        <>
            <h2 className='text-white font-bold md:text-4xl text-3xl p-4 mt-5'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id={'slider' + rowID}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {movies.map((item, i) => (
                        <>
                        <Movies key={i} item={item} isLargeSize={isLargeSize} />
                        </>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    )
}

export default Row;