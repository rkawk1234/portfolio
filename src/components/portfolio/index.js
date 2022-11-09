import React from 'react'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'

import './index.css'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      describe:"Cryptocurrency website with live cryptocurrency prices. Built with Django and Python"
    },
    {
      id: 2,
      src: portfolio2,
      describe: "Live Cryptocurrency prices  "
    },
    {
      id: 3,
      src: portfolio3,
      describe:"Latest football scores and records. Demonstrating full stack web application"
    },
    {
      id: 4,
      src: portfolio4,
      describe:"Check-list app with React, MongoDB, Node, and Express"
    },
    {
      id: 5,
      src: portfolio5,
      describe:"Social Media website project by Django"
    },
    {
      id: 6,
      src: portfolio6,
      describe:"PostBook by Min Suk Kim"
    },


  ];

  return (
    <div id='portfolio' className='w-full h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,describe }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-125 "
              />
              <div className="flex items-center justify-center">
                <p className='text-sm'>{describe}</p>


              </div>
            </div>
          ))}
        </div>



      </div>

    </div>
  )
}

export default Portfolio
