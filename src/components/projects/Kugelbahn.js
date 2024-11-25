import React from "react";
import video from "../../videos/Kugelbahn.mp4";
import thumbnail from "../../images/VC2/Kugelbahn.JPG";
import imgKugelbahn from "../../images/VC2/KugelbahnNummer.jpg";
function Kugelbahn() {
  return (
    <div className="project-content-box">
      <div className="project-box">
        <div className="project-description">
          <p>
          Die Aufgabe bei diesem Projekt war es, eine realistische Simulation
          einer Kugelbahn zu entwickeln, bei der physikalische Gesetze möglichst
          genau nachgebildet werden sollten. Ziel war es, die Dynamik einer
          Kugel, die auf verschiedenen Bahnelementen rollt, in einer virtuellen
          Umgebung zu simulieren und dabei physikalische Größen wie
          Beschleunigung, Geschwindigkeit und Kollisionen zu berücksichtigen.
          </p>
          <p>
            Besondere Herausforderungen lagen in der korrekten Umsetzung der
            physikalischen Prinzipien, wie der Fallbeschleunigung, der Trägheit
            und der Reibung. Diese mussten in Echtzeit berechnet und visuell
            ansprechend dargestellt werden, um ein realistisches Verhalten der
            Kugeln zu gewährleisten.
          </p>
          <h3>Vorgehensweise</h3>
          <p>
            Zunächst entwickelten wir eine Simulation der Fallbeschleunigung,
            die dafür sorgt, dass die Kugeln durch die Schwerkraft nach unten
            beschleunigt werden, wenn sie sich auf abfallenden Bahnen bewegen.
            Dabei berechneten wir nicht nur die Geschwindigkeit der Kugeln,
            sondern auch die Rollgeschwindigkeit, die von Faktoren wie der
            Kugelmasse und dem Oberflächenmaterial der Bahn beeinflusst wird.
            Diese Faktoren wurden so programmiert, dass sie sich dynamisch an
            verschiedene Bedingungen anpassen können.
          </p>
          <p>
            Zusätzlich integrierten wir eine fortschrittliche
            Kollisionserkennung, die es ermöglicht, dass die Kugeln physikalisch
            korrekt auf Hindernisse und andere Objekte reagieren. Diese
            Erkennung sorgt dafür, dass die Kugeln nicht einfach durch Objekte
            hindurchrollen, sondern bei einer Kollision abprallen oder ihre
            Bewegung entsprechend anpassen.
          </p>
          <p>
            Ein weiteres Feature der Simulation war der Einbau einer
            Federmechanik. Diese Feder wird aktiviert, sobald eine Kugel einen
            speziellen Riegel auslöst, was dazu führt, dass die Kugel mit
            zusätzlicher Energie beschleunigt wird. Diese Interaktion zwischen
            der Kugel und der Feder ermöglichte es, dynamische Bewegungsabläufe
            zu simulieren, die das Verhalten einer echten Kugelbahn noch
            realistischer widerspiegeln.
          </p>
          <p>
            Zu den anpassbaren Parametern der Simulation gehören die Masse der
            Kugeln und die Winkel verschiedener Bahnelemente. Diese
            Einstellungen ermöglichen es, unterschiedliche physikalische
            Szenarien zu testen und zu sehen, wie sich Änderungen an den
            Bedingungen auf das Verhalten der Kugeln auswirken. Durch diese
            Flexibilität bietet die Simulation eine Vielzahl von Möglichkeiten,
            um physikalische Effekte in unterschiedlichen Umgebungen
            nachzustellen.
          </p>
        </div>
        <h3>Video</h3>
        <div className="project-video">
          <video controls src={video} poster={thumbnail}></video>
        </div>
      </div>

      <div className="project-box">
          <figure className="project-figure">
            <img src={imgKugelbahn} alt="Beschriftung" />
            <figcaption>Overlay</figcaption>
          </figure>
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
              Simulation platziert werden. Sie kann, wie die anderen Kugeln
              auch, über das Eingabefeld (siehe 10. Tab „Blau“) platziert
              werden.
            </li>
            <li>
              Abschusseinrichtung + Feder: Die Spannenergie kann durch die
              Eingabefelder (siehe 9. Tab „Feder) eingestellt werden.
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
              Einstellungen für den Balken, die Feder und sonstige
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
