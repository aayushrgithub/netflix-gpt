import React, { useState } from 'react'
import Header from './Header'
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

import { Provider } from 'react-redux';
import MovieInformation from './MovieInformation';
import { useLocation, useNavigate } from 'react-router-dom';


const Browse = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    let info = useSelector(store => store.toggle.toggleThePage);
    const propsData = location.state
    info = location.state
    console.log(propsData)
    console.log(info)
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
            {info ? <MovieInformation id={propsData} /> : <><MainContainer />
                <SecondaryContainer />
            </>}

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