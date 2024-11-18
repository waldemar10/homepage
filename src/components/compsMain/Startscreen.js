import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SectionContext } from "../../context/sectionContext";

import "../../styles/startscreen.css";

function Startscreen() {
  const { refSection } = useContext(SectionContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const navToSection = (e) => {
    e.preventDefault();
    refSection.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="box">
      {isMobile ? (
        <div className="mobile-startscreen">
          <h2 className="mobile-greeting">Hallo!</h2>
          <p className="mobile-name">
            Ich bin <span>Waldemar Justus</span> <span>👋</span>
          </p>
          <p className="mobile-introduction">
            Hier findest du meine Informatik Projekte.
          </p>
          <p className="mobile-fun">
            <strong>Viel Spaß!</strong>
          </p>
        </div>
      ) : (
        <svg
          id="svg-headline"
          viewBox="0 0 440 300"
          className="svg-headline"
          style={{ fill: "url(#strokeGradient)" }}>
          <linearGradient id="strokeGradient">
            <stop
              offset="15%"
              stopColor="var(--primary-color)"
              stopOpacity="100%"
            />

            <stop
              offset="74%"
              stopColor="var(--secondary-color)"
              stopOpacity="100%"
            />
          </linearGradient>
          <linearGradient id="strokeGradient2">
            <stop
              offset="15%"
              stopColor="var(--primary-color)"
              stopOpacity="50%"
            />

            <stop
              offset="74%"
              stopColor="var(--secondary-color)"
              stopOpacity="50%"
            />
          </linearGradient>
          <text
            x="50%"
            y="50%"
            dy=".32rem"
            textAnchor="middle"
            className="text-body">
            Waldemar
          </text>
          <text
            x="50%"
            y="50%"
            dy="1.0em"
            textAnchor="middle"
            className="text-body">
            Justus
          </text>
        </svg>
      )}
      <a onClick={(e) => navToSection(e)} className="icon-box">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024">
          <defs>
            <radialGradient id="rg" r="150%" cx="30%" cy="107%">
              <stop stopColor="#fdf497" offset="0" />
              <stop stopColor="#fdf497" offset="0.05" />
              <stop stopColor="#fd5949" offset="0.45" />
              <stop stopColor="#d6249f" offset="0.6" />
              <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
          </defs>
          <path
            className="icon-path"
            d="M552.35,744.3l396.25-396.25c23.42-23.42,23.42-61.38,0-84.79h0c-23.42-23.42-61.38-23.42-84.79,0l-349.96,349.96L162.81,262.16c-23.42-23.42-61.38-23.42-84.79,0l-1.89,1.89c-23.33,23.33-23.43,61.13-.22,84.58l391.43,395.45c23.38,23.62,61.51,23.72,85.01.22Z"
            fill="white"
          />
          <path
            className="icon-gradient"
            d="M552.35,744.3l396.25-396.25c23.42-23.42,23.42-61.38,0-84.79h0c-23.42-23.42-61.38-23.42-84.79,0l-349.96,349.96L162.81,262.16c-23.42-23.42-61.38-23.42-84.79,0l-1.89,1.89c-23.33,23.33-23.43,61.13-.22,84.58l391.43,395.45c23.38,23.62,61.51,23.72,85.01.22Z"
            fill="url(#rg)"
            opacity="0"
          />
        </svg>
      </a>
    </div>
  );
}
export default Startscreen;
