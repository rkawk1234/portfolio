import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Personal Website</h2>
                <p className='text-lg sm:text-xl text-gray-600'>Using React and Tailwind CSS </p>
            </div>
        </div>
    </div>
  )
}

export default Home
