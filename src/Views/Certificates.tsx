import { certificates } from "../Data/Data";
import { useEffect, useState } from "react";

const Certificates = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-12 items-center h-full mt-20 px-4 md:px-8 lg:px-16">
          <h1 className="text-white font-serif text-3xl font-extrabold">My Certifications</h1>
            {certificates.map((exp, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 p-6 md:p-10 ${
                        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    } bg-gradient-to-r from-black via-black to-white text-white shadow-lg transition-all duration-300 
                        ${
                            loaded
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }
                        hover:scale-105 hover:bg-gray-600 hover:shadow-xl`}
                    style={{
                        transition:
                            "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
                        transform: loaded ? "translateY(0)" : "translateY(20px)",
                        opacity: loaded ? 1 : 0,
                        borderRadius: index % 2 !== 0
                            ? "50px 0 0 50px" 
                            : "0 50px 50px 0",
                    }}
                >
                    <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mr-4 mb-4 md:mb-0"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-bold text-lg md:text-xl">{exp.title}</h3>
                        <h4 className="text-md md:text-lg">{exp.issuer}</h4>
                        <p className="text-sm text-gray-300">{exp.date}</p>
                        <p className="mt-2 text-sm md:text-base">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certificates;
