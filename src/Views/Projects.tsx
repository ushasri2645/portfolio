import { projects } from "../Data/Data";
import { useEffect, useState } from "react";

const Projects = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-row flex-wrap text-white justify-center gap-10 font-serif mx-8 ">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center shadow-lg rounded-lg p-4 mb-6   sm:w-[45%] md:mx-2 lg:w-[30%]  bg-black gap-5 transition-all duration-300 
                        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        hover:scale-105 hover:bg-gray-600 hover:shadow-xl`} 
                    style={{
                        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
                        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                        opacity: loaded ? 1 : 0,
                    }}
                >
                    <h2 className="font-bold text-xl">{project.title}</h2>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-96 h-64 object-cover rounded-lg mb-4 transition-transform duration-300"
                        style={{
                            transition: 'transform 0.3s',
                            transform: 'scale(1)',
                        }}
                    />
                    <p>
                        <strong>Tech Stack:</strong> {project.techStack}
                    </p>
                    <p>{project.timePeriod}</p>
                    <p>{project.description}</p>
                    <a href={project.link} target="blank" rel="noreferrer"><button className="flex justify-start bg-blue-500 p-2 rounded transition-colors duration-300 hover:bg-blue-600">
                        Source Code
                    </button></a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
