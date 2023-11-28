const ProjectSelector = ({ setSelectedProject }) => {
  const handleProjectSelection = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <button onClick={() => handleProjectSelection("a")}>Project A</button>
      <button onClick={() => handleProjectSelection("b")}>Project B</button>
      <button onClick={() => handleProjectSelection("c")}>Project C</button>
      <button onClick={() => handleProjectSelection("d")}>Project D</button>
    </div>
  );
};

export default ProjectSelector;
