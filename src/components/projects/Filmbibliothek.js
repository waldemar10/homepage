import React from "react";

import video from "../../videos/Filmbibliothek.mp4";
import thumbnail from "../../images/GrundlagenInfo/Filmbibliothek.JPG";

import "../../styles/projects.css";

function Filmbibliothek() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          <p>
            Die Filmbibliothek war ein Softwareprojekt im 2. Semester im Modul
            Informatik II. Die Aufgabe war es, eine Java Applikation zu
            entwickeln, die mindestens zwei verschiedene Suchalgorithmen und
            zwei verschiedene Sortieralgorithmen beinhaltet. Auch sollte man
            eine grafische Benutzeroberfläche erstellen. Wir entschieden uns für
            eine Filmbibliothek, wo der Anwender Filme suchen kann. Alle Filme
            und deren Informationen wurden in einer .txt Datei gespeichert.
            Seine Lieblingsfilme kann der Anwender in seiner Watchlist
            speichern, wenn er einen Account besitzt. Neue Anwender, ohne
            eigenen Account, können sich registrieren lassen. Wir dokumentierten
            unsere Ziele und Vorgaben in einem Lastenheft und arbeiteten dann
            diese Punkte ab.
          </p>
          <p>
            In meinem Team war ich für die Suchalgorithmen, die Filmansicht, die
            Adminansicht und die Login-Funktion zuständig. Bei den
            Suchalgorithmen entschieden wir uns für die <b>Lineare Suche</b> und
            die <b>Binäre Suche</b>. Für die Sortieralgorithmen verwendeten wir{" "}
            <b>Bubble Sort</b> und <b>Selection Sort</b>. Die Login-Daten der
            Benutzer speicherten wir in einer .txt Datei. Jeder neue Benutzer
            wurde dort eingespeichert. Die GUI wurde mit JavaFX und Scenebuilder
            erstellt.
          </p>
        </div>
        <h3>Video</h3>
        <div className="project-video">
          <video controls src={video} poster={thumbnail} />
        </div>
      </div>
    </div>
  );
}
export default Filmbibliothek;
