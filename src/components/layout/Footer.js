import React, { useState } from "react";
import Socials from "../common/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../../styles/footer.css";
function Footer() {
  const [year] = useState(new Date().getFullYear());
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
      
    </div>
  );
}

export default Footer;
