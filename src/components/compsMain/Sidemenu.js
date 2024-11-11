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
  return (
    <div
      className={` ${showSidemenu ? "visible" : "hide"} ${
        showSidemenuFull ? "" : "hide-button"
      } sidemenu`}>
      <div className="sidemenu-container">
        <ul>
          <li
            onClick={() => handleSelectedProject("Filmbibliothek", true)}
            style={{
              background: clickedFilm
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            Die Filmbibliothek
          </li>
          <li
            onClick={() => handleSelectedProject("SSP", true)}
            style={{
              background: clickedSSP
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            Schere Stein Papier Ultimate
          </li>
          <li
            onClick={() => handleSelectedProject("Yoga", true)}
            style={{
              background: clickedYoga
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            Die Yoga-Website
          </li>
          <li
            onClick={() => handleSelectedProject("Kugelbahn", true)}
            style={{
              background: clickedKugelbahn
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            Die Kugelbahn
          </li>
          <li
            onClick={() => handleSelectedProject("GameDev", true)}
            style={{
              background: clickedGameDev
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            Cinemacraze
          </li>
          <li
            onClick={() => handleSelectedProject("Awd", true)}
            style={{
              background: clickedAwd
                ? "var(--button-section-selected-bg-color)"
                : "",
            }}>
            LinguPingu
          </li>
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
