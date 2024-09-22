import { useEffect, useState } from 'react';
import { experiences } from '../Data/Data'; 

const Experience = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-12 min-h-screen items-center mt-10 px-4 md:px-8 lg:px-16">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`
            flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2
            ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
            bg-black p-4 rounded-lg shadow-lg transition-all duration-300 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            hover:scale-105 hover:bg-gray-600 hover:shadow-xl
          `}
          style={{
            transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            opacity: loaded ? 1 : 0,
          }}
        >
          <img
            src={exp.image} 
            alt={exp.title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex flex-col text-white">
            <div className='flex flex-row justify-start gap-3'>
              <h3 className="font-bold text-lg md:text-xl">{exp.title}</h3>
              <h4>-</h4>
              <h4 className="text-md md:text-lg">{exp.organization}</h4>
            </div>
            <p className="text-xs md:text-sm text-gray-300">{exp.timePeriod}</p>
            <p className="mt-2 text-sm md:text-base">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
