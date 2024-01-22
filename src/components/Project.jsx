import React from "react";
import { Link } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
const Project = ({ item }) => {
  return (
    <div className="flex flex-col my-7   mr-5 rounded-xl h-[400px] relative ">
      <div className=" h-[50%]">
        <img
          className="rounded-t-xl"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "0% 22%",
          }}
          src={item.img}
          alt=""
        />
      </div>
      <div className=" h-[50%] flex flex-col bg-slate-950 rounded-b-xl  pl-4 pt-2">
        <h1 className="text-lg font-semibold bg-slate-950  ">{item.title}</h1>
        <h1 className="text-sm text-ellipsis line-clamp-1 bg-slate-950 pr-1 ">
          {item.desc}
        </h1>
        <div className="flex flex-wrap bg-slate-950 pt-5">
          {item.skills.map((item, index) => (
            <div className="bg-slate-950 text-sm p-2 m-1 border-2 border-purple-500 rounded-full opacity-[0.5]">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full h-full  left-0 top-0 gap-5 opacity-[0] hover:bg-[rgba(0,0,0,0.2)] hover:opacity-[1] transition-all  duration-700">
        {/* {item.demo !== "NULL" ? (
          <Link to={item.demo} target="_blank" className="bg-transparent">
            <div className="w-[50px] h-[50px]  rounded-[50%] bg-white flex bg-gradient-to-r from-purple-600 to-pink-600 hover:cursor-pointer transition-all ease-in duration-300  hover:scale-[1.1] items-center justify-center">
              <AiFillEye className="bg-transparent " size={30} />
            </div>
          </Link>
        ) : null} */}

        <Link to={item.source} className="bg-transparent">
          <div className="w-[50px] h-[50px] rounded-[50%] bg-white flex bg-gradient-to-r from-purple-600 to-pink-600 hover:cursor-pointer transition-all ease-in duration-300  hover:scale-[1.1] items-center justify-center">
            <BiCodeAlt className="bg-transparent " size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
