import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"
import {
  FaJava,
  FaPython,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa'
import './index.css'


const NavBar = () => {

  const [curstate, setCurstate] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Portfolio',
    },
    {
      id: 4,
      link: 'Contact',
    },
  ]

  return (
    <div className='fixed flex justify-between items-center w-full h-20 text-white bg-black'>
      {/* <div>
        <h1 className='text-5xl pl-10 font-signature '>M</h1>
      </div> */}
      <div className='pl-10'>
      <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FaJava/>
                        </div>
                        <div className="face2">
                        <FaHtml5/>
                        </div>
                        <div className="face3">
                        <FaCss3/>
                        </div>
                        <div className="face4">
                        <FaReact/>
                        </div>
                        <div className="face5">
                        <FaJsSquare/>
                        </div>
                        <div className="face6">
                        <FaPython/>
                        </div>
                    </div>
                </div>
                </div>
      <ul className='pr-12 hidden md:flex'>
        {/* {links.map(({ id, link}) =>(
          <li
          key={id} 
          className='px-4 text-xl cursor-pointer capitalize text-gray-500 hover:scale-150 duration-200 '>
          <Link to={link} smooth duration={500}>{link}</Link>
        </li>
        ))} */}
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link activeClass="active"  to="home" smooth duration={500}>Home</Link>
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
        <Link to="about"   smooth duration={500}>About</Link>
          
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
        <Link to="portfolio"   smooth duration={500}>Portfolio</Link>
          
        </li>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
        <Link  to="contact"   smooth duration={500}>Contact</Link>
          
        </li>
      </ul>
      <div
        onClick ={() => setCurstate(!curstate)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {curstate? <FaTimes size={30}/> : <FaBars size={30}/>}

      </div>

      {curstate&& (
        <ul className='flex flex-col juistify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
         from-black to-gray-800 text-gray-500'>
 
         {links.map(({ id, link }) => (
           <li
             key={id}
             className='px-4 cursor-pointer capitalize py-6 text-4xl '>
             <Link to={link} smooth duration={500}>{link}</Link>
           </li>
         ))}
 
 
       </ul>

      )}
      
 
    </div>

  )
}

export default NavBar
