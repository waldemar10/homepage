import "../../styles/projectStyles.css";
import React from "react";

import video from "../../videos/Filmbibliothek.mp4";
import thumbnail from "../../images/Filmbibliothek/Filmbibliothek.JPG";
function Filmbibliothek() {

  return (
    <div className="project_box">
      <div className="project_description">
        Die Filmbibliothek war ein Software Projekt im 2. Semester im Modul
        Informatik II. Die Aufgabe war es, eine Java Applikation zu entwickeln,
        die mindestens zwei verschiedene Suchalgorithmen und zwei verschiedene
        Sortieralgorithmen beinhaltet. Auch sollte man eine graphische
        Benutzeroberfläche erstellen. Wir entschieden uns für eine
        Filmbibliothek, wo der Anwender Filme suchen kann. Seine Lieblingsfilme
        kann der Anwender in seiner Watchlist speichern. Neue Anwender, ohne
        eigenen Account, können sich registrieren lassen. Wir dokumentierten
        unsere Ziele und Vorgaben in einem Lastenheft und arbeiteten dann diese
        Punkte ab.
        <br />
        <br />
        Wir teilten unsere Aufgaben auf. Ich war für die Suchalgorithmen, die
        Filmansicht, die Adminansicht und die Login-Funktion zuständig. Bei den
        Suchalgorithmen entschieden wir uns für die <i>Lineare Suche</i> und die{" "}
        <i>Binäre Suche</i>. Für die Sortieralgorithmen verwendeten wir{" "}
        <i>Bubble Sort</i> und <i>Selection Sort</i>. Die Login-Daten der
        Benutzer speicherten wir in einer .txt Datei. Jeder neue Benutzer wurde
        dort eingespeichert. Die GUI erstellten wurde mit JavaFX und
        Scenebuilder erstellt.
      </div>

      <video
        controls
        className="project_video"
        src={video}
        poster={thumbnail}
      />
    </div>
  );
}
export default Filmbibliothek;
