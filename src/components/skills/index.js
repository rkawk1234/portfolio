import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiPython, SiDjango, SiBootstrap, SiTailwindcss} from 'react-icons/si'
import './index.css'

const Skills = () => {
     var size =120
     var htmlColor = '#e34c26'
     var cssColor = '#264de4'
     var jsColor = '#f0db4f'
     var pythonColor = '#0000FF'
     var reactColor = '#61DBFB'
     var djangoColor = '#092e20'
     var boostrapColor = '#563d7c'
     var tailwindColor = '#42a5f5'

    return (
        <div id='skills' className='w-full h-screen bg-gradient-to-b from-gray-600 to-gray-600 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='flex flex-col items-center justify-center h-full w-full'>
                    <div className='pt-8 pb-8 w-full text-center'>
                        <p className='text-4xl inline animate-pulse'>My Skills</p>
                    </div>
                    <div className='w-full text-center'><p name='brandName' className='invisible'>Here goes the name</p></div>
                    <div className='grid grid-cols-2 w-full text-center  '>
                        <div className='grid grid-rows-3'>
                           <div className='flex w-full h-full items-center justify-center'><p className='text-2xl animate-pulse'>Languages</p></div>
                            <div className='grid grid-cols-2 place-items-center'>
                                <div className='hover:scale-105'><FaHtml5 size={size} color={htmlColor}/></div>
                                <div className='hover:scale-105'><FaCss3Alt size={size} color={cssColor}/></div>
                            </div>
                            <div className='grid grid-cols-2 place-items-center'>
                                <div className='hover:scale-105'><SiJavascript size={size} color={jsColor}/></div>
                                <div className='hover:scale-105'><SiPython size={size} color={pythonColor}/></div>
                            </div>

                        </div>
                        <div className='grid grid-rows-3'>
                        <div className='flex w-full h-full items-center justify-center'><p className='text-2xl animate-pulse'>Frameworks</p></div>
                            <div className='grid grid-cols-2 place-items-center'>
                                <div className='hover:scale-105'><FaReact size={size} color={reactColor}/></div>
                                <div className='hover:scale-105'><SiDjango size={size} color={djangoColor}/></div>
                            </div>
                            <div className='grid grid-cols-2  place-items-center'>
                                <div className='hover:scale-105'><SiBootstrap size={size} color={boostrapColor}/></div>
                                <div className='hover:scale-105'><SiTailwindcss size={size} color={tailwindColor}/></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
