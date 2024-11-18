import React, { useContext, useEffect, useState, useRef } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import "../../styles/sections.css";
function Section() {
  const { handleSelectedProject, refSection } = useContext(SectionContext);
  const { projects } = useContext(ProjectsContext);
  useEffect(() => {
    if (localStorage.getItem("WJ_HP_clickedProject")) {
      handleSelectedProject(localStorage.getItem("WJ_HP_clickedProject"), false);
    }
  }, []);

  const ProjectBox = ({ index, clicked, projectname }) => {
    const [isVisible, setIsVisible] = useState(false); 
    const boxRef = useRef();

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
       
        switch (entry.target.id) {
          case "sections-box-showcase":
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
            break;
         
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
      observer.observe(document.getElementById("sections-box-showcase"));
    });
    console.log("isVisible", isVisible);
    return(
    <div
    ref={boxRef}
    id="sections-project-box"
    className="sections-project-box"
      onClick={() => handleSelectedProject(index, true)}
      style={{
        filter: clicked ? "brightness(100%)" : "brightness(50%)",
        background: clicked ? "var(--button-section-selected-bg-color)" : "",
      }}>
      <p className={`sections-showcase-text ${isVisible ? "fade-in" : ""}`}>{projectname}</p>
    </div>
    );
  }

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
