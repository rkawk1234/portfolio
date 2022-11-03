import React from 'react'
import cartoon from '../../assets/cartoon.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { Link } from "react-scroll";
import './index.css'


// import ReactTailwind from "../../assets/reactTailwind.png"

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col items-stretch justify-center h-full w-full'>
          <h2 className='text-3xl sm:text-6xl font-bold text-white text-center'>Min Kim </h2>
          <p className='text-xl sm:text-2xl text-gray-600 py-2 text-center'>Full stack Developer </p>
          <p className='text-sm sm:text-lg text-black text-center'>I am currently pursuing  my career as a full stack web developer. <br></br>Please feel free to get in touch if you are interested.</p>
          <div className='mx-auto' >

            <img src={cartoon}   alt='' className='rounded-full  w-60 h-60' />
            <div className='flex flex-row justify-evenly pt-5 pb-5'>
              <FaGithub size={40} />
              <FaLinkedin size={40} />
              <FaTwitter size={40} />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home
