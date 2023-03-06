import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

const SavedMovies = () => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies);
        });
    }, [user?.email]);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const movieRef = doc(db, 'users', `${user?.email}`);

    const handleDeleteMovie = async (deleteId) => {
        try {
            const result = movies.filter((movie) => movie.id !== deleteId);
            await updateDoc(movieRef, {
                savedMovies: result,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <div className="lg:mx-8 mt-16">
                <h1 className="m-2 font-bold text-xl mt-8 ml-4 lg:ml-10 select-none">My Saved Movies</h1>
                <div className="relative flex items-center group">
                    <MdChevronLeft
                        onClick={slideLeft}
                        className="absolute z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 hidden group-hover:block"
                        size={28}
                        fill={'#000000'}
                    />
                    <div
                        id={'slider'}
                        className={
                            'w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'
                        }
                    >
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className="w-[180px] m-2 cursor-pointer inline-block relative hover:scale-[109%] transition ease-in-out duration-300 hover:z-1 rounded overflow-hidden"
                            >
                                <img src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={movie?.title}></img>
                                <div className="absolute w-full h-full hover:bg-gradient-to-t from-slate-800 whitespace-normal top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 flex justify-center items-center font-semibold text-center">
                                    <p>{movie?.title}</p>
                                    <p onClick={() => handleDeleteMovie(movie.id)} className="absolute top-2 right-2">
                                        {<AiOutlineClose />}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MdChevronRight
                        onClick={slideRight}
                        className="absolute right-0 z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 hidden group-hover:block"
                        size={28}
                        fill={'#000000'}
                    />
                </div>
            </div>
        </>
    );
};

export default SavedMovies;
