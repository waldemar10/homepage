import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../../styles/footer.css";
function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <div className="footer-wrapper" id="footer">
      <div className="footer-content">
        <div>
          <p>© 2023 - {year}</p>
          <p>Waldemar Justus</p>
        </div>
        <div className="footer-link-legals">
          <a href="#/privacyPolicy">Datenschutzerklärung</a>
          <a href="#/impressum">Impressum</a>
        </div>
        <div className="footer-link-code">
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
