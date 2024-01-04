import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

// Extract trailer from the videos api on tmdb for that we need movie id

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideos();
    }, [])
    // Fetch Trailer Video && updating the store with the trailer video data

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground