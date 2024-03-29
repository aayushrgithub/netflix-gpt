import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'
import DropDown from './DropDown'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <div className='absolute text-white px-[50%] md:px-[80%] pt-16 md:pt-28'>
                <DropDown />
            </div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer