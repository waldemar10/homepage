import React, { useState, useEffect, useContext } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar.css";
export default function Navbar() {
  const { projects } = useContext(ProjectsContext);

  const [isProjectShowcase, setIsProjectShowcase] = useState(false);
  const [isProjectSelection, setIsProjectSelection] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { refProjectSelection, handleSelectedProject } = useContext(ProjectSelectionContext);
  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectSelection.current.scrollIntoView({ behavior: "smooth" });
  };
 

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "projectShowcase":
          if (entry.isIntersecting) {
            setIsProjectShowcase(true);
          } else {
            setIsProjectShowcase(false);
          }
          break;
        case "projectSelection-box":
          if (entry.isIntersecting) {
            setIsProjectSelection(true);
          } else {
            setIsProjectSelection(false);
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
    observer.observe(document.getElementById("projectShowcase"));
    observer.observe(document.getElementById("projectSelection-box"));
  });
  useEffect(() => {
    if(isProjectShowcase && !isProjectSelection){
      setIsNavbarVisible(true);
    }
    else{
      setIsNavbarVisible(false);
    }
  }
  ,[isProjectShowcase, isProjectSelection]);
  return (
    <div className={` navbar-wrapper ${isNavbarVisible ? "visible" : ""}`}>
      <div
        className={`navbar`}
        onClick={(e) => navToProjectSelection(e)}>
        <FontAwesomeIcon id="icon-mobile-menu" icon={faChevronUp} />
      </div>
      {/* <div className="navbar-content">
        {projects.map((project, index) => (
          <button
            key={project.Title}
            onClick={() => handleSelectedProject(index, true)}
            style={{
              background: project.isClicked
                ? "var(--box-bg-color-selected)"
                : "",
              border: project.isClicked ? "none" : "",
            }}>
            {project.Title}
          </button>
        ))}
      </div> */}
      
    </div>
  );
}
