
const ExperienceCard = ({ company, role, duration, technologies, desc }:{company:any, role:any, duration:any, technologies:any, desc:any}) => {
  return (
    <>
    <div className='bg-black bg-opacity-50 shadow-lg rounded-lg p-4 m-4 h-[200px] relative'>
    <p className="absolute pr-5 right-0 text-gray-500 pt-10 hidden sm:block">{desc}</p>
        <div>
      <h2 className='text-xl text-white font-bold mb-5'>{company}</h2>
      <p className='text-gray-500 mb-2'>{role}</p>
      <p className='text-gray-500 mb-2'>{duration}</p>
      <p className='text-gray-500'>{technologies}</p>
      </div>
    </div>
    </>
  )
}

export default ExperienceCard

// Made RESTful apis<br />Created interactive UIs<br />Integrated LLMs<br />Worked on large scale projects