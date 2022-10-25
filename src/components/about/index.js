import React from 'react'
import { Link } from "react-scroll";
import { FaArrowDown } from 'react-icons/fa'
import './index.css'


const About = () => {
    return (
        <div id='about' className='w-full h-screen bg-gradient-to-b from-gray-500 to-gray-600 text-white'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='flex flex-col items-center justify-center h-full'>

                    <div className='pt-8 pb-8'>
                        <p className='text-4xl inline animate-pulse'>About Me</p>
                    </div>
                    <p className='text-base'>
                        Hi, my name is Min and I am a full-stack web developer. I have both front-end and back-end web development experiences with different languages and frameworks.
                        For front-end webdevelopment, I use HTML,CSS,Javascript, and javascript library, React. For Back-end web development, I normally use Python and Django for the framework.
                        I've graduated from University of Waterloo and I have a Bachelor's degree in Mathematics, major in computational mathematics, minor in computer science.
                        Computational Mathematics is an intersection of mathematics, statistics, optimization, and computer science, to solve problems in various fields, which include business, finance, medicine, science, and technology.




                    </p>
                </div>


                <div className='pb-3 hover:scale-125 text-black'>
                    <Link to='portfolio' smooth duration={500}>
                        <FaArrowDown size={50} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default About
