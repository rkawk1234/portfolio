import React from 'react'
import { Link } from "react-scroll";
import {FaArrowDown} from 'react-icons/fa'
import {FaArrowUp} from  'react-icons/fa'
import './index.css'


const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-400 to-gray-600 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
        <div className=' hover:scale-125 text-black'>

                <Link to='home' smooth duration={500}>
                    <FaArrowUp size={50}/>
                </Link>
            </div>

            <div className='pt-8 pb-8'>
                <p className='text-4xl inline'>About Me</p>
            </div>

            <div className=' hover:scale-125 text-black'>
                <Link to='portfolio' smooth duration={500}>
                    <FaArrowDown size={50}/>
                </Link>
            </div>
                
        </div>
    </div>
  )
}

export default About
