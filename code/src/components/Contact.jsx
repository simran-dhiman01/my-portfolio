import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Sending your message...',
      {
        position: "bottom-right",
         theme: 'dark',
      }
    );

    emailjs.sendForm(
      "service_21rby5j",  //Use your Emailjs Service id here.
      "template_iqqephe",   //Use your Emailjs Template id here.
      form.current,
      "9HwgIx0lcZ3kzG4Ef",   //Use your Emailjs Public Key here.
    )
      .then(
        () => {
          setIsSent(true);
          form.current.reset()
          toast.update(toastId, {
            render: 'Message sent successfully!',
            type: 'success',
            isLoading: false,
            closeButton: true,
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          })
        },

      ).catch(() => {
        toast.update(toastId, {
          render: 'Failed to send message.',
          type: 'error',
          isLoading: false,
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          closeButton: true,
        })
      });
  }

  return (
    <section id='contact' className='bg-gradient-to-l from-[#879069] to-[#a4ac86] pt-20 pb-36 flex flex-col justify-center items-center px-6 sm:px-10'>
      <ToastContainer />
      <div className='text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center'>
        <h1 className='px-3 border-t-2 border-b-2 merienda-bold inline'>Contact</h1>
      </div>

      <div className='my-10 md:text-lg font-medium text-center'>
        <p>Open to collaboration and new opportunities — feel free to reach out!</p>
      </div>

      {/* Contact form */}
      <div className='bg-gray-900 border text-white border-violet-900 shadow-lg shadow-gray-800 rounded-lg px-3 py-4 w-[95%] sm:w-[60%] md:w-[50%] lg:w-[35%]'>
        <h1 className="text-center text-xl my-4">
          <span className="inline-block font-semibold border-b-2 border-violet-800 pb-1">
            Get In Touch
          </span>
        </h1>

        <form onSubmit={sendEmail} ref={form}
          className='py-4 px-2 flex flex-col gap-3'>
          <input
            type="email"
            name="user_email"
            placeholder='Enter Your Email'
            className='border border-violet-900  outline-none focus:ring-2 focus:ring-violet-800 rounded px-3 py-2' />

          <input
            type="text"
            name="user_name"
            placeholder='Enter Your Name'
            className='border border-violet-900 rounded focus:ring-2 focus:ring-violet-800 outline-none px-3 py-2' />

          <input
            type="text"
            placeholder='Subject'
            name="email_subject"
            className='border border-violet-900 rounded focus:ring-2 focus:ring-violet-800 outline-none px-3 py-2' />

          <textarea
            name="email_message"
            placeholder='Message'
            className='border border-violet-900 rounded focus:ring-2 focus:ring-violet-800 outline-none px-3 py-2'></textarea>

          <button className='w-full mt-4 p-2 cursor-pointer text-lg font-semibold rounded bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800'>Send</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact
