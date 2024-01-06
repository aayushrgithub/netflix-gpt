import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import DropContext from '../utils/DropContext'

const DropDown = () => {

    const isDropDown = useSelector(store => store.toggle.toggleTheMenu);
    const name = useSelector(store => store.user)
    if (!isDropDown) return null;



    return (
        <div className=''>
            <ul className='bg-black text-white rounded-lg md:p-4'>
                <li className='text-red-700 font-bold pt-2'>{name?.email}</li>
                <li className='pt-2 md:pt-4'>Account</li>
                <li className='pt-2 md:pt-4'>Manage Profiles</li>
                <li className='pt-2 md:pt-4'>Information</li>
                <li className='pt-2 md:pt-4'>NetflixGPT</li>
                <li className='pt-2 md:pt-4 pb-2'>Subscription</li>
            </ul>
        </div>
    )
}

export default DropDown;