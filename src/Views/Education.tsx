import React from "react";

const Education = () => {
    return (
        <div className="flex flex-col h-screen ">
            <div className="flex justify-center">
                <div
                    className="text-gray-500 font-serif font-extrabold"
                    style={{ fontSize: 80 }}
                >
                    2017-2024
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-40 sm:my-10 px-4">
                <div className="flex flex-col items-start w-full sm:w-96 text-justify">
                    <h1
                        className="text-white font-serif font-extrabold"
                        style={{ fontSize: 40 }}
                    >
                        EDUCATION
                    </h1>
                    <div className="w-64 h-4 bg-blue-500 my-2"></div>
                    <p className="text-white">
                        I have pursued a BSc Degree in Data Science and
                        Applications from IIT Madras, equipping me
                        with strong analytical and data-driven problem-solving
                        skills. Simultaneously, I pursued a Bachelor of
                        Technology in Computer Science and Engineering from
                        RGUKT Basar, gaining in-depth knowledge of
                        software development, algorithms, and systems. Prior to
                        my B.Tech, I completed my Pre University Course (M.P.C)
                        at RGUKT Basar, where I developed a solid
                        foundation in mathematics and physics. I began my
                        academic journey at B.B.H.S Warangal, where I completed
                        my Secondary High School education in 2018.
                    </p>
                </div>
                <div className="flex flex-col gap-10 justify-center w-full sm:w-auto">
                    <div className="flex flex-col">
                        <h1 className="text-white font-serif font-extrabold">
                            BSc Degree
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            IIT Madras | Data Science and Applications |
                            2021-2024{" "}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-white font-serif font-extrabold">
                            Bachelor of Technology
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            RGUKT Basar | Computer Science and Engineering |
                            2020-2024
                        </p>
                    </div>
                    <div>
                        <h1 className="text-white font-serif font-extrabold">
                            Pre University Course
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            RGUKT Basar | M.P.C | 2018-2020
                        </p>
                    </div>
                    <div>
                        <h1 className="text-white font-serif font-extrabold">
                            Secondary High School
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            B.B.H.S Warangal | 10th | 2017-2018
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
