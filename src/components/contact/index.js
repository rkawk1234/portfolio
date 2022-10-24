import React from 'react'
import { Link } from "react-scroll";
import {FaHome} from 'react-icons/fa'
import './index.css'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-gradient-to-b from-gray-400 to-gray-600 text-white'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

            <div className='flex flex-col items-center justify-center h-full'>

                <div className='pt-8 pb-8'>
                    <p className='text-4xl inline'>Contact</p>
                </div>
                
            </div>
            <div className='pb-3 hover:scale-125 text-black'>
                    <Link to='home' smooth duration={500}>
                        <FaHome size={50}/>
                    </Link>
                </div>
        
        </div>
</div>
  )
}

export default Contact
