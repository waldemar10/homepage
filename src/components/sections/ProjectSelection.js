import React, { useContext, useEffect, useRef } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";

function ProjectSelection() {
  const { handleSelectedProject, refProjectSelection } = useContext(
    ProjectSelectionContext
  );
  const { projects } = useContext(ProjectsContext);

  const boxRef = useRef();
  const selectedBackgroundColor = "var(--box-bg-color-selected)";

  useEffect(() => {
    if (localStorage.getItem("WJ_HP_clickedProject")) {
      handleSelectedProject(
        localStorage.getItem("WJ_HP_clickedProject"),
        false
      );
    }
  }, []);

  const ProjectBox = ({ index, clicked, projectname }) => {
    return (
      <div
        ref={boxRef}
        id="projectSelection-project-box"
        className="projectSelection-project-box"
        onClick={() => handleSelectedProject(index, true)}
        style={{
          filter: clicked ? "brightness(100%)" : "brightness(70%)",
          background: clicked ? selectedBackgroundColor : "",
          border: clicked ? "none" : "",
        }}>
        <h3>{projectname}</h3>
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
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectSelection;
