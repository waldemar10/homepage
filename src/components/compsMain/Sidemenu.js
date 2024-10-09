import React, { useState, useEffect,useContext } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/sidemenu.css";
export default function Sidemenu() {
  const{clickedFilm,clickedKugelbahn,clickedSSP,clickedYoga,clickedGameDev,clickedAwd} =useContext(ProjectsContext);
  const{handleSelectedProject} =useContext(SectionContext);
  const [showSidemenu, setShowSidemenu] = useState(true);
  const [isProjectShown, setIsProjectShown] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("showSidemenu");
    if (storedValue !== null && storedValue !== undefined) {
      const parsedValue = JSON.parse(storedValue);
      setShowSidemenu(parsedValue);
    }
  }, []);

  function handleShownSidemenu() {
    const value = !showSidemenu;
    setShowSidemenu(value);
    localStorage.setItem("showSidemenu", JSON.stringify(value));
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "showProject":
          if (entry.isIntersecting) {
            setIsProjectShown(true);
          } else {
            setIsProjectShown(false);
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
  });

  return (
    <div
      className={` ${isProjectShown ? "visible" : "hide"} ${
        showSidemenu ? "" : "hide-button"
      } sidemenu`}>
      

      <div className={`sidemenu-container `}>
        {/*  <h2>Projects</h2> */}
        <ul>
          <li
            onClick={() => handleSelectedProject("Filmbibliothek",true)}
            style={{ background: clickedFilm ? "var(--button-section-selected-bg-color)" : "" }}>
            Grundlagen Informatik
          </li>
          <li
            onClick={() => handleSelectedProject("SSP",true)}
            style={{ background: clickedSSP ? "var(--button-section-selected-bg-color)" : "" }}>
            Visual Computing I
          </li>
          <li
            onClick={() => handleSelectedProject("Yoga",true)}
            style={{ background: clickedYoga ? "var(--button-section-selected-bg-color)" : "" }}>
            Web Development
          </li>
          <li
            onClick={() => handleSelectedProject("Kugelbahn",true)}
            style={{
              background: clickedKugelbahn ? "var(--button-section-selected-bg-color)" : "",
            }}>
            Visual Computing II
          </li>
          <li
            onClick={() => handleSelectedProject("GameDev",true)}
            style={{ background: clickedGameDev ? "var(--button-section-selected-bg-color)" : "" }}>
            Game Development
          </li>
          <li
            onClick={() => handleSelectedProject("Awd",true)}
            style={{ background: clickedAwd ? "var(--button-section-selected-bg-color)" : "" }}>
            Advanced Web Development
          </li>
        </ul>
      </div>
      <button className="sidemenu-button" onClick={() => handleShownSidemenu()}>
        <FontAwesomeIcon
          className={`sidemenu-button-svg ${
            showSidemenu ? "" : "rotate-button"
          }`}
          icon={faArrowLeft}
        />
      </button>
    </div>
  );
}


