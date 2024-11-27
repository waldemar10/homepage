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
  const { refProjectSelection, handleSelectedProject } = useContext(
    ProjectSelectionContext
  );

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
    if (isProjectShowcase && !isProjectSelection) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  }, [isProjectShowcase, isProjectSelection]);
  useEffect(() => {
    document.addEventListener("animationend", handleFadeOut);
    document.addEventListener("animationend", handleFadeIn);
    return () => {
      document.removeEventListener("animationend", handleFadeOut);
      document.removeEventListener("animationend", handleFadeIn);
    };
  }, []);
  const handleFadeOut = (e) => {
    if (e.animationName === "navbarFadeOut") {
      document
        .getElementsByClassName("navbar-wrapper")[0]
        .classList.add("navbar-wrapper-hidden");
      document
        .getElementsByClassName("navbar-wrapper")[0]
        .classList.remove("navbar-wrapper-show");
    }
  };
  const handleFadeIn = (e) => {
    if (e.animationName === "navbarFadeIn") {
      document
        .getElementsByClassName("navbar-wrapper")[0]
        .classList.add("navbar-wrapper-show");
      document
        .getElementsByClassName("navbar-wrapper")[0]
        .classList.remove("navbar-wrapper-hidden");
    }
  };

  return (
    <div
      className={` navbar-wrapper ${isNavbarVisible ? "visible" : "hidden"}`}>
      <div className={`navbar`} onClick={(e) => navToProjectSelection(e)}>
        <FontAwesomeIcon id="icon-mobile-menu" icon={faChevronUp} />
      </div>
    </div>
  );
}
