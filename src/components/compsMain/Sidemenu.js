import React, { useState, useEffect, useContext } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/sidemenu.css";
export default function Sidemenu() {
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
  const { handleSelectedProject } = useContext(SectionContext);
  const [showSidemenu, setShowSidemenu] = useState(false);
  const [showSidemenuFull, setShowSidemenuFull] = useState(false);
  const [projectShown, setProjectShown] = useState(false);
  const [sectionShown, setSectionShown] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("showSidemenu");
    if (storedValue !== null && storedValue !== undefined) {
      const parsedValue = JSON.parse(storedValue);
      setShowSidemenuFull(parsedValue);
    }
  }, []);

  function handleShownSidemenu() {
    const value = !showSidemenuFull;
    setShowSidemenuFull(value);
    localStorage.setItem("showSidemenu", JSON.stringify(value));
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "showProject":
          if (entry.isIntersecting) {
            setProjectShown(true);
          } else {
            setProjectShown(false);
          }
          break;
        case "sections-box":
          if (entry.isIntersecting) {
            setSectionShown(true);
          } else {
            setSectionShown(false);
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
    observer.observe(document.getElementById("showProject"));
    observer.observe(document.getElementById("sections-box"));
  });
  useEffect(() => {
    if (!sectionShown && projectShown) {
      setShowSidemenu(true);
    } else {
      setShowSidemenu(false);
    }
  }, [sectionShown, projectShown]);

  const SidemenuBox = ({ id, clicked, projectname }) => (
    <li
      onClick={() => handleSelectedProject(id, true)}
      style={{
        background: clicked ? "var(--button-section-selected-bg-color)" : "",
      }}>
      {projectname}
    </li>
  );

  return (
    <div
      className={` ${showSidemenu ? "visible" : "hide"} ${
        showSidemenuFull ? "" : "hide-button"
      } sidemenu`}>
      <div className="sidemenu-container">
        <ul>
          {projects.map((project) => (
       
            <SidemenuBox
              id={project.id}
              clicked={project.clickedKey}
              projectname={project.name}
            />
         
          ))}
        </ul>
      </div>
      <button className="sidemenu-button" onClick={() => handleShownSidemenu()}>
        <FontAwesomeIcon
          className={`sidemenu-button-svg ${
            showSidemenuFull ? "" : "rotate-button"
          }`}
          icon={faArrowLeft}
        />
      </button>
    </div>
  );
}
