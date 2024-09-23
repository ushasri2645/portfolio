import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import "../index.css";
const Home = () => {
    const titles = [
        "ASPIRING DATA SCIENTIST",
        "CURIOUS INTERN AT EVEREST ENGINEERING",
        "MOST AWAITED TO BECOME SOFTWARE CRAFTSPERSON",
    ];
    const [index, setIndex] = useState(0);

    const props = useSpring({
        opacity: 1,
        transform: "translateX(0)",
        from: { opacity: 0, transform: "translateX(5%)" },
        reset: true,
        config: { duration: 3000 },
        onRest: () => {
            setIndex((index + 1) % titles.length);
        },
    });

    return (
        <div className="flex flex-col min-h-screen mx-5 ">
            <div className="flex flex-col md:flex-row justify-center lg:p-44 md:p-20 sm:p-20">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <p className="text-blue-500 font-extrabold font-serif italic">
                        Hello !!!
                    </p>
                    <h1 className="text-white text-4xl md:text-5xl font-bolder ">
                        <span className="font-light text-gray-400">I'm</span>{" "}
                        Usha Sri <br />
                        Gudikandula
                    </h1>
                    <animated.p
                        className="text-white bg-black p-2 rounded max-w-max italic font-bold"
                        style={props}
                    >
                        {titles[index]}
                    </animated.p>
                    <p className="text-gray-200  pt-5 md:pt-9 text-base md:text-lg">
                        I am a passionate individual with a keen interest in
                        data science and software development. My journey in
                        technology began with a curiosity to understand how data
                        shapes our world.
                    </p>
                </div>
                <div className="flex justify-center w-full md:w-1/2 mt-6 md:mt-0">
                    <img
                        style={{ width: "300px", height: "auto" }}
                        className="rounded-full"
                        src={require("../assets/me.jpg")}
                        alt="usha"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center mx-5 md:mx-28 mb-5">
                <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                <div className="w-5/6 h-1 bg-gray-200 mr-4"></div>
                <div className="text-white font-mono">PORTFOLIO 2024</div>
            </div>
        </div>
    );
};

export default Home;
