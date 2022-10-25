import React from 'react'
import { Link } from "react-scroll";
import { FaArrowDown } from 'react-icons/fa'
import './index.css'

const Portfolio = () => {
    return (
        <div id='portfolio' className='w-full h-screen bg-gradient-to-b from-gray-400 to-gray-600 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
                {/* 
        <div className='flex flex-col items-center justify-center h-full'>

            <div className='pt-8 pb-8'>
                <p className='text-4xl inline'>Portfolio</p>
            </div>
        </div> */}

                <div className='grid grid-cols-2  text-center items-center justify-center w-full h-full'>
                    <div> First Project</div>
                    <div> Second Project</div>
                    <div> Third Project</div>
                    <div> Fourth Project</div>

                </div>

                <div className='pb-3 hover:scale-125 text-black'>
                    <Link to='contact' smooth duration={500}>
                        <FaArrowDown size={50} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Portfolio
