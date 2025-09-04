import React from 'react'
import jobportal from '../assets/Jobportal.png'
import spreadsheet from '../assets/spreadsheet.png'
import taskmanager from '../assets/taskmanager.png'
import votingapp from '../assets/votingapp.jpg'
import perfumeshop from '../assets/perfumeshop.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id='projects' className='bg-gradient-to-l from-[#879069] to-[#a4ac86] pt-20 pb-36 px-6 sm:px-10'>
      <div className='text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center'>
        <h1 className='px-3 border-t-2 border-b-2 merienda-bold inline'>Projects</h1>
      </div>
      <div className='my-10 md:text-lg font-medium text-center'>
        <p>From Concepts to Code — A Journey Through Practical Development.</p>
      </div>

      {/* project cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 sm:space-y-12 sm:py-5 px-3 '>

        <Card
          image={jobportal}
          name="Job Portal Web App"
          description="A full-stack authentication based web application where Job seekers can search and apply for jobs, while recruiters can post job listings and manage applications. Built with a user-friendly interface and real-time features to streamline the hiring process."
          techstack={['React.js', 'Tailwind CSS ', 'Node.js', 'Express.js', 'MongoDB', 'Jwt', 'Multer']}
          live='https://job-portal-mernstack-1.onrender.com/'
          github='https://github.com/simran-dhiman01/job-portal-mernStack' />

        <Card
          image={taskmanager}
          name="Task Manager"
          description="A task management web app built using pure HTML, JavaScript, and Tailwind CSS for the frontend. It uses a custom backend API with JSON file storage to handle task creation, updates, and deletions—ensuring a fully functional and lightweight productivity tool."
          techstack={['HTML', 'JavaScript', 'Tailwind CSS', 'Node.js']}
          github='https://github.com/simran-dhiman01/Task-manager' />

        <Card
          image={votingapp}
          name="Voting App"
          description="A secure backend-based Voting App built with authentication, vote-tracking, and role-based access control to ensure fairness and integrity in the voting process."
          techstack={['Node.js', 'Express.js', 'MongoDB']}
          github='https://github.com/simran-dhiman01/voting-app-backend' />

        <Card
          image={perfumeshop}
          name="Perfume Shop"
          description="A full-stack web application for a mini perfume shop that showcases products and supports user interaction. Designed with both frontend and backend development to ensure seamless performance, dynamic content handling, and a smooth user experience."
          techstack={['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']}
          github='https://github.com/simran-dhiman01/mini-perfume-shop' />

        <Card
          image={spreadsheet}
          name="Spreadsheet"
          description="A lightweight spreadsheet-style UI built with React and TypeScript. Focused on clean layout, responsive design, and type-safe implementation."
          techstack={['React.js', 'Tailwind CSS', 'Typescript']}
          live='https://spreadsheet-react-five.vercel.app/'
          github='https://github.com/simran-dhiman01/spreadsheet-react' />

      </div>
    </section>
  )
}

export default Projects





const Card = ({ image, techstack, name, description, live, github }) => {
  return (
    <div className='bg-gray-900 py-8 px-6 relative shadow-lg shadow-gray-800 text-white rounded-lg flex gap-3 justify-between flex-col 
    w-[100%] sm:w-[70%] md:w-[100%] lg:w-[80%]'>
      <div className='flex flex-col gap-3'>
        <div className='text-lg sm:text-xl text-center pb-1 font-semibold '>
          <span className='border-b-2 pb-1 border-violet-700'>{name}</span>
        </div>
        <span className='text-base text-gray-300 mt-3'>{description}</span>
      </div>

      {/* Skills Badge Section */}
      <div className="flex flex-wrap gap-2 pt-2">
        {techstack.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-lg border border-gray-600 text-xs sm:text-sm text-white/90"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* image section */}
      <div className="p-3 bg-gray-800 relative rounded-lg mt-6 group overflow-hidden">
        <img src={image} alt="" className="w-full h-auto object-cover rounded-lg" />

        {/* Overlay background on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Buttons fade in on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-black text-white border border-white rounded-md text-2xl flex items-center gap-2 shadow-md hover:ring-2 hover:ring-white">
                <span>Live</span>
                <FaExternalLinkAlt className="text-white w-5 h-5" />
              </button>
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-black text-white border border-white text-2xl rounded-md flex items-center gap-2 shadow-md hover:ring-2 hover:ring-white">
                <span>Code</span>
                <FiGithub className="text-white w-5 h-5" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}