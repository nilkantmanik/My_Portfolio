import React, { useState } from "react";
// import Navlinks from "../NavLinks";
import { Link } from "react-scroll";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

import pf1 from "../../public/images/pf1.png";
const navlinks = [
  {
    path: "home",
    title: "Home",
  },
  {
    path: "about",
    title: "About",
  },
  {
    path: "projects",
    title: "Projects",
  },
  {
    path: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed z-[5] w-full bg-opacity-90 ">
      <div className="p-5  max-w-[1024px] mx-auto h-[12vh] bg-opacity-90 flex items-center justify-between ">
        <div>
          <h1 className="p-5 md:p-0  text-2xl md:text-3xl font-semibold   bg-gradient-to-r stroke-transparent  bg-clip-text text-transparent from-purple-500 to bg-pink-500 flex">
            {/* <img src={pf1} style={{ height: "32px", width: "36px" }} /> */}
            Nilkant
          </h1>
        </div>
        <div>
          {toggle ? (
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              className="md:hidden block text-3xl font-bold mr-5 text-white"
            />
          ) : (
            <HiMenu
              onClick={() => setToggle(!toggle)}
              className="md:hidden block text-white text-3xl font-bold mr-5"
            />
          )}
          {/* mobile  */}
          <ul
            className={`duration-500 text-center p-[100px] gap-6 md:hidden ${
              toggle ? "left-0" : "left-[-100%]"
            } fixed w-full h-screen text-white list-none`}
          >
            {navlinks.map((item, index) => (
              <li className="p-5 text-xl" key={index}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  className="
                  text-slate-300
                  font-bold
                  duration-300
                  hover:cursor-pointer"
                  activeClass="active"
                  spy
                  // activeStyle={{
                  //   // border: "2px black solid",
                  //   font: "bold",

                  //   background: "linear-gradient(to right, #A855F7, #ec4899)",
                  //   WebkitBackgroundClip: "text", // For WebKit-based browsers
                  //   backgroundClip: "text",
                  //   color: "transparent",
                  // }}
                  to={item.path}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* web  */}
          <ul className="hidden md:flex gap-10 text-white list-none ">
            {navlinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="
                  text-slate-300
                  font-bold
                  duration-300
                  hover:cursor-pointer"
                  activeClass="active"
                  spy
                  // activeStyle={{
                  //   // border: "2px black solid",
                  //   font: "bold",

                  //   background: "linear-gradient(to right, #A855F7, #ec4899)",
                  //   WebkitBackgroundClip: "text", // For WebKit-based browsers
                  //   backgroundClip: "text",
                  //   color: "transparent",
                  // }}
                  to={item.path}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
