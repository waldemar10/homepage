import React, { useState } from "react";
function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      <footer>
        <p>
          Website selbstständig erstellt mit {" "}
          <a href="https://github.com/waldemar10/homepage" target="_blank" rel="noreferrer">
            
            React
          </a>
        </p>
        <p>© 2023 - {year}</p>
        <p><a href="/privacyPolicy">Datenschutzerklärung</a>{" "}&{" "}
        <a href="/impressum">Impressum</a></p>
      </footer>
    </>
  );
}

export default Footer;
