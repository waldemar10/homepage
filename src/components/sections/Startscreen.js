import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";

function Startscreen() {
  const { refProjectSelection } = useContext(ProjectSelectionContext);

  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectSelection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="startscreen-wrapper">
        <span className="startscreen-greeting"> Willkommen</span>
        <div className="startscreen-introduction-box">
          <div id="startscreen-name" className="startscreen-name">
            Ich bin <span>Waldemar Justus</span> <span id="icon-hello">👋</span>
          </div>
          <span className="startscreen-description">
            Meinen Bachelor habe ich seit Oktober 2024 erfolgreich in
            Computervisualistik und Design an der Hochschule Hamm-Lippstadt
            absolviert. Ausgewählte Projekte, die ich während des Studiums oder
            privat gemacht habe, werden hier vorgestellt.
          </span>
          <button
            className="startscreen-button"
            onClick={(e) => navToProjectSelection(e)}>
          
              <FontAwesomeIcon
                id="startscreen-arrow-1"
                icon={faChevronDown}
              />
              Projekte
              <FontAwesomeIcon id="startscreen-arrow-2" icon={faChevronDown} />
      
          </button>
        </div>
        <div className="line" />
      </div>
    </>
  );
}
export default Startscreen;
