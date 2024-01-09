import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom';
import MovieInformation from './MovieInformation';
import { useDispatch, useSelector } from 'react-redux';
import { togglePage } from '../utils/toggleMenu';

const MovieCards = ({ posterPath }) => {
    if (!posterPath) return;


    return (
        <div className='w-48 pr-4'>
            <img src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCards;