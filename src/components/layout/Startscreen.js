import React, { useState, useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { UsefullContext } from "../../context/context";

import "../../styles/startscreen.css";

function Startscreen() {
  const {refSection } = useContext(UsefullContext);

  const onSubmit = (e) => {
    e.preventDefault();
    refSection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="box">
      <svg
        viewBox="0 0 440 300"
        className="svg-headline"
        style={{ fill: "url(#strokeGradient)" }}>
        <linearGradient id="strokeGradient">
          <stop offset="15%" stopColor="#ff2d75" stopOpacity="100%" />

          <stop offset="74%" stopColor="#4fc3dc" stopOpacity="100%" />
        </linearGradient>
        <linearGradient id="strokeGradient2">
          <stop offset="15%" stopColor="#ff2d75" stopOpacity="50%" />

          <stop offset="74%" stopColor="#4fc3dc" stopOpacity="50%" />
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

      <a
        /* onClick={() => setScrollToSection(!scrollToSection)} */
        onClick={(e) => onSubmit(e)}
        className="icon-box">
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </a>
    </div>
  );
}
export default Startscreen;
