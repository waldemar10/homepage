import React, { useState, useContext, useEffect, useRef } from "react";

// Import all projects
import Filmbibliothek from "../myProjects/Filmbibliothek";
import SchereSteinPapier from "../myProjects/SchereSteinPapier";
import Yoga from "../myProjects/Yoga";
import Kugelbahn from "../myProjects/Kugelbahn";
import GameDev from "../myProjects/GameDev";
import Awd from "../myProjects/Awd";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectsContext } from "../../context/projectsContext";

import "../../styles/showprojects.css";

function ShowProject(props) {
  const {
    clickedFilm,
    clickedKugelbahn,
    clickedSSP,
    clickedYoga,
    clickedGameDev,
    clickedAwd,
    projectData,
    setIsProjectShown,
    refProject
  } = useContext(ProjectsContext);
  let title, gitHub, code, group, requirements, modul;

  if (projectData !== "" && projectData !== undefined && projectData !== null) {
    title = projectData.Title;
    gitHub = projectData.GitHub;
    modul = projectData.Modul;
    code = projectData.Code;
    group = projectData.Group;
    requirements = projectData.Requirements;
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
 /*  useEffect(() => {
    if (ref.current !== null && ref.current !== undefined && scrollToProject) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToProject]); */

  return (
    <div id="showProject" className="showproject-box">
      <div className="showproject-box-wrapper">
        <div ref={refProject} className="showproject-modul-headline">
          {modul}
        </div>
        <div className="showproject-title-headline">{title}</div>

        <div className="showproject-icons-box">
          <div className="showproject-icons-and-text">
            <FontAwesomeIcon icon={faUserGroup} className="showproject-icon" />
            <p className="showproject-icons-text">{group}</p>
          </div>

          <div className="showproject-icons-and-text">
            <FontAwesomeIcon icon={faLaptopCode} className="showproject-icon" />
            <p className="showproject-icons-text">{code}</p>
          </div>

          <div className="showproject-icons-and-text">
            <FontAwesomeIcon icon={faGithub} className="showproject-icon" />
            <a
              className="showproject-icons-text"
              href={gitHub}
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div style={{ display: clickedFilm ? "flex" : "none" }}>
          <Filmbibliothek />
        </div>
        <div style={{ display: clickedSSP ? "flex" : "none" }}>
          <SchereSteinPapier />
        </div>
        <div style={{ display: clickedKugelbahn ? "flex" : "none" }}>
          <Kugelbahn />
        </div>
        <div style={{ display: clickedYoga ? "flex" : "none" }}>
          <Yoga />
        </div>
        <div style={{ display: clickedGameDev ? "flex" : "none" }}>
          <GameDev />
        </div>
        <div style={{ display: clickedAwd ? "flex" : "none" }}>
          <Awd />
        </div>
      </div>
    </div>
  );
}
export default ShowProject;
