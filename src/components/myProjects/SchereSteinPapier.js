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
            Vorlesungsinhalte, um die Erkennung für die Gesten "Schere, Stein und
            Papier" zu realisieren.
          </div>
          <div className="project-subheader">Video</div>
          <div className="project-video">
            <video controls src={video} poster={thumbnail}></video>
          </div>
        </div>

        <div className="project-box">
          <div className="project-description">
            <div className="project-subheader">Vorgehensweise</div>
            Ich nutzte meine Webcam, um die Bildverarbeitung zu testen. Die
            erste Idee war es, eine Momentaufnahme von der Hand zu machen, um
            diese dann anschließend auszuwerten. Ich wandelte das Bild in ein
            Graustufenbild um und nutzte dann einen Schwellenwert, der bestimmt,
            ab welchem Grauwert die Pixel weiß bzw. schwarz dargestellt werden
            sollen. Für die Konturerkennung nutzte ich den Canny-Algorithmus.
            Nach einem ersten Test stellten wir fest, dass wir statt Fotos zu
            erstellen lieber die Bildverarbeitung direkt im Video arbeiten
            lassen wollen. Daher verwarf ich diesen Ansatz wieder.
            <br />
            Der zweite Ansatz:
            <br />
            <ol className="project-list">
              <li>Webcam wird durch openCV VideoCapture erkannt.</li>
              <li>
                Erstes Frame der offenen Webcam wird von einem openCV Matrize
                gespeichert.
              </li>
              <li>
                Danach werden die darauffolgenden Frames der Webcam in
                Grauwertbilder umgewandelt + der Filter "GaussianBlur"
                angewendet.
              </li>

              <li>
                Dann wird der Threshold für die Grauwerte angewendet. Dieser
                entscheidet, ab welchem Grauwert die Pixel weiß oder schwarz
                dargestellt werden.{" "}
              </li>
              <li>
                Nach dieser Vorbereitung wird die Kantendetektion mit dem
                Canny-Algorithmus gestartet. Dieser erkennt wegen der zuvor
                erstellten Vorarbeit schnell die Kontur der Hand.
              </li>
              <li>
                Um keine Probleme bei der späteren Erkennung der Handformen zu
                haben, wird das Kantenbild geweitet.
              </li>
              <li>
                Dann wird die Hough-Transformation verwendet, um gerade Stellen
                im Kantenbild zu finden. Das ermöglicht es uns, die Geste für
                Papier leichter zu erkennen.
              </li>
              <li>
                Danach wird eine Hülle um die Finger gezeichnet (rote Linie um
                die Hand). Dies ermöglicht es, die Konvexitätsdefekte ausfindig
                zu machen.
              </li>
              <li>
                Mit der vordefinierten Funktion convexityDefects(); von OpenCV
                bekommen wir die Stellen der Konvexitätsdefekte. Das ermöglicht
                uns, die Fingerspitzen zu erkennen.{" "}
              </li>
              <li>
                Dann folgte die Erkennung des Mittelpunktes der Kontur. Das
                machen wir mit der Hilfe von "Moments". Es berechnet den
                Massenschwerpunkt eines Objektes in einem Bild. Die Stellen
                werden durch die Kontur des Objektes berechnet.
              </li>
              <li>
                Dadurch erhalten wir die Koordinaten für den Mittelpunkt der
                Kontur. Die Punkte, die wir von den Konvexitätsdefekten
                erhalten, werden mit dem Mittelpunkt zusammen verbunden. Dadurch
                können wir sehen, wie viele Finger angezeigt werden. Das hilft
                bei der Erkennung der Gesten: Papier und Schere.
              </li>
              <li>
                Danach wird die Kreisförmigkeit der Kontur berechnet. Das hilft
                bei der Unterscheidung der Gesten Papier und Stein. Formel:
                Circularity = (4 * pi * ContourArea) / arcLength^2{" "}
              </li>
              <li>
                Das Kantenbild, das zuvor nur in der openCV Matrize bearbeitet
                wurde, wird nun wieder in ein Bild umgewandelt.
              </li>
              <li>
                Danach wird das Ergebnis auf das aktuelle Frame gezeichnet,
                wodurch wir direkt die Kontur und die Geste in unserer Webcam
                sehen können.
              </li>
            </ol>
          </div>

          <div className="project-image">
            <figure className="project-figure">
              <img
                src={imgScissor}
                alt="Scissors gesture"
              />
              <figcaption className="project-figcaption">
                Konvexitätsdefekte ermöglichen die Erkennung der Geste Schere
              </figcaption>
            </figure>

            <figure className="project-figure">
              <img
                src={imgStone}
                alt="Stone gesture"
              />
              <figcaption className="project-figcaption">
                Die Erkennung der Geste Stein
              </figcaption>
            </figure>

            <figure className="project-figure">
              <img
                src={imgPaper}
                alt="Paper gesture"
              />
              <figcaption className="project-figcaption">
                Die Erkennung der Geste Papier
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
export default SchereSteinPapier;