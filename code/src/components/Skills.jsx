import React, { useState } from 'react'
import { skillsData } from './data/skillsData'

const Skills = () => {
    return (
        <section id='skills' className='px-6 sm:px-10 pt-20 pb-36 bg-gradient-to-l from-[#879069] to-[#a4ac86] gap-5 flex-col justify-center justify-items-center w-full'>

            <div className='text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center'>
                <h1 className='px-3 border-t-2 border-b-2 merienda-bold inline'>Skills</h1>
            </div>
            <div className='my-10 md:text-lg font-medium text-center'>
                <p>The technical toolkit I’ve built through projects, learning, and practical experience.</p>
            </div>
            <SkillCard />
        </section>
    )
}

export default Skills


const SkillCard = () => {
    const [active, setActive] = useState('');

    return (
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 px-4 sm:px-6 md:px-10 py-8">
            <div className="relative flex flex-wrap items-center justify-center gap-5 sm:gap-10 w-full">
                {skillsData.map((obj) => {
                    const isActive = active === obj.category;

                    return (
                        <React.Fragment key={obj.category}>
                            {/* Category Card */}
                            <div
                                onClick={() => setActive(isActive ? '' : obj.category)}
                                className={`${isActive ? "bg-gray-700" : "bg-gray-900"
                                    } cursor-pointer transition-all text-base sm:text-lg md:text-xl card-effect w-36 sm:w-44 md:w-48 lg:w-56 flex items-center justify-center text-center py-4 sm:py-6 px-3 duration-500 border border-white/10 shadow-gray-800 ease-in-out text-white rounded-xl overflow-hidden shadow-lg`}
                            >
                                {obj.category}
                            </div>

                            {/* Popup Skills Grid */}
                            {isActive && (
                                <div
                                    onClick={() => setActive('')}
                                    className="absolute top-0 sm:top-full mt-4 w-[95%] sm:w-[80%] mx-auto z-20 cursor-pointer p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 items-center justify-center transition-all duration-500 border border-white/10 shadow-gray-800 ease-in-out bg-gray-700 text-white rounded-xl overflow-hidden shadow-lg"
                                >
                                    {obj.skills.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col gap-1 bg-gray-900 sm:gap-2 shadow-md shadow-violet-950 card-effect rounded-xl p-2 sm:p-3 justify-center items-center"
                                        >
                                            <img src={item.image} className="w-10 sm:w-12 h-8 sm:h-10 object-contain" alt={item.name} />
                                            <h1 className="text-xs sm:text-sm text-center">{item.name}</h1>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    )
}
