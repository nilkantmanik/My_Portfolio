import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-[0px]  border-[150px] border-purple-800 blur-[200px] z-[0]   bg-blue-200" />
        <div className="text-white h-[70px] mt-[90px]  flex justify-between  items-center px-10">
          <h1>.code</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
