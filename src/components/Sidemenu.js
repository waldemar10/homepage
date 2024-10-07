import React, { useState, useEffect,useContext } from "react";

import { ProjectsContext } from "../context/projectsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../styles/sidemenu.css";
function Sidemenu({
  handleSelectedProject,

  sidemenu,
}) {
  const{clickedFilm,clickedKugelbahn,clickedSSP,clickedYoga,clickedGameDev,clickedAwd} =useContext(ProjectsContext);
  const [showSidemenu, setShowSidemenu] = useState(false);

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
  return (
    <div
      className={` ${sidemenu ? "visible" : "hide"} ${
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

export default Sidemenu;
