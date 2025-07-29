
const Experience = () => {
  return (
    <section id='experience' className='bg-gradient-to-r from-[#879069] to-[#a4ac86] pt-20 pb-36 px-6 sm:px-10'>
      <div className='text-2xl sm:text-3xl md:text-4xl text-gray-900 text-center'>
        <h1 className='px-3 border-t-2 border-b-2 merienda-bold inline'>Experience</h1>
      </div>

      <div className='my-10 md:text-lg font-medium text-center'>
        <p>Shaping Skills Through Real-World Challenges.</p>
      </div>
      <ExperienceCard
        title='Full Stack developer Intern'
        company='B2World, Bangalore'
        duration='July 2025 - Present'
        description={[
          'Handling both frontend and backend development independently.',
          'Responsible for building responsive user friendly interfaces',
          'Integrating REST APIs and handling backend logic and database operations.',
          'Collaborating closely with senior developers for code reviews and best practices.']}
        skills={['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Postman', 'Tailwind CSS', 'Rest API Development']} />
    </section>
  )
}

export default Experience



const ExperienceCard = ({ title, company, duration, description, skills }) => {
  return (
    <div className="bg-gray-700 mt-4 p-2 w-[97%] sm:[85%] lg:w-[60%] mx-auto text-white border border-white/10 shadow-xl shadow-gray-900 rounded-lg hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col gap-4 bg-gray-900 rounded-lg p-4">
        {/* Title and Company Info */}
        <div>
          <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
          <div className="flex sm:flex-row flex-col justify-between text-sm text-gray-400 mt-1">
            <span>{company}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Description List */}
        <ul className="list-disc px-2 sm:pl-5 space-y-2 text-xs sm:text-sm text-gray-200">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Skills Badge Section */}
        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-gray-600 text-xs sm:text-sm text-white/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

