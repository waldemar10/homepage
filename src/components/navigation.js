import React, { useEffect, useState, useContext } from "react";
import { UsefullContext } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectsContext } from "../context/projectsContext";
import "../styles/navigation.css";
export default function Navigation(props,navigationUp,navigationDown) {
  /* const [hideUpButton, setHideUpButton] = useState(false);
  const [hideDownButton, setHideDownButton] = useState(false); */
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { refSection } = useContext(UsefullContext);
  const { refProject } = useContext(ProjectsContext);

  const navigateDown = (e) => {
    refProject.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigateUp = (e) => {
    refSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const navigation= (e) => {

    if (isProjectVisible) {
      navigateUp(e);
    }
    else if (isSectionVisible) {
      navigateDown(e);
    }
  }
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // If observed element is not visible
      switch (entry.target.id) {
        case "sections-box-showcase":
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
            // Show side menu
            /* setHideUpButton(true);
            setHideDownButton(false); */
          } else {
            setIsSectionVisible(false);
            // Hide side menu
            /* setHideUpButton(false);
            setHideDownButton(true); */
          }
          break;
        case "showproject-box-wrapper":
          if (entry.isIntersecting) {
            // Show side menu
            setIsProjectVisible(true);
            /* setHideUpButton(true);
            setHideDownButton(true); */
          }else{
            setIsProjectVisible(false);
          }
          break;
          case "svg-headline":
          if (entry.isIntersecting) {
            setShowNav(false);
          }else{
            setShowNav(true);
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
    observer.observe(document.getElementById("sections-box-showcase"));
    observer.observe(document.getElementById("showproject-box-wrapper"));
    observer.observe(document.getElementById("svg-headline"));
  });

  return (
    <>
      <div className="nav-box">
        <div className="nav-box-inner">
         
          {showNav && (
            <a className={` ${isProjectVisible ? "rotate" : ""} nav-arrow`} onClick={(e) => navigation(e)}>
              <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </a>
          )}
        </div>
      </div>
    </>
  );
}
