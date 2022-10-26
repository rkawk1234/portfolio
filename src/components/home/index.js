import React from 'react'
// import { Link } from "react-scroll";
import './index.css'
import { FaPlus} from 'react-icons/fa'
import {SiReact, SiTailwindcss} from 'react-icons/si'


// import ReactTailwind from "../../assets/reactTailwind.png"

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col items-stretch justify-center h-full w-1/2'>
                <h2 className='text-4xl sm:text-8xl font-bold text-white '>Personal Website </h2>
                <p className='text-lg sm:text-xl text-gray-600 py-2'> Built with Javascript, React and Tailwind CSS </p>
            </div>

            <div className='flex flex-row items-center justify-evenly w-1/2'>
                <SiReact size={150} color="#61DBFB"/>
                <FaPlus size={70} color = "#E0FFFF"/>
                <SiTailwindcss size={150} color="#67e8f9"/>


                
            </div>


    </div>
</div>
  )
}

export default Home
