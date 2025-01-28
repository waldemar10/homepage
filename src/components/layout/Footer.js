import React, { useState, useContext } from "react";
import Socials from "../common/Socials";
import { ProjectSelectionContext } from "../../context/projectSelectionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/footer.css";

function Footer() {
  const [year] = useState(new Date().getFullYear());

  const { refProjectSelection } = useContext(ProjectSelectionContext);

  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectSelection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer-wrapper" id="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <Socials width={"20px"} height={"20px"} />
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2023 - {year} Waldemar Justus</p>
        </div>
        <div className="footer-links">
          <a href="#/privacyPolicy">Datenschutzerklärung</a>
          <a href="#/impressum">Impressum</a>

          <a
            href="https://github.com/waldemar10/homepage"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon id="icon-footer" icon={faCode} />
            Quellcode von der Website
          </a>
        </div>
      </div>
      <button
        className="footer-btn-up-nav"
        href="#top"
        rel="noreferrer"
        onClick={(e) => navToProjectSelection(e)}>
        <FontAwesomeIcon id="icon-up-footer" icon={faChevronUp} />
      </button>
    </div>
  );
}

export default Footer;
