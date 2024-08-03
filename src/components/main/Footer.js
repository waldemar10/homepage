import React, { useState } from "react";

function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      <footer>
        <p>
          Website build with
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            {" "}
            React
          </a>
        </p>
        <p>© 2023 - {year}</p>
      </footer>
    </>
  );
}

export default Footer;
