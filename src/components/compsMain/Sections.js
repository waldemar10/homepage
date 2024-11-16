import React, { useContext, useEffect, useState } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import "../../styles/sections.css";
function Section() {
  const { handleSelectedProject, refSection } = useContext(SectionContext);
  const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    if (localStorage.getItem("clickedProject")) {
      handleSelectedProject(localStorage.getItem("clickedProject"), false);
    }
  }, []);

  const ProjectBox = ({ index, clicked, projectname }) => (
    <a
      className="sections-project-box"
      onClick={() => handleSelectedProject(index, true)}
      style={{
        filter: clicked ? "brightness(100%)" : "brightness(50%)",
        background: clicked ? "var(--button-section-selected-bg-color)" : "",
      }}>
      <p className="sections-showcase-text">{projectname}</p>
    </a>
  );
  console.log(projects);
  return (
    <>
      <div ref={refSection} id="sections-box" className="sections-box">
        <h2 id="project" className="sections-headline">
          Projekte
        </h2>

        <div className="sections-box-showcase" id="sections-box-showcase">
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
    </>
  );
}
export default Section;
