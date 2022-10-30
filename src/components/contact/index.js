import React, { useRef } from 'react'
import { Link } from "react-scroll";
import { FaHome } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import './index.css'



const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hori067', 'template_99jmmfe', form.current , 'YBYjcFv8krxRbq_-f')
          .then((result) => {
              alert("Message Sent",result.text)
          }, (error) => {
              alert("Please try again",error.text)
          });

      };
    return (
        <div id='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-400 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>

                <div className='flex flex-col items-center justify-center h-full w-2/3'>

                    <section className="bg-white dark:bg-gray-900 w-full">
                        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                            {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For any </p> */}
                            <form ref={form} class="space-y-8" onSubmit={sendEmail}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                                </div>
                                <div>
                                    <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                                    <input type="text" name="fullName" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full name" required />
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className='py-10 px-10 mx-0 min-w-full flex flex-col items-center'>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center  text-black border border-gray-300 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                                </div>
                            </form>
                        </div>
                    </section>



                </div>
                <div className='pb-3 hover:scale-125 text-black'>
                    <Link to='home' smooth duration={500}>
                        <FaHome size={50} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact
