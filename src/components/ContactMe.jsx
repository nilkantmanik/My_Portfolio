import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <>
      <div
        id="contact"
        className="max-w-[1024px] h-[90vh] mx-auto pt-[110px] text-white"
      >
        <div>
          <div className="flex flex-col  items-center ">
            <h1>Get in Touch</h1>
            <h1 className="text-4xl font-bold mt-2 mb-10">Contact Me</h1>
            <div className="md:w-1/3  rounded-md bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="flex gap-5 items-center justify-evenly  rounded-md px-[60px] py-[40px]">
                <a
                  className="hover:scale-[1.1] duration-500"
                  href="mailto:nilkantmanik87@gmail.com"
                >
                  <AiOutlineMail size={36} />
                </a>
                <a
                  className="hover:scale-[1.1] duration-500"
                  href="https://github.com/nilkantmanik"
                >
                  <AiFillGithub size={36} />
                </a>
                <a
                  className="hover:scale-[1.1] duration-500"
                  href="https://www.linkedin.com/in/nilkant-manik/"
                >
                  <AiFillLinkedin size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full opacity-90 ">
        <div className="absolute bottom-[0px]  border-[150px] border-purple-800 blur-[200px] z-[0]   bg-blue-200" />
        <div className="text-white h-[70px]  flex justify-between  items-center px-10">
          <h1>Nilkant</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
