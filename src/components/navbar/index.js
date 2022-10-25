import React, { useState } from 'react'
import { Link } from "react-scroll"
import {
  FaBars,
  FaTimes,
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from 'react-icons/fa'

import { SiDjango, SiTailwindcss, SiJavascript } from 'react-icons/si'

import './index.css'


const NavBar = () => {

  const [curstate, setCurstate] = useState(false)

  return (
    <div className='fixed flex justify-between items-center w-full h-20 text-white bg-black'>

      <div className='pl-10'>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <SiDjango />
            </div>
            <div className="face2">
              <FaHtml5 />
            </div>
            <div className="face3">
              <FaCss3Alt />
            </div>
            <div className="face4">
              <FaReact />
            </div>
            <div className="face5">
              <SiTailwindcss />
            </div>
            <div className="face6">
              <SiJavascript />
            </div>
          </div>
        </div>
      </div>
      <div className='pl-20 w-100 font-signature text-4xl'>
        Min Kim
      </div>
      <ul className='pr-12 hidden md:flex'>

        <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
          <Link activeClass="active" to="home" smooth duration={500}>Home</Link>
        </li>
        <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
          <Link to="about" smooth duration={500}>About</Link>

        </li>
        <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to="skills" smooth duration={500}>Skills</Link>
          </li>
        <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
          <Link to="portfolio" smooth duration={500}>Portfolio</Link>

        </li>
        <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
          <Link to="contact" smooth duration={500}>Contact</Link>

        </li>
      </ul>
      <div
        onClick={() => setCurstate(!curstate)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {curstate ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      {curstate && (
        <ul className='flex flex-col juistify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
         from-black to-gray-800 text-gray-500'>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link activeClass="active" to="home" smooth duration={500}>Home</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link to="about" smooth duration={500}>About</Link>

          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link to="portfolio" smooth duration={500}>Portfolio</Link>

          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link to="experience" smooth duration={500}>Experience</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link to="contact" smooth duration={500}>Contact</Link>

          </li>



        </ul>

      )}


    </div>

  )
}

export default NavBar
