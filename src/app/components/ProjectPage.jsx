import React, { useState, useEffect } from "react";
import { AiOutlineLine } from "react-icons/ai";
import ProjectA from "../projects/ProjectA";
import ProjectB from "../projects/ProjectB";
import ProjectC from "../projects/ProjectC";
import ProjectD from "../projects/ProjectD";

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    setSelectedProject(["a", "b", "c", "d"].includes(hash) ? hash : "a");
  }, []);

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
    window.location.hash = project;
  };

  const unselectedStyle = {
    color: "#060B24",
    cursor: "pointer",
  };

  const selectedStyle = {
    color: "#FFCE63",
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col py-8 px-4 sm:py-16 xl:px-16">
      <div className="flex text-2xl sm:text-6xl gap-4 justify-center">
        <AiOutlineLine
          onClick={() => handleProjectSelection("a")}
          style={selectedProject === "a" ? selectedStyle : unselectedStyle}
        />
        <AiOutlineLine
          onClick={() => handleProjectSelection("b")}
          style={selectedProject === "b" ? selectedStyle : unselectedStyle}
        />
        <AiOutlineLine
          onClick={() => handleProjectSelection("c")}
          style={selectedProject === "c" ? selectedStyle : unselectedStyle}
        />
        <AiOutlineLine
          onClick={() => handleProjectSelection("d")}
          style={selectedProject === "d" ? selectedStyle : unselectedStyle}
        />
      </div>
      {/* Display selected project content */}
      {selectedProject === "a" && <ProjectA />}
      {selectedProject === "b" && <ProjectB />}
      {selectedProject === "c" && <ProjectC />}
      {selectedProject === "d" && <ProjectD />}
    </div>
  );
};

export default ProjectPage;
