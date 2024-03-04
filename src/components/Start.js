import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../styles/startscreen.css";

function Startscreen() {
  return (
    <div className="box">
      <div className="headline">Waldemar</div>
      <div className="headline">Justus</div>
      <a href="#project" className="icon-box">
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </a>
    </div>
  );
}
export default Startscreen;
