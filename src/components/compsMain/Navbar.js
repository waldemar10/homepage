import React, { useState, useEffect, useContext } from "react";

import { ProjectsContext } from "../../context/projectsContext";
import { SectionContext } from "../../context/sectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import yogaIcon from "../../images/Icons/NavbarMobile/buddhist-yoga-pose.png";
import cinemaCrazeIcon from "../../images/Icons/NavbarMobile/game-controller.png";
import linguPinguIcon from "../../images/Icons/NavbarMobile/language.png";
import sspIcon from "../../images/Icons/NavbarMobile/rock-paper-scissors.png";
import kugelbahnIcon from "../../images/Icons/NavbarMobile/sphere.png";
import filmbibliothekIcon from "../../images/Icons/NavbarMobile/video-camera.png";
import "../../styles/navbar.css";
export default function Navbar() {
  const { projects } = useContext(ProjectsContext);

  const { handleSelectedProject } = useContext(SectionContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showNavbarFull, setShowNavbarFull] = useState(false);
  const [projectShown, setProjectShown] = useState(false);
  const [sectionShown, setSectionShown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isClickedMobileMenu, setIsClickedMobileMenu] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("WJ_HP_showNavbar");
    if (storedValue !== null && storedValue !== undefined) {
      const parsedValue = JSON.parse(storedValue);
      setShowNavbarFull(parsedValue);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleShownNavbar() {
    const value = !showNavbarFull;
    setShowNavbarFull(value);
    localStorage.setItem("WJ_HP_showNavbar", JSON.stringify(value));
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

  const handleMobileButton = () => {
    setIsClickedMobileMenu((prev) => !prev);
  };

  const NavBarMobile = () => (
    <div
      className={`navbar-smartphone ${showNavbar ? "visible" : "hide"}`}
      onClick={() => handleMobileButton()}>
      {isClickedMobileMenu && (
        <div className="navbar-buttons-container">
          <button onClick={() => handleSelectedProject(3, true)}>
            <img src={yogaIcon} alt="Yoga" />
          </button>
          <button onClick={() => handleSelectedProject(4, true)}>
            <img src={cinemaCrazeIcon} alt="Cinema Craze" />
          </button>
          <button onClick={() => handleSelectedProject(5, true)}>
            <img src={linguPinguIcon} alt="LinguPingu" />
          </button>
          <button onClick={() => handleSelectedProject(2, true)}>
            <img src={sspIcon} alt="SSP" />
          </button>
          <button onClick={() => handleSelectedProject(1, true)}>
            <img src={kugelbahnIcon} alt="Kugelbahn" />
          </button>
          <button onClick={() => handleSelectedProject(0, true)}>
            <img src={filmbibliothekIcon} alt="Filmbibliothek" />
          </button>
        </div>
      )}
    </div>
  );
  return (
    <>
      {/* Overlay, das den gesamten Body abdunkelt */}
      <div
        className={`body-overlay ${isClickedMobileMenu ? "visible" : ""}`}
        onClick={handleMobileButton}></div>

      {isMobile ? (
        <NavBarMobile className={` navbar-smartphone`} />
      ) : (
        <div
          className={` ${showNavbar ? "visible" : "hide"} ${
            showNavbarFull ? "" : "hide-button"
          } navbar`}>
          <div className="navbar-container">
            <ul>
              {projects.map((project, index) => (
                <li
                  key={project.Title}
                  onClick={() => handleSelectedProject(index, true)}
                  style={{
                    background: project.isClicked
                      ? "var(--button-section-selected-bg-color)"
                      : "",
                  }}>
                  {project.Title}
                </li>
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
      )}
    </>
  );
}
