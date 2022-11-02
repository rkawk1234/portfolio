import React from 'react'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import './index.css'

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: portfolio1,
        },
        {
          id: 2,
          src: portfolio2,
        },


      ];

    return (
        <div id='portfolio' className='w-full h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='grid grid-rows-2  w-2/3 h-full py-20'>
                    <div className=''> <img className='rounded-lg' src={portfolio1} alt="Portfolio1"/></div>
                    <div> <img className='rounded-lg' src={portfolio2} alt="Portfolio2"/></div>


                </div>

                


            </div>

        </div>
    )
}

export default Portfolio
