import React from "react";
import { TypeAnimation } from "react-type-animation";

// bg-gradient-to-l from-blue-500 via-purple-400 to-pink-400
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex h-screen pt-[150px] text-white max-w-[1024px] mx-auto"
      >
        <div className="p-5 text-center  items-center justify-center md:p-0 md:mx-auto flex flex-col gap-5 ">
          <h1 className="text-3xl md:text-7xl  font-bold  ">Hello, I'm</h1>
          <TypeAnimation
            className="w-fit h-fit text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 "
            sequence={[
              "Nilkant",
              1000,
              "Web Developer",
              1000,
              "Mobile Developer",
              1000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
          <p className="text-lg">
            A passionate Full Stack Web developer from India.{" "}
            <span className="text-2xl"> 👨‍🎓 </span>
          </p>
          <div className="flex gap-5">
            <a
              href="/Nilkant.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 p-[2px] hover:p-[2px] rounded  "
            >
              <button
                className="p-2 duration-500 hover:bg-slate-900 rounded w-full h-full 
              text-white "
              >
                Resume
              </button>
            </a>
            <a
              href="https://github.com/nilkantmanik"
              target="_blank"
              className="bg-purple-500 p-[2px] hover:p-[2px] rounded  "
            >
              <button
                className="p-2 duration-500  hover:bg-purple-500 bg-slate-900  w-full h-full 
              text-white "
              >
                Github
              </button>
            </a>
          </div>
        </div>
        {/* <div className="absolute   min-w-[50px] min-h-[50px] top-[-10px] right-[30vw] border-[150px] border-purple-800 blur-[200px]"></div> */}

        {/* <div className="flex-1 w-full h-full  ">
          <img className="w-full h-full" src="../images/picofme.jpg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Hero;
