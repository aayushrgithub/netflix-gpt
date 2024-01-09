import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import { IMG_CDN_URL } from '../utils/constants';

const MovieInformation = ({ id }) => {
    //const { propsData } = useParams();
    console.log(id)
    const movieData = useSelector(store => store.movies.nowPlayingMovies)
    if (!movieData) return
    console.log(movieData)
    const filteredData = movieData.filter((item) => item.id == id)
    console.log(filteredData)
    return (

        <div className='flex flex-col pt-[24%] md:pt-[7%] bg-gradient-to-b from-black'>
            <Link to='/browse' state={false} ><button className=' mx-[37%] p-4 border-red-600 bg-red-700 text-white rounded-lg md:mx-[45%] md:px-14'>Go back</button></Link>
            <img className='w-48 mx-[22%]  md:w-64 md:mx-auto md:left-0 md:right-0 pt-4' src={IMG_CDN_URL + filteredData[0].poster_path} />
            <h1 className=' mx-[24%] md:w-64 md:mx-auto md:left-0 md:right-0 pt-4 font-bold text-2xl text-red-500'>{filteredData[0].original_title}</h1>
            <h1 className=' mx-[24%] md:w-64 md:mx-auto md:left-0 md:right-0 pt-4 text-green-800'>Audio Language : {filteredData[0].original_language}</h1>
            <p className='w-[70%] mx-10 pt-4 text-green-800'>{filteredData[0].overview}</p>
            <h1 className='mx-[24%] md:w-64 md:mx-auto md:left-0 md:right-0 pt-4 font-bold'>Release Date: {filteredData[0].release_date}</h1>
        </div>
    )
}

export default MovieInformation