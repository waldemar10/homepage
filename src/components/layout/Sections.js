import React, { useState, useContext, useEffect, useRef } from "react";

import { UsefullContext } from "../../context/context";
import { ProjectsContext } from "../../context/projectsContext";

import Sidemenu from "../Sidemenu";

import "../../styles/sections.css";

import data from "../../data/projects.json";

const id_Filmbibliothek = "Filmbibliothek";
const id_kugelbahn = "Kugelbahn";
const id_SSP = "SSP";
const id_Yoga = "Yoga";
const id_GameDev = "GameDev";
const id_Awd = "Awd";

function Section() {
  const { setID,refSection } =
    useContext(UsefullContext);

  const {
    setProjectData,
    clickedFilm,
    setClickedFilm,
    clickedKugelbahn,
    clickedSSP,
    clickedYoga,
    clickedGameDev,
    clickedAwd,
    setClickedSSP,
    setClickedYoga,
    setClickedGameDev,
    setClickedKugelbahn,
    setClickedAwd,
    isProjectShown,
    isSelectionShown,
    setIsSelectionShown,
    refProject
  } = useContext(ProjectsContext);
  const [sidemenu, setSidemenu] = useState(false);

  function resetAllClicked() {
    setClickedKugelbahn(false);
    setClickedSSP(false);
    setClickedYoga(false);
    setClickedGameDev(false);
    setClickedFilm(false);
    setClickedAwd(false);
  }

  useEffect(() => {
    if (
      localStorage.getItem("id") !== null &&
      localStorage.getItem("id") !== undefined
    ) {
      setID(localStorage.getItem("id"));
    }
    if (
      localStorage.getItem("clickedProject") !== null &&
      localStorage.getItem("clickedProject") !== undefined
    ) {
      handleSelectedProject(localStorage.getItem("clickedProject"),false);
    }
    
  }, [clickedFilm, clickedGameDev, clickedKugelbahn, clickedSSP, clickedYoga]);

  function handleSelectedProject(clickedProject) {
    resetAllClicked();

    switch (clickedProject) {
      case id_Filmbibliothek:
        setClickedFilm(true);
        localStorage.setItem("clickedProject", id_Filmbibliothek);
        setProjectData(data.Filmbibliothek[0]);
        break;
      case id_kugelbahn:
        setClickedKugelbahn(true);
        localStorage.setItem("clickedProject", id_kugelbahn);
        setProjectData(data.Kugelbahn[0]);
        break;
      case id_SSP:
        setClickedSSP(true);
        localStorage.setItem("clickedProject", id_SSP);
        setProjectData(data.SSP[0]);
        break;
      case id_Yoga:
        setClickedYoga(true);
        localStorage.setItem("clickedProject", id_Yoga);
        setProjectData(data.Yoga[0]);
        break;
      case id_GameDev:
        setClickedGameDev(true);
        localStorage.setItem("clickedProject", id_GameDev);
        setProjectData(data.GameDev[0]);
        break;
      case id_Awd:
        setClickedAwd(true);
        localStorage.setItem("clickedProject", id_Awd);
        setProjectData(data.Awd[0]);
        break;
      default:
        setClickedFilm(true);
        localStorage.setItem("clickedProject", id_Filmbibliothek);
        setProjectData(data.Filmbibliothek[0]);
        break;
    }
    
    refProject.current.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("id", clickedProject);
    setID(clickedProject);
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // If observed element is not visible
      switch (entry.target.id) {
        case "sections-box-showcase":
          if (entry.isIntersecting) {
            // Show side menu
            setIsSelectionShown(true);
          } else {
            // Hide side menu
            setIsSelectionShown(false);
          }
          break;
        default:
          break;
      }
    });
  };

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (isSelectionShown === true) {
      setSidemenu(false);
    }
    if (isSelectionShown === false && isProjectShown === true) {
      setSidemenu(true);
    }
  }, [isSelectionShown, isProjectShown]);

  useEffect(() => {
    observer.observe(document.getElementById("sections-box-showcase"));
  });

  return (
    <>
      <div ref={refSection} id="sections-box" className="sections-box">
        <h2 id="project" className="sections-headline">
          Projekte
        </h2>

        <div className="sections-box-showcase" id="sections-box-showcase">
          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Filmbibliothek)}
            style={{
              filter: clickedFilm ? "brightness(100%)" : "brightness(50%)",
              background: clickedFilm ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Grundlagen Informatik</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_SSP)}
            style={{
              filter: clickedSSP ? "brightness(100%)" : "brightness(50%)",
              background: clickedSSP ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Visual Computing I</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Yoga)}
            style={{
              filter: clickedYoga ? "brightness(100%)" : "brightness(50%)",
              background: clickedYoga ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Web Development</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_kugelbahn)}
            style={{
              filter: clickedKugelbahn ? "brightness(100%)" : "brightness(50%)",
              background: clickedKugelbahn ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Visual Computing II</p>
          </a>

          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_GameDev)}
            style={{
              filter: clickedGameDev ? "brightness(100%)" : "brightness(50%)",
              background: clickedGameDev ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Game Development</p>
          </a>
          <a
            className="sections-project-box"
            onClick={() => handleSelectedProject(id_Awd)}
            style={{
              filter: clickedAwd ? "brightness(100%)" : "brightness(50%)",
              background: clickedAwd ? "var(--button-section-selected-bg-color)" : "",
            }}>
            <p className="sections-showcase-text">Advanced Web Development</p>
          </a>
        </div>
      </div>

      <Sidemenu
        handleSelectedProject={handleSelectedProject}
        sidemenu={sidemenu}
      />
    </>
  );
}
export default Section;
