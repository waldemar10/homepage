/* import React, { useState, useEffect, useContext } from "react";
import { useObserver } from "../../hooks/useObserver";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar.css";

export default function Navbar() {
  const { isProjectShowcase, isProjectSelection } = useObserver();
  const { refProjectSelection } = useContext(ProjectSelectionContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectSelection.current.scrollIntoView({ behavior: "smooth" });
  };

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
      <button className={`navbar`} onClick={(e) => navToProjectSelection(e)}>
        <FontAwesomeIcon id="icon-mobile-menu" icon={faChevronUp} />
      </button>
    </div>
  );
}
 */