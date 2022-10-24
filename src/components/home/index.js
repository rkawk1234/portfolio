import React from 'react'
import { Link } from "react-scroll";
import './index.css'
import {FaArrowDown} from 'react-icons/fa'
import ReactTailwind from "../../assets/reactTailwind.png"

const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white animate-pulse'> Welcome to My Website!</h2>
                <p className='text-lg sm:text-xl text-gray-600 py-2'> Built with Javascript, React and Tailwind CSS </p>
            </div>

            <div>
                <img
                src={ReactTailwind}
                alt="react"
                className='rounded-2xl mx-auto w-2/3 md:w-2/3 hover:animate-pulse'>

                </img>
                
            </div>

            <div className='absolute bottom-3 hover:scale-125 text-black'>
                <Link to='about' smooth duration={500}>
                <FaArrowDown size={50}/>
                </Link>
                </div>

        {/* <div className='mx-auto w-2/3 md:w-full'>
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
                
        </div> */}

    </div>
</div>
  )
}

export default Home
