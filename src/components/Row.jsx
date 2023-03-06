import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ rowId, title, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    // console.log(movies);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className="lg:mx-8 mt-16">
            <h1 className="lg:m-2 font-bold text-xl lg:mt-8 lg:ml-10 select-none opacity-80">{title}</h1>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="absolute z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 lg:hidden group-hover:block"
                    size={28}
                    fill={'#000000'}
                />
                <div
                    id={'slider' + rowId}
                    className={
                        'w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'
                    }
                >
                    {movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className="absolute right-0 z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 lg:hidden group-hover:block"
                    size={28}
                    fill={'#000000'}
                />
            </div>
        </div>
    );
};

export default Row;
