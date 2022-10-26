import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiPython, SiDjango, SiBootstrap, SiTailwindcss} from 'react-icons/si'
import './index.css'

const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen bg-gradient-to-b from-gray-600 to-gray-600 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='flex flex-col items-center justify-center h-full w-full'>
                    <div className='pt-8 pb-8 w-full text-center'>
                        <p className='text-4xl inline animate-pulse'>My Skills</p>
                    </div>
                    <div className='grid grid-cols-2 w-full text-center'>
                        <div className='grid grid-rows-3'>
                            <div>Languages</div>
                            <div className='grid grid-cols-2'>
                                <div><FaHtml5 /></div>
                                <div><FaCss3Alt /></div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div><SiJavascript /></div>
                                <div><SiPython /></div>
                            </div>

                        </div>
                        <div className='grid grid-rows-3'>
                            <div>Frameworks</div>
                            <div className='grid grid-cols-2'>
                                <div><FaReact /></div>
                                <div><SiDjango /></div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div><SiBootstrap /></div>
                                <div><SiTailwindcss /></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
