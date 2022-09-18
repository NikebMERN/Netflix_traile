import React from 'react';
import { UserAuth } from '../Contexts/AuthUser';
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const base_urlb = 'https://image.tmdb.org/t/p/w500';
const Movies = ({ item, isLargeSize }) => {
    const [like, setLike] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const { user } = UserAuth();
    const MoviesID = doc(db, 'users', `${user?.email}`);

    const truncateString = (str,) => {
        if (str?.length > 30) {
            return str.slice(0, 30) + '...';
        } else {
            return str;
        }
    };

    const SavedShows = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(MoviesID, {
                savedShows: arrayUnion({
                    id: item?.id,
                    title: item.name ? item?.name : item?.title,
                    img: item?.backdrop_path
                }),
            })
        } else {
            alert('Please Login To Save Movies');
        }
    }

  return (
    <>
         <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img
                                className={!isLargeSize || !item?.poster_path ? `w-full h-[90px] sm:h-[95px] md:h-[149px] lg:h-[169px] block object-cover` : `w-full h-[250px] object-cover`}
                                src={`${base_urlb}/${item?.backdrop_path ? item?.backdrop_path : item?.poster_path}`}
                                alt={item?.title}
                            />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                    {truncateString(item.name ? item?.name : item?.title)}
                                </p>
                                <p onClick={SavedShows}>
                                    {like ? (
                                        <FaHeart className='absolute top-4 left-4 text-gray-300' />
                                    ) : (
                                        <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                                    )}
                                </p>
                            </div>
                        </div>
    </>
  )
}

export default Movies;