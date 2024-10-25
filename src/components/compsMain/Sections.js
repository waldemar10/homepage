import React, { useContext, useEffect } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import "../../styles/sections.css";

const id_Filmbibliothek = "Filmbibliothek";
const id_kugelbahn = "Kugelbahn";
const id_SSP = "SSP";
const id_Yoga = "Yoga";
const id_GameDev = "GameDev";
const id_Awd = "Awd";

function Section() {
  const {handleSelectedProject,refSection} = useContext(SectionContext);
  const {
    clickedFilm,
    clickedKugelbahn,
    clickedSSP,
    clickedYoga,
    clickedGameDev,
    clickedAwd
  } = useContext(ProjectsContext);

  useEffect(() => {
    if (
      localStorage.getItem("clickedProject") !== null &&
      localStorage.getItem("clickedProject") !== undefined
    ) {
      handleSelectedProject(localStorage.getItem("clickedProject",false));
    }
    
  }, [clickedFilm, clickedGameDev, clickedKugelbahn, clickedSSP, clickedYoga]);

  return (
    <>
      <div ref={refSection} id="sections-box" className="sections-box">
        <h2 id="project" className="sections-headline">
          Projekte
        </h2>

        <div className="sections-box-showcase" id="sections-box-showcase">
          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Filmbibliothek,true)}
            style={{
              filter: clickedFilm ? "brightness(100%)" : "brightness(50%)",
              background: clickedFilm ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Grundlagen Informatik</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_SSP,true)}
            style={{
              filter: clickedSSP ? "brightness(100%)" : "brightness(50%)",
              background: clickedSSP ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Visual Computing I</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Yoga,true)}
            style={{
              filter: clickedYoga ? "brightness(100%)" : "brightness(50%)",
              background: clickedYoga ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Web Development</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_kugelbahn,true)}
            style={{
              filter: clickedKugelbahn ? "brightness(100%)" : "brightness(50%)",
              background: clickedKugelbahn ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Visual Computing II</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_GameDev,true)}
            style={{
              filter: clickedGameDev ? "brightness(100%)" : "brightness(50%)",
              background: clickedGameDev ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Game Development</p>
          </a>
          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Awd,true)}
            style={{
              filter: clickedAwd ? "brightness(100%)" : "brightness(50%)",
              background: clickedAwd ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Advanced Web Development</p>
          </a>
        </div>
      </div>
    </>
  );
}
export default Section;
