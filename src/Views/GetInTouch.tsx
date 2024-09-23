import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from './GetInTouch.module.css'

import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

import { TbSquareRoundedLetterU } from "react-icons/tb";
import { TbSquareRoundedLetterS } from "react-icons/tb";
import { TbSquareRoundedLetterH } from "react-icons/tb";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { TbSquareRoundedLetterR } from "react-icons/tb";
import { TbSquareRoundedLetterI } from "react-icons/tb";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const serviceID = "service_5wrpz3o";
        const templateID = "template_mit6a1g";
        const userID = "bBwvfFWyEgPXBJmfG";

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log("Email sent successfully", response);
                toast("Thank you for Sharing the Idea. Will definitely get back to you.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                if(!submitted){
                setSubmitted(true)};
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setSubmitted(false);
            });
    };
    return (
        <div className="py-10 flex flex-col min-h-screen">
            <div className="flex flex-col items-center">
                <h1 className="text-white font-extrabold text-5xl">
                    GET IN TOUCH
                </h1>
                <p className="italic text-blue-500 font-serif p-2">
                    Let's Work Together
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-x-28  gap-y-9 sm-gap-10 my-20">
                <div className="flex flex-col items-center gap-2">
                    <a href="tel:6303961097"  >
                        <IoCallOutline color="33acff" size={45} />
                    </a>
                    <h1 className="text-white font-bold">Mobile</h1>
                    {/* <div>
                        <h4 className="text-gray-400">+91 6303961097</h4>
                        <h4 className="text-gray-400">+91 9849190455</h4>
                    </div> */}
                </div>
                <div className="flex flex-col items-center gap-2">
                    <a href="mailto:ushasrigudikandula456@gmail.com">
                        <CiMail color="33acff" size={45} />
                    </a>
                    <p className="text-center text-white font-bold">Email</p>
                    <div>
                        {/* <h4 className="text-gray-500">
                            ushasrigudikandula456@gmail.com
                        </h4> */}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <a
                        href="https://www.google.com/maps?q=17.9934,79.5347"
                         target="_blank" rel="noreferrer"
                    >
                        <CiLocationOn color="33acff" size={45} />
                    </a>
                    <p className="text-center text-white font-bold">Address</p>
                    {/* <div>
                        <p className="text-gray-500">SBH Colony, Subedari </p>
                        <p className="text-gray-500">Warangal, Telangana </p>
                    </div> */}
                </div>
                <div className="flex flex-col items-center gap-2">
                    <a href="https://github.com/USHASRI1112" target="_blank" rel="noreferrer">
                        <FiGithub color="33acff" size={45} />
                    </a>
                    <p className="text-center text-white font-bold">Github</p>
                    {/* <div>
                        <h4 className="text-gray-500">ID: USHASRI1112</h4>
                    </div> */}
                </div>
                <div className="flex flex-col items-center gap-2">
                    <a
                        href="https://www.linkedin.com/in/usha-sri-gudikandula"
                        target="_blank" rel="noreferrer"
                    >
                        <CiLinkedin color="33acff" size={45} />
                    </a>
                    <p className="text-center text-white font-bold">
                        Linked In
                    </p>
                    {/* <div>
                        <h4 className="text-gray-500">
                            usha-sri-gudikandula456
                        </h4>
                    </div> */}
                </div>
            </div>
            <div>
                <div className="flex flex-row items-center mx-10">
                    <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                    <div className="w-full h-1 bg-gray-500"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                </div>
                <div className="flex flex-wrap flex-row gap-6 justify-center">
                    <TbSquareRoundedLetterU color="grey" size={65} />
                    <TbSquareRoundedLetterS color="grey" size={65} />
                    <TbSquareRoundedLetterH color="grey" size={65} />
                    <TbSquareRoundedLetterA color="grey" size={65} />
                    <TbSquareRoundedLetterS color="grey" size={65} />
                    <TbSquareRoundedLetterR color="grey" size={65} />
                    <TbSquareRoundedLetterI color="grey" size={65} />
                </div>
                <div className="flex flex-row items-center mx-10">
                    <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                    <div className="w-dvw sm-w-full h-1 bg-gray-500 mr-1"></div>
                    <div className=" text-gray-500">PortFolio 2024</div>
                    <div className="w-dvw sm-w-full h-1 bg-gray-500 ml-1"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center align-middle items-center py-10">
                <h1 className="text-white font-serif font-extrabold" style={{fontSize:30}}>
                    Contact Me
                </h1>
                <section className={styles.contactUs}>
                <div className={styles.contactContainer}>
                    <p className={styles.contactNoEmail}>
                        Have a project in mind? Let's discuss how can I help.
                    </p>
                    <form
                        className={styles.contactForm}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.leftSide}>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="name"
                                    className={styles.formLabel}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="email"
                                    className={styles.formLabel}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="phone"
                                    className={styles.formLabel}
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder="Enter your Phone number"
                                    onChange={handleChange}
                                    className={styles.formInput}
                                />
                            </div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.formGroup}>
                                <label
                                    htmlFor="message"
                                    className={styles.formLabel}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.formTextarea}
                                    placeholder="Enter your Message or Query"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className={styles.submitContainer}>
                            <button
                                type="submit"
                                className={styles.submitButton}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            </div>
        </div>
    );
};

export default GetInTouch;
