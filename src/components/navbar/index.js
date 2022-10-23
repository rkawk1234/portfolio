import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import './index.css'


const NavBar = () => {

  const [curstate, setCurstate] = useState()

  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Portfolio'
    },
    {
      id: 4,
      link: 'Contact'
    },
  ]
  return (
    <div className='fixed flex justify-between items-center w-full h-20 text-white bg-black'>
      <div>
        <h1 className='text-5xl font-signature'>M</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link}) =>(
          <li
          key={id} 
          className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>
          {link}
        </li>
        ))}
      </ul>
      <div
        onClick ={() => setCurstate(!curstate)}
        className='cursor-pointer pr-4 z-10 text-gray-500'>
          {curstate? <FaTimes size={30}/> : <FaBars size={30}/>}

      </div>

 
    </div>

  )
}

export default NavBar
