import React from 'react'
import { Link } from "react-scroll";
import { FaArrowDown } from 'react-icons/fa'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import './index.css'

const Portfolio = () => {
    return (
        <div id='portfolio' className='w-full h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='grid grid-rows-2  text-center items-center justify-center w-2/3 h-full'>
                    <div className='pt-5'> <img className='rounded-lg' src={portfolio1} alt="Portfolio1"/></div>
                    <div> <img className='rounded-lg' src={portfolio2} alt="Portfolio2"/></div>


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
