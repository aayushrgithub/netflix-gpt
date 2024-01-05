import React, { useState } from 'react'
import Header from './Header'
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

import { Provider } from 'react-redux';


const Browse = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        getNowPlayingMovies();
    }, [])

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results));
    }


    return (
        <div>

            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;
/* Main Container
    - VideoBackground
    - VideoTitle
    
   Secondary Container
    - Movie Lists
      - Movie Cards 



*/