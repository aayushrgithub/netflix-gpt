import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' pt-72 px-14 absolute w-screen aspect-video bg-gradient-to-r from-black'>
            <h1 className='text-3xl font-bold text-white'>{title}</h1>
            <p className='w-1/2 py-4 text-white'>{overview}</p>
            <div>
                <button className='bg-white text-black font-semibold hover:opacity-70 p-3 px-10 text-white rounded-md'>Play</button>
                <button className='bg-gray-500 p-3 px-10 text-white rounded-md mx-4'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle