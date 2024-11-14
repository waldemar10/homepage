import React, { useContext, useEffect,useState } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import "../../styles/sections.css";

function Section() {
  const { handleSelectedProject, refSection } = useContext(SectionContext);
  const [isVisible, setIsVisible] = useState(false); 
  const {
    clickedFilm,
    clickedKugelbahn,
    clickedSSP,
    clickedYoga,
    clickedGameDev,
    clickedAwd,
  } = useContext(ProjectsContext);
  const projects = [
    {
      id: "Filmbibliothek",
      name: "Die Filmbibliothek",
      clickedKey: clickedFilm,
    },
    { id: "SSP", name: "Schere Stein Papier Ultimate", clickedKey: clickedSSP },
    { id: "Yoga", name: "Die Yoga-Website", clickedKey: clickedYoga },
    { id: "Kugelbahn", name: "Die Kugelbahn", clickedKey: clickedKugelbahn },
    { id: "GameDev", name: "Cinemacraze", clickedKey: clickedGameDev },
    { id: "Awd", name: "LinguPingu", clickedKey: clickedAwd },
  ];
  useEffect(() => {
    if (
      !localStorage.getItem("clickedProject")
    ) {
      handleSelectedProject(localStorage.getItem("clickedProject", false));
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (refSection.current) {
      observer.observe(refSection.current);
    }

    return () => {
      if (refSection.current) observer.unobserve(refSection.current);
    };
  }, [refSection]);

  const SectionBox = ({ id, clicked, projectname,index }) => (
    <a
    className="sections-project-box"
      onClick={() => handleSelectedProject(id, true)}
      style={{
        filter: clicked ? "brightness(100%)" : "brightness(50%)",
        background: clicked ? "var(--button-section-selected-bg-color)" : "",
        animationDelay: `${index * 0.5}s`,
      }}>
      <p className="sections-showcase-text">{projectname}</p>
    </a>
  );

  return (
    <>
      <div ref={refSection} id="sections-box" className="sections-box">
        <h2 id="project" className="sections-headline">
          Projekte
        </h2>

        <div className="sections-box-showcase" id="sections-box-showcase">
          {projects.map((project,index) => (
            <SectionBox
              id={project.id}
              clicked={project.clickedKey}
              projectname={project.name}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Section;
