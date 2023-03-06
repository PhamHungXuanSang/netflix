import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);

    // console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + ' ...';
        } else {
            return str;
        }
    };

    return (
        <div className="hidden md:block w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="w-full h-[550px] bg-gradient-to-b from-black absolute"></div>
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                ></img>
                <div className="absolute md:top-[10%] lg:top-[30%] left-[8%] right-[8%]">
                    <h1 className="text-5xl pb-4 font-bold text-gray-100">{movie?.original_title}</h1>
                    <button className="text-2xl font-medium bg-gray-300 text-black cursor-pointer px-6 py-1 border rounded mr-4 hover:opacity-80">
                        Play
                    </button>
                    <button className="text-2xl font-medium bg-transparent text-white cursor-pointer px-6 py-1 border rounded hover:opacity-80">
                        Watch Later
                    </button>
                    <p className="mt-4 text-sm text-gray-300">Released: {movie?.release_date}</p>
                    <p className="mt-4 text-base text-gray-200 max-w-[40%]">{truncateString(movie?.overview, 200)}</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
