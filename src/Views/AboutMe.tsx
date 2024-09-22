const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 h-screen px-4">
            <div className="flex flex-col my-10  md:my-24 gap-4 w-full md:w-1/2">
                <img
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-3xl"
                    src={require("../assets/abtme2.png")}
                    alt="Usha"
                />
            </div>
            <div className="flex flex-col my-10 md:my-24 gap-4  w-full md:w-1/3">
                <h1 className="text-white font-bold">About Me</h1>
                <p className="text-white text-justify ">
                    My journey in technology is like a coin, with two distinct
                    yet complementary sides. One side is my passion for Full
                    Stack Development, where I build seamless, user-centric
                    applications. The other side is my deep interest in Data
                    Science, where I extract insights from data to drive
                    decisions.
                </p>
                <p className="text-white text-justify">
                    While I began with half knowledge, much like Abhimanyu, my
                    pursuit of learning has been relentless, aiming to achieve
                    the mastery of Arjun. I am continually evolving, striving to
                    become a well-rounded technologist by balancing software
                    development and data science expertise.
                </p>
                <p className="text-white text-justify">
                    On a personal level, I believe in being kind, loyal, and
                    disciplined—values that drive both my professional and
                    personal life. I am also deeply curious and goal-oriented,
                    always seeking to improve and explore new technologies. I
                    believe that perseverance and a positive mindset are key to
                    overcoming challenges and achieving success in all aspects
                    of life.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
