import React from "react";
import data from "../../data/projects.json";
import video from "../../videos/Kugelbahn.mp4";
import thumbnail from "../../images/Kugelbahn.JPG";
import image from "../../images/KugelbahnNummer.jpg";
function Kugelbahn() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
        Bei der Kugelbahn bestand die Aufgabe darin, die Physik einer Kugelbahn zu simulieren. 
        Dabei war es besonders wichtig, die physikalischen Gesetze zu beachten.
          <div className="project-subheader">Vorgehensweise</div>
          Wir programmierten die Fallbeschleunigung und die Rollgeschwindigkeit
          der Kugeln und bauten eine Kollisionserkennung ein, damit die Kugeln
          auf Objekte physikalisch korrekt reagieren können. Zusätzlich
          bauten wir eine Feder ein, die auslöst, wenn eine Kugel den Riegel der
          Feder löst. Die Masse der Kugel ist freieinstellbar, genauso kann man
          die Winkel einiger Objekte einstellen.
        </div>
        <div className="project-subheader">Video</div>
        <div className="project-video">
          <video controls src={video} poster={thumbnail}></video>
        </div>
      </div>

      <div className="project-box">
        <div className="project-image">
          <figure>
            <img
              src={image}
              alt="Beschriftung"
              style={{ width: "100%", padding: "10px" }}
            />
          </figure>
        </div>
        <div className="project-description">
          <ol className="project-list">
            <li>
              Hauptkugel (rot): Die Kugel kann per „Drag and Drop“ auf der
              Simulation platziert werden. Sie kann auch über das Eingabefeld
              (siehe 10.) platziert werden.
            </li>
            <li>
              Diagonaler einstellbarer Balken: Den Winkel des Balkens lässt sich
              über das Eingabefeld (siehe 9.) einstellen.
            </li>
            <li>
              Große Kugel (grau): Die Kugel kann per „Drag and Drop“ auf der
              Simulation platziert werden. Sie kann auch über das Eingabefeld
              (siehe 10. Tab „Grau“) platziert werden.
            </li>
            <li>
              Kugel (blau): Die Kugel kann auch per „Drag and Drop“ auf der
              Simulation platziert werden. Sie kann, wie die anderen Kugeln auch
              über das Eingabefeld (siehe 10. Tab „Blau“) platziert werden.
            </li>
            <li>
              Abschusseinrichtung + Feder: Die Spannenergie kann durch die
              Eingabefeldern (siehe 9. Tab „Feder) eingestellt werden.
            </li>
            <li>Knopf zum Auslösen der Feder</li>
            <li>
              Start/Pause Button: Dieser Button startet die Simulation. Nach dem
              Drücken des „Play-Buttons“ erscheint der „Pause-Button“, wodurch
              man die Simulation jederzeit pausieren kann.
            </li>
            <li>
              Zurücksetzen Button: Mit diesem Button setzt man die Simulation
              zurück. Eingestellte Parameter werden erst übernommen, wenn man
              zuvor die Simulation zurückgesetzt hat.
            </li>
            <li>
              Einstellungen für den Balken, die Feder und Sonstige
              Einstellungsmöglichkeiten.
            </li>
            <li>Einstellmöglichkeiten für die Kugeln</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Kugelbahn;
