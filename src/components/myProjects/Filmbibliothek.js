import React from "react";

import video from "../../videos/Filmbibliothek.mp4";
import thumbnail from "../../images/Filmbibliothek/Filmbibliothek.JPG";

import "../../styles/projects.css";

function Filmbibliothek() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          Die Filmbibliothek war ein Softwareprojekt im 2. Semester im Modul
          Informatik II. Die Aufgabe war es, eine Java Applikation zu
          entwickeln, die mindestens zwei verschiedene Suchalgorithmen und zwei
          verschiedene Sortieralgorithmen beinhaltet. Auch sollte man eine
          graphische Benutzeroberfläche erstellen. Wir entschieden uns für eine
          Filmbibliothek, wo der Anwender Filme suchen kann. Alle Filme und deren Informationen wurden in einer .txt Datei gespeichert.
          Seine Lieblingsfilme kann der Anwender in seiner Watchlist speichern, wenn er einen Account besitzt. 
          Neue Anwender, ohne eigenen Account, können sich registrieren lassen. 
          Wir dokumentierten unsere Ziele und Vorgaben in einem Lastenheft und arbeiteten dann diese Punkte ab.
          <br />
          <br />
          In meinem Team war ich für die Suchalgorithmen, die
          Filmansicht, die Adminansicht und die Login-Funktion zuständig. Bei
          den Suchalgorithmen entschieden wir uns für die <i>
          <b>Lineare Suche</b>
          </i>
          {" "}
          und die <i><b>Binäre Suche</b></i>. Für die Sortieralgorithmen verwendeten
          wir <i><b>Bubble Sort</b></i> und <i><b>Selection Sort</b></i>. Die Login-Daten der
          Benutzer speicherten wir in einer .txt Datei. Jeder neue Benutzer
          wurde dort eingespeichert. Die GUI wurde mit JavaFX und Scenebuilder
          erstellt.
        </div>
        <div className="project-subheader">Video</div>
        <div className="project-video">
          <video controls src={video} poster={thumbnail} />
        </div>
      </div>
    </div>
  );
}
export default Filmbibliothek;
