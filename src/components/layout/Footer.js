import React, { useState } from "react";
function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      <footer>
        <p>
          Website
          {" "}
          <a
            href="https://github.com/waldemar10/homepage"
            target="_blank"
            rel="noreferrer">
            
            selbstständig
          </a>
          {" "}
          erstellt mit React
        </p>

        <p>
          <a href="#/privacyPolicy">Datenschutzerklärung</a> &{" "}
          <a href="#/impressum">Impressum</a>
        </p>
        <p>© 2023 - {year}</p>
      </footer>
    </>
  );
}

export default Footer;
