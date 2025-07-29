import React from 'react'


const Education = () => {
    return (
        <section id='skills' className='px-10 pt-20 pb-36 bg-gradient-to-r  from-[#879069] to-[#a4ac86] flex-col justify-center justify-items-center w-full'>

            <div className='text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center'>
                <h1 className='px-3 border-t-2 border-b-2 merienda-bold inline'>Education</h1>
            </div>

            {/* Education Card */}
            <div className='bg-gray-700 mt-10 md:mt-20 w-full md:w-auto xl:w-1/2 border transform duration-300 hover:scale-105 border-white/10 shadow-lg shadow-gray-800 rounded-lg p-2'>
                <div className='bg-gray-900 card-effect  text-white p-3 sm:p-6 flex flex-col gap-3 rounded-lg '>
                    <h1 className=' text-xl sm:text-2xl font-bold'>Punjabi University Patiala (Punjab)</h1>
                    <h2 className='text-sm sm:text-base'>Course : <span className='text-gray-200'>B.Tech - Electronics & Communication Engineering</span> </h2>

                    <div className='flex flex-col gap-3'>
                        <h2 className='text-sm sm:text-base'>Session : <span className='text-gray-200'>2021 -2025</span> </h2>

                        <h2 className='text-sm sm:text-base'>CGPA : <span className='text-gray-200'>7.5 / 10</span> </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
