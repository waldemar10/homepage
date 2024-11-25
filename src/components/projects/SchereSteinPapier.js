import React from "react";

import video from "../../videos/SchereSteinPapier.mp4";
import thumbnail from "../../images/VC/SSP.JPG";

import imgPaper from "../../images/VC/Papier.JPG";
import imgScissor from "../../images/VC/Schere.JPG";
import imgStone from "../../images/VC/Stein.JPG";

function SchereSteinPapier() {
  return (
    <>
      <div className="project-content-box">
        <div className="project-box">
          <div className="project-description">
            <p>
            Schere Stein Papier Ultimate war ein Softwareprojekt im 3. Semester
            im Modul Visual Computing. Die Aufgabe war es, eine Java-Anwendung
            zu entwickeln, die eine Bildverarbeitungsaufgabe erledigt und die
            daraus resultierenden Ergebnisse an eine selbsterstellte 3D-Umgebung
            sendet und visuell darstellt. Wir entschieden uns, das Spiel "Schere
            Stein Papier" zu programmieren. Anhand der Bildverarbeitungsmethoden
            konnte die Software die Gesten für Schere, Stein und Papier
            erkennen.
            <br />
            Meine Aufgabe im Team war es, die Bildverarbeitungsaufgabe zu
            programmieren. Ich arbeitete mit OpenCV und nutzte die
            Vorlesungsinhalte, um die Erkennung für die Gesten "Schere, Stein
            und Papier" zu realisieren.
            </p>
          </div>
          <h3>Video</h3>
          <div className="project-video">
            <video controls src={video} poster={thumbnail}></video>
          </div>
        </div>

        <div className="project-box">
          <div className="project-description">
            <h3>Vorgehensweise</h3>
            <p>
            Zu Beginn nutzte ich meine Webcam, um erste Tests zur
            Bildverarbeitung durchzuführen. Die ursprüngliche Idee war,
            Momentaufnahmen von der Hand zu machen und diese anschließend zu
            analysieren. Dazu wandelte ich das Bild in ein Graustufenbild um und
            wendete einen Schwellenwert an, der festlegte, ab welchem Grauwert
            die Pixel schwarz oder weiß dargestellt werden sollten. Für die
            Konturerkennung kam der Canny-Algorithmus zum Einsatz. Nach den
            ersten Tests stellte sich jedoch heraus, dass es effektiver wäre,
            die Bildverarbeitung direkt auf das Videomaterial der Webcam
            anzuwenden, anstatt statische Bilder zu nutzen. Daher verwarf ich
            diesen ersten Ansatz.
            </p>
            <p>
              Im zweiten Ansatz verfeinerte ich die Vorgehensweise und ging wie
              folgt vor:
            </p>
            <ol className="project-list">
              <li>
                Die Webcam wurde mithilfe von OpenCVs <code>VideoCapture</code>{" "}
                erkannt und gestartet.
              </li>
              <li>
                Das erste Frame des Webcam-Streams wurde als OpenCV-Matrix
                gespeichert, um es später als Referenz zu nutzen.
              </li>
              <li>
                Alle nachfolgenden Frames wurden in Graustufenbilder
                umgewandelt, und der Filter <code>GaussianBlur</code> wurde
                angewendet, um das Bild zu glätten und Rauschen zu reduzieren.
              </li>
              <li>
                Anschließend wurde ein Schwellenwert (Threshold) auf die
                Graustufenbilder angewendet, der bestimmt, ab welchem Grauwert
                die Pixel schwarz oder weiß dargestellt werden.
              </li>
              <li>
                Nach dieser Vorverarbeitung wurde der Canny-Algorithmus zur
                Kantenerkennung eingesetzt, der aufgrund der vorherigen
                Bildbearbeitung schnell die Konturen der Hand identifizierte.
              </li>
              <li>
                Um sicherzustellen, dass die Erkennung der Handformen korrekt
                funktioniert, wurden die Kantenbilder erweitert (Dilatation), um
                eventuelle Lücken in den Konturen zu schließen.
              </li>
              <li>
                Mithilfe der Hough-Transformation wurden gerade Linien im
                Kantenbild erkannt, was die Erkennung der Geste „Papier“
                erleichterte.
              </li>
              <li>
                Als nächstes zeichnete ich eine konvexe Hülle um die Finger
                (rote Linien um die Hand), um die sogenannten Konvexitätsdefekte
                zu ermitteln.
              </li>
              <li>
                Mit der OpenCV-Funktion <code>convexityDefects()</code> wurden
                die Stellen der Konvexitätsdefekte identifiziert, was uns die
                Erkennung der Fingerspitzen ermöglichte.
              </li>
              <li>
                Im nächsten Schritt wurde der Mittelpunkt der Handkontur mit der
                Funktion <code>Moments</code> berechnet. Diese Methode nutzt den
                Massenschwerpunkt der Hand, um genaue Koordinaten für die Mitte
                der Kontur zu erhalten.
              </li>
              <li>
                Die ermittelten Punkte der Konvexitätsdefekte wurden mit dem
                Mittelpunkt verbunden, wodurch die Anzahl der sichtbaren Finger
                bestimmt werden konnte. Dies half bei der Erkennung der Gesten
                „Papier“ und „Schere“.
              </li>
              <li>
                Um die Geste „Stein“ zu erkennen, wurde die Kreisförmigkeit
                (Circularity) der Handkontur berechnet. Diese wurde mithilfe der
                Formel <code>(4 * pi * ContourArea) / arcLength^2</code>{" "}
                berechnet und ermöglichte eine klare Unterscheidung zwischen den
                Gesten „Papier“ und „Stein“.
              </li>
              <li>
                Schließlich wurde das zuvor verarbeitete Kantenbild aus der
                OpenCV-Matrix in ein sichtbares Bild umgewandelt.
              </li>
              <li>
                Zum Abschluss wurde das Ergebnis auf dem aktuellen Webcam-Frame
                dargestellt, sodass die erkannte Handkontur und die
                entsprechende Geste in Echtzeit angezeigt wurden.
              </li>
            </ol>
          </div>

            <figure className="project-figure">
              <img src={imgScissor} alt="Scissors gesture" />
              <figcaption className="project-figcaption">
                Geste Schere
              </figcaption>
            </figure>

            <figure className="project-figure">
              <img src={imgStone} alt="Stone gesture" />
              <figcaption className="project-figcaption">
                Geste Stein
              </figcaption>
            </figure>

            <figure className="project-figure">
              <img src={imgPaper} alt="Paper gesture" />
              <figcaption className="project-figcaption">
                Geste Papier
              </figcaption>
            </figure>
        </div>
      </div>
    </>
  );
}
export default SchereSteinPapier;
