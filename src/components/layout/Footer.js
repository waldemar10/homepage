import React, { useState, useContext } from "react";
import Socials from "../common/Socials";
import { ProjectGalleryContext } from "../../context/projectGalleryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [year] = useState(new Date().getFullYear());

  const { refProjectGallery } = useContext(ProjectGalleryContext);

  const navToProjectSelection = (e) => {
    e.preventDefault();
    refProjectGallery.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer__wrapper" id="footer">
      <div className="footer__content">
        <div className="footer__socials">
          <Socials width={"20px"} height={"20px"} />
        </div>
        <div className="footer__copyright">
          Copyright © 2023 - {year} Waldemar Justus
        </div>
        <div className="footer__links">
          <a href="#/privacyPolicy">Datenschutzerklärung</a>
          <a href="#/impressum">Impressum</a>

          <a
            href="https://github.com/waldemar10/homepage"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon class="footer__icon" icon={faCode} />
            Quellcode von der Website
          </a>
        </div>
      </div>
      <button
        className="footer__btn-up-nav"
        href="#top"
        rel="noreferrer"
        onClick={(e) => navToProjectSelection(e)}>
        <FontAwesomeIcon class="footer__icon-up" icon={faChevronUp} />
      </button>
    </div>
  );
}

export default Footer;
