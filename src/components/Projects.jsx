import React, { useState } from "react";
import Project from "./Project";
import projects from "../data/projects.json";
const Projects = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (e) => {
    setTag(e.target.getAttribute("name"));
  };

  const filteredProjects = projects.filter((item) => {
    return item.tag.includes(tag);
  });

  return (
    <div
      id="projects"
      className="md:px-5 max-w-[1024px] mx-auto pt-[140px] text-white"
    >
      <h1 className="font-bold text-4xl text-center">Projects</h1>
      <div className="pt-10 flex items-center justify-center gap-3">
        <div
          name="All"
          onClick={handleTagChange}
          className={`${
            tag === "All" ? "border-purple-600" : "border-slate-600"
          } font-semibold hover:cursor-pointer duration-500 py-3 px-6 border-2  rounded-full`}
        >
          All
        </div>
        <div
          name="Web"
          onClick={handleTagChange}
          className={`${
            tag === "Web" ? "border-purple-600" : "border-slate-600"
          } font-semibold hover:cursor-pointer duration-500 py-3 px-6 border-2  rounded-full`}
        >
          Web
        </div>
        <div
          name="Mobile"
          onClick={handleTagChange}
          className={`${
            tag === "Mobile" ? "border-purple-600" : "border-slate-600"
          } font-semibold ease-in hover:cursor-pointer duration-500 py-3 px-6 border-2  rounded-full`}
        >
          Mobile
        </div>
      </div>

      {/* project  */}
      <div className="p-5 md:p-0  md:grid grid-cols-3  ">
        {filteredProjects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
