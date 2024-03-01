import "../../App.css";
import React from "react";
import data from '../../data/projects.json'
import video from '../../videos/Kugelbahn.mp4'
import thumbnail from '../../images/Kugelbahn.JPG';
import image from '../../images/KugelbahnNummer.jpg'
function Kugelbahn() {

  let description = data.Kugelbahn[0].Description;
  let procedure = data.Kugelbahn[0].Procedure;

  return (
    <div >
  
      <div className="project_box">
        <div className="project_description">
        Bei der Kugelbahn war es die Aufgabe, die Physik einer Kugelbahn zu programmieren. 
        Es war dabei wichtig, das man die pyhsikalischen Gesetze beachtet. 

          <div className="project_subheader">Vorgehensweise</div>
          Wir programmierten die Fallbeschleunigung und die Rollgeschwindigkeit der Kugeln und
           bauten eine Kollisionserkennung ein, damit die Kugel auf andere Objekte 
           physikalisch korrekt reagieren kann. Zusätzlich bauten wir eine Feder ein, 
           die auslöst, wenn eine Kugel den Riegel der Feder löst. Die Masse der 
           Kugel ist freieinstellbar, genauso kann man die Winkel einiger Objekte einstellen.
        </div>
        <video
          controls
          className="project_video"
          src={video}
          poster={thumbnail}
        ></video>
        
      </div>
     
<div className="project_box">


  
  
 

  <div className="project_video">
                <figure >
                    <img src={image} alt="Beschriftung" style={{ width: "100%",padding:"10px" }} />
                   
                </figure>

            </div>
            <div className="project_description">
            <ol className="project_list">
                <li>Hauptkugel (rot): Die Kugel kann per „Drag and Drop“ auf der Simulation platziert werden. Sie kann auch über das Eingabefeld (siehe 10.) platziert werden.</li>
                <li>Diagonaler einstellbarer Balken: Den Winkel des Balkens lässt sich über das Eingabefeld (siehe 9.) einstellen.</li>
                <li>Große Kugel (grau): Die Kugel kann per „Drag and Drop“ auf der Simulation platziert werden. Sie kann auch über das Eingabefeld (siehe 10. Tab „Grau“) platziert werden.</li>
                <li>Kugel (blau): Die Kugel kann auch per „Drag and Drop“ auf der Simulation platziert werden. Sie kann, wie die anderen Kugeln auch über das Eingabefeld (siehe 10. Tab „Blau“) platziert werden.</li>
                <li>Abschusseinrichtung + Feder: Die Spannenergie kann durch die Eingabefeldern (siehe 9. Tab „Feder) eingestellt werden.</li>
                <li>Knopf zum Auslösen der Feder</li>
                <li>Start/Pause Button: Dieser Button startet die Simulation. Nach dem Drücken des „Play-Buttons“ erscheint der „Pause-Button“, wodurch man die Simulation jederzeit pausieren kann.</li>
                <li>Zurücksetzen Button: Mit diesem Button setzt man die Simulation zurück. Eingestellte Parameter werden erst übernommen, wenn man zuvor die Simulation zurückgesetzt hat.</li>
                <li>Einstellungen für den Balken, die Feder und Sonstige Einstellungsmöglichkeiten.</li>
                <li>Einstellmöglichkeiten für die Kugeln</li>

            </ol>
            </div>
  </div>
</div>

  );
}
export default Kugelbahn;
