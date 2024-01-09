import React, { useEffect } from 'react'
import MovieCards from './MovieCards';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePage } from '../utils/toggleMenu';
import Browse from './Browse';


const MovieList = ({ title, allMovies }) => {
    const dispatch = useDispatch();
    if (!allMovies) return;


    const handleClickEvent = () => {
        dispatch(togglePage());
    }

    return (
        <div className='px-6'>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {allMovies.map((movie) => (<Link key={movie.id} to='/browse' state={movie.id}><button onClick={() => handleClickEvent()}><MovieCards posterPath={movie?.poster_path} /></button></Link>))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;