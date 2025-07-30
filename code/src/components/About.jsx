import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { MdDownload } from "react-icons/md";


const About = () => {
  return (
    <section id='about' className=' text-rich-black lg:py-10 pt-6 md:my-8 px-5 md:px-[7vw] lg:px-[15vw]'>
      <div className='flex flex-col-reverse md:flex-row justify-between my-20 md:mt-28 items-center'>
        {/* Text Side */}
        <div className='md:w-1/2 text-center md:text-left cursor-default mt-8 md:mt-0'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900'>Hi, I'm</h1>
          <h1 className='merienda-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight'>Simranjeet Kaur</h1>
          <div className='text-xl md:text-2xl justify-center md:justify-normal font-semibold flex flex-wrap items-center gap-2 leading-tight my-4 text-blue-950'>
            <span className='text-[#f9f6ee] '>I am a</span>
            {/* Continuous Typing skillsset */}
            <span >
              <Typewriter
                words={[
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                  'Programmer',
                ]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          {/* Small about paragraph */}
          <p className='text-lg'>Full Stack Developer crafting seamless web experiences with clean code, responsive design, and full-stack functionality.</p>
          <div className='flex flex-row items-center justify-center md:justify-normal mt-6 gap-3 sm:gap-8'>
            {/* Resume Link  */}
            <button className='px-3 py-2 text-base sm:text-lg bg-black hover:bg-gray-800 font-semibold cursor-pointer shadow-lg text-white outline-none rounded-lg'>
              <a href="https://drive.google.com/file/d/1Sn3ReAPNo6-ua15ax7nJnypJ1yCLk2fn/view?usp=sharing"
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-1'>
                <MdDownload className='w-6 h-6' />
                <span> Resume </span>
              </a></button>

            {/* Github and Linkedin */}
            <div className='flex gap-2 items-center '>
              <a href="https://github.com/simran-dhiman01"
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:text-gray-800 transition-colors duration-200'>   <FaSquareGithub className='w-10 h-10 sm:w-12 sm:h-12 ' />  </a>

              <a href="https://www.linkedin.com/in/simranjeetkaur67/"
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:text-gray-800 transition-colors duration-200'> <FaLinkedin className='w-10 h-10 sm:w-12 sm:h-12 ' />  </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="w-60 h-60 sm:w-64 rounded-full sm:h-64 md:w-80 md:h-80"
          >
            <motion.img
              src="simran pfp.jpg"
              alt="Zooming Image"
              className="rounded-full shadow-lg w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
              animate={{
                scale: [1, 1.05, 1], // Zoom in → Zoom out → Reset
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }} />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
