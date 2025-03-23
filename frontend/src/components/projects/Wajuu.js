import React from "react";

import blog from "../../images/Wajuu/BlogBeispiel.jpg";
import startscreen from "../../images/Wajuu/Wajuu.jpg";

function Wajuu() {
  return (
    <div className="project">
      <p className="project__text">
        Wajuu ist ein persönliches Blog-Projekt, das sich ganz der
        faszinierenden Kultur, Geschichte und den Traditionen Japans widmet. Die
        Website bietet spannende Einblicke in Sehenswürdigkeiten, Feste,
        Kulinarik und viele weitere Themen rund um das Land der aufgehenden
        Sonne. Das Projekt wurde mit WordPress, dem BeTheme und Elementor
        umgesetzt, um eine ansprechende, moderne und benutzerfreundliche Website
        zu gestalten. Als Einzelprojekt wird die Seite regelmäßig mit neuen
        Artikeln erweitert.
      </p>

      <figure className="project__figure">
        <img src={startscreen} alt="Wajuu Hero Section" loading="lazy" />
        <figcaption>Hero Section</figcaption>
      </figure>
      <figure className="project__figure">
        <img src={blog} alt="Blog example" loading="lazy" />
        <figcaption>Blog über Kyoto</figcaption>
      </figure>
    </div>
  );
}
export default Wajuu;
