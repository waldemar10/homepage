import React, { useState, useEffect, useContext } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/navbar.css";
export default function Navbar() {
  const { projects } = useContext(ProjectsContext);

  const { handleSelectedProject } = useContext(SectionContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNavbarFull, setShowNavbarFull] = useState(false);
  const [projectShown, setProjectShown] = useState(false);
  const [sectionShown, setSectionShown] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("showNavbar");
    if (storedValue !== null && storedValue !== undefined) {
      const parsedValue = JSON.parse(storedValue);
      setShowNavbarFull(parsedValue);
    }
  }, []);

  function handleShownNavbar() {
    const value = !showNavbarFull;
    setShowNavbarFull(value);
    localStorage.setItem("showNavbar", JSON.stringify(value));
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
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [sectionShown, projectShown]);

  const ProjectBox = ({ index, clicked, projectname }) => (
    <li
      onClick={() => handleSelectedProject(index, true)}
      style={{
        background: clicked ? "var(--button-section-selected-bg-color)" : "",
      }}>
      {projectname}
    </li>
  );
  return (
    <div
      className={` ${showNavbar ? "visible" : "hide"} ${
        showNavbarFull ? "" : "hide-button"
      } navbar`}
      
      >
      <div className="navbar-container">
        <ul>
          {projects.map((project, index) => (
            <ProjectBox
              key={project.Title}
              index={index}
              clicked={project.isClicked}
              projectname={project.Title}
            />
          ))}
        </ul>
      </div>
      <button className="navbar-button" onClick={() => handleShownNavbar()}>
        <FontAwesomeIcon
          className={`navbar-button-svg ${
            showNavbarFull ? "" : "rotate-button"
          }`}
          icon={faArrowLeft}
        />
      </button>
    </div>
  );
}
