import React, { useContext, useEffect, useRef } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import LinguPingu from "../../images/Awd/excitedPingu.png";
import Yoga from "../../images/YogaWebsite/YogaStartscreen.jpg";
import SSP from "../../images/VC/Arena.jpg";
function ProjectSelection() {
  const { handleSelectedProject, refProjectSelection } = useContext(
    ProjectSelectionContext
  );
  const { projects } = useContext(ProjectsContext);

  const boxRef = useRef();
  const selectedBackgroundColor = "var(--box-bg-color-selected)";

  useEffect(() => {
    if (sessionStorage.getItem("WJ_HP_clickedProject")) {
      handleSelectedProject(
        sessionStorage.getItem("WJ_HP_clickedProject"),
        false
      );
    }
  }, []);
  const projectImages = {
    "LinguPingu": LinguPingu,
    "Die Yoga-Website": Yoga,
    "Schere Stein Papier Ultimate": SSP,
  };
  const ProjectBox = ({ index, clicked, projectname,image }) => {
    return (
      <div
        ref={boxRef}
        id="projectSelection-project-box"
        className="projectSelection-project-box"
        onClick={() => handleSelectedProject(index, true)}
        >
          <img  style={{
          filter: clicked ? "brightness(100%)" : "brightness(30%)"
        }} src={image}></img>
        <span style={{
          filter: clicked ? "brightness(100%)" : "brightness(30%)"
        }}>{projectname}</span>
      </div>
    );
  };

  return (
    <div
      ref={refProjectSelection}
      id="projectSelection-box"
      className="projectSelection-box">
      <h2 id="project">
        Projekte
      </h2>

      <div
        className="projectSelection-box-showcase"
        id="projectSelection-box-showcase">
        {projects.map((project, index) => (
          <ProjectBox
            key={`${project.Title + index}`}
            index={index}
            clicked={project.isClicked}
            projectname={project.Title}
            image={projectImages[project.Title]}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectSelection;
