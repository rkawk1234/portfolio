import React from 'react'
import { Link } from "react-scroll";
import './index.css'
import {FaArrowDown, FaPlus} from 'react-icons/fa'
import {SiReact, SiTailwindcss} from 'react-icons/si'


// import ReactTailwind from "../../assets/reactTailwind.png"

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h2 className='text-4xl sm:text-8xl font-bold text-white '>Website</h2>
                <p className='text-lg sm:text-xl text-gray-600 py-2'> Built with Javascript, React and Tailwind CSS </p>
            </div>

            <div className='w-1/3 pl-5'>
                <SiReact />
                <FaPlus />
                <SiTailwindcss />
                {/* <img
                src={ReactTailwind}
                alt="react"
                className='rounded-2xl mx-auto w-full md:w-full hover:animate-pulse'>

                </img> */}


                
            </div>

            <div className='absolute bottom-3 hover:scale-125 text-black'>
                <Link to='about' smooth duration={500}>
                <FaArrowDown size={50}/>
                </Link>
                </div>



    </div>
</div>
  )
}

export default Home
