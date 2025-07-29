
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-transparent  backdrop-blur-3xl no-scrollbar">
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          {/* Name Logo */}
          <div className=' text-gray-900 text-3xl md:text-4xl lg:text-5xl ml-5 lg:ml-10'>
            <span className='cookie-regular'>&lt;</span>
            <span className='cookie-regular'>Simran</span>
            <span className='cookie-regular'> /</span>
            <span className='cookie-regular'>&gt;</span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex justify-between items-center gap-4 lg:gap-6'>
            <ul className="flex gap-4 text-lg lg:text-xl lg:gap-6 items-center justify-center">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:border-b-2 text-gray-900 transition font-normal"
                 >
                  <Link
                    to={item.id}
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    duration={100}
                    offset={-70} >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* For Mobile Screens */}
          <button className='md:hidden' onClick={() => setOpen(!open)}>
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GiHamburgerMenu className="text-gray-900 h-6 w-6" />
            </motion.div>
          </button>

          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black h-screen z-40"
                  onClick={()=>setOpen(!open)}/>
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 right-0 w-1/2 h-screen bg-white z-50 shadow-lg p-4" >
                  <button
                    className="absolute top-4 right-4"
                    onClick={() => setOpen(false)} >
                    <motion.div
                      initial={{ rotate: 180, opacity: 1 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.5 }} >
                      <X className="w-7 h-7 text-gray-900" />
                    </motion.div>
                  </button>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="flex flex-col px-4 gap-4 mt-16" >
                    {menuItems.map((item) => (
                      <motion.li
                        key={item.id}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="text-lg text-gray-900">
                        <Link
                          to={item.id}
                          smooth={true}
                          spy={true}
                          duration={100}
                          offset={-70}
                          className="cursor-pointer hover:border-b-2 transition font-normal" >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

