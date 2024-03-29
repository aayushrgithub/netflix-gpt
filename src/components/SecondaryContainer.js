import React from 'react'
import MovieList from './MovieList'
import MovieCards from './MovieCards'
import { useSelector } from 'react-redux'
import DropDown from './DropDown'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div className='bg-black'>
            <div className='px-3 md:px-0 pt-80 md:pt-0 md:-mt-80 md:pl-8 relative z-20'>
                <MovieList title={"Now Playing"} allMovies={movies.nowPlayingMovies} />
                <MovieList title={"Trending Movies"} allMovies={movies.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} allMovies={movies.nowPlayingMovies} />
                <MovieList title={"Thriller Movies"} allMovies={movies.nowPlayingMovies} />
                <MovieList title={"Horror Movies"} allMovies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer