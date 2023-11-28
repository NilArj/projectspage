import React, { useState, useEffect } from "react";
import ProjectPage from "./ProjectPage";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState("a");

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    setSelectedProject(hash || "a");
  }, []);

  return (
    <div>
      <ProjectPage selectedProject={selectedProject} />
    </div>
  );
};

export default AllProjects;
