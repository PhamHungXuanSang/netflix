import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ movie }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieId = doc(db, 'users', `${user?.email}`);

    const handleSaveMovie = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                }),
            });
        } else {
            alert('Please login your account to save movie');
        }
    };

    return (
        <div className="w-[180px] m-2 cursor-pointer inline-block relative hover:scale-[109%] transition ease-in-out duration-300 hover:z-1 rounded overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}></img>
            <div className="absolute w-full h-full hover:bg-gradient-to-t from-slate-800 whitespace-normal top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 flex justify-center items-center font-semibold text-center">
                <p>{movie?.title}</p>
                <p onClick={handleSaveMovie} className="absolute top-2 left-2">
                    {like ? <FaHeart /> : <FaRegHeart />}
                </p>
            </div>
        </div>
    );
};

export default Movie;
