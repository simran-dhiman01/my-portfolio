import React from 'react'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='bg-gray-900 pt-10 text-white flex flex-col gap-5 items-center'>
            <div className='flex items-center w-full justify-around'>
                <h1 className='cookie-regular text-2xl sm:text-3xl'>Simranjeet Kaur</h1>
            
                {/* Social Links */}
                <div className='flex gap-2 items-center '>
                    <a href="https://github.com/simran-dhiman01"
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' hover:text-gray-400 transition-colors duration-200'>   <FaSquareGithub className='sm:w-8 sm:h-8 w-7 h-7' />  </a>

                    <a href="https://www.linkedin.com/in/simranjeetkaur67/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' hover:text-gray-400 transition-colors duration-200'> <FaLinkedin className='sm:w-8 sm:h-8 w-7 h-7' />  </a>

                    <a href="mailto:simrankaurdh5@gmail.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' hover:text-gray-400 transition-colors duration-200'> <MdEmail className='sm:w-10 sm:h-10 w-8 h-8' />  </a>
                </div>
            </div>

            <div className='py-2 bg-gray-700 text-center w-full'>
                <p className="text-xs sm:text-sm">© 2025 Simranjeet Kaur. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
