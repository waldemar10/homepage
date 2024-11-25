import React, { useContext, useEffect, useState, useRef } from "react";

import { ProjectsContext } from "../context/projectsContext";
import { ProjectSelectionContext } from "../context/projectSelectionContext";
import "../styles/projectSelection.css";
function ProjectSelection() {
  const { handleSelectedProject, refProjectSelection } = useContext(ProjectSelectionContext);
  const { projects } = useContext(ProjectsContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isShowcaseVisible, setIsShowcaseVisible] = useState(false);
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

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "projectSelection-box-showcase":
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          break;
        case "projectShowcase":
          if (entry.isIntersecting) {
            setIsShowcaseVisible(true);
          } else {
            setIsShowcaseVisible(false);
          }
        default:
          break;
      }
    });
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(callback, options);
  useEffect(() => {
    observer.observe(document.getElementById("projectSelection-box-showcase"));
    observer.observe(document.getElementById("projectShowcase"));
  });

  const ProjectBox = ({ index, clicked, projectname }) => {
    

   
    return (
      <div
        ref={boxRef}
        id="projectSelection-project-box"
        className="projectSelection-project-box"
        onClick={() => handleSelectedProject(index, true)}
        style={{
          filter: clicked ? "brightness(100%)" : "brightness(30%)",
          background: clicked ? selectedBackgroundColor : "",
        }}>
        <p className={`projectSelection-showcase-text ${isVisible ? "fade-in" : ""}`}>
          {projectname}
        </p>
      </div>
    );
  };

  return (
    <div ref={refProjectSelection} id="projectSelection-box" className="projectSelection-box">
      <h2 id="project" className="projectSelection-headline">
        Projekte
      </h2>

      <div className="projectSelection-box-showcase" id="projectSelection-box-showcase">
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
