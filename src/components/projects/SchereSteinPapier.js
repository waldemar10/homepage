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
              Schere-Stein-Papier Ultimate war ein Softwareprojekt im dritten
              Semester im Rahmen des Moduls Visual Computing. Ziel des Projekts
              war die Entwicklung einer Java-Anwendung, die eine
              Bildverarbeitungsaufgabe umsetzt und die daraus gewonnenen
              Ergebnisse in einer selbst erstellten 3D-Umgebung visuell
              darstellt. Als Team entschieden wir uns dafür, das klassische
              Spiel „Schere, Stein, Papier“ zu implementieren. Mithilfe von
              Bildverarbeitungsmethoden war die Software in der Lage, die
              Handgesten für Schere, Stein und Papier zu erkennen und
              entsprechend zu verarbeiten.
              <br />
              Meine Hauptaufgabe im Team bestand in der Programmierung der
              Bildverarbeitungskomponente. Hierbei setzte ich OpenCV ein und
              nutzte die in der Vorlesung vermittelten Konzepte, um die
              Erkennung der Handgesten für „Schere“, „Stein“ und „Papier“ zu
              realisieren. Dies umfasste die Entwicklung eines robusten
              Algorithmus zur Erkennung und Klassifizierung der Gesten, der die
              Grundlage für die Interaktion mit der 3D-Umgebung bildete.
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
            <p>Wie die Gestenerkennenung funktioniert:</p>

            <ol className="project-list">
              <li>
                Die Webcam wird mithilfe von OpenCVs <code>VideoCapture</code>{" "}
                erkannt und gestartet.
              </li>
              <li>
                Das erste Frame des Webcam-Streams wird als OpenCV-Matrix
                gespeichert, um es später als Referenz zu nutzen.
              </li>
              <li>
                Alle nachfolgenden Frames werden in Graustufenbilder
                umgewandelt, und der Filter <code>GaussianBlur</code> wird
                angewendet, um das Bild zu glätten und Rauschen zu reduzieren.
              </li>
              <li>
                Anschließend wird ein Schwellenwert (Threshold) auf die
                Graustufenbilder angewendet, der bestimmt, ab welchem Grauwert
                die Pixel schwarz oder weiß dargestellt werden.
              </li>
              <li>
                Nach dieser Vorverarbeitung wird der Canny-Algorithmus zur
                Kantenerkennung eingesetzt, der aufgrund der vorherigen
                Bildbearbeitung schnell die Konturen der Hand identifiziert.
              </li>
              <li>
                Um sicherzustellen, dass die Erkennung der Handformen korrekt
                funktioniert, werden die Kantenbilder erweitert (Dilatation), um
                eventuelle Lücken in den Konturen zu schließen.
              </li>
              <li>
                Mithilfe der Hough-Transformation werden gerade Linien im
                Kantenbild erkannt, was die Erkennung der Geste „Papier“
                erleichtert.
              </li>
              <li>
                Als nächstes wird eine konvexe Hülle um die Finger (rote Linien
                um die Hand) gezeichnet, um die sogenannten Konvexitätsdefekte
                zu ermitteln.
              </li>
              <li>
                Mit der OpenCV-Funktion <code>convexityDefects()</code> werden
                die Stellen der Konvexitätsdefekte identifiziert, was die
                Erkennung der Fingerspitzen ermöglicht.
              </li>
              <li>
                Im nächsten Schritt wird der Mittelpunkt der Handkontur mit der
                Funktion <code>Moments</code> berechnet. Diese Methode nutzt den
                Massenschwerpunkt der Hand, um genaue Koordinaten für die Mitte
                der Kontur zu erhalten.
              </li>
              <li>
                Die ermittelten Punkte der Konvexitätsdefekte werden mit dem
                Mittelpunkt verbunden, wodurch die Anzahl der sichtbaren Finger
                bestimmt werden kann. Dies hilft bei der Erkennung der Gesten
                „Papier“ und „Schere“.
              </li>
              <li>
                Um die Geste „Stein“ zu erkennen, wird die Kreisförmigkeit
                (Circularity) der Handkontur berechnet. Diese wird mithilfe der
                Formel{" "}
                <code>
                  (4 * π * ContourArea) / arcLength<sup>2</sup>
                </code>{" "}
                berechnet und ermöglicht eine klare Unterscheidung zwischen den
                Gesten „Papier“ und „Stein“.
              </li>
              <li>
                Schließlich wird das zuvor verarbeitete Kantenbild aus der
                OpenCV-Matrix in ein sichtbares Bild umgewandelt.
              </li>
              <li>
                Zum Abschluss wird das Ergebnis auf dem aktuellen Webcam-Frame
                dargestellt, sodass die erkannte Handkontur und die
                entsprechende Geste in Echtzeit angezeigt werden.
              </li>
            </ol>
          </div>

          <figure className="project-figure">
            <img src={imgScissor} alt="Scissors gesture" />
            <figcaption className="project-figcaption">Geste Schere</figcaption>
          </figure>

          <figure className="project-figure">
            <img src={imgStone} alt="Stone gesture" />
            <figcaption className="project-figcaption">Geste Stein</figcaption>
          </figure>

          <figure className="project-figure">
            <img src={imgPaper} alt="Paper gesture" />
            <figcaption className="project-figcaption">Geste Papier</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
export default SchereSteinPapier;
