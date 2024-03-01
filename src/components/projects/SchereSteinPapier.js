import "../../styles/projectStyles.css";
import React from "react";

import video from "../../videos/SchereSteinPapier.mp4";
import thumbnail from "../../images/VC/SSP.JPG";
import imgContour from "../../images/VC/PrototypeKontur.JPG";
import imgConvexityHull from "../../images/VC/convexityHull.JPG";
import imgPaper from "../../images/VC/Papier.JPG";
import imgScissor from "../../images/VC/Schere.JPG";
import imgStone from "../../images/VC/Stein.JPG";
function SchereSteinPapier() {

  return (
    <div>
      <div className="project_box">
        <div className="project_description">
          Schere Stein Papier Ultimate war ein Software Projekt im 3. Semester
          im Modul Visual Computing. Die Aufgabe war es, eine Java-Anwendung zu
          entwickeln, die eine Bildverarbeitungsaufgabe erledigt und die daraus
          resultierende Ergebnisse an eine selbsterstellte 3D-Umgebung
          sendet und visuell darstellt. Wir entschieden uns das Spiel Schere
          Stein Papier zu programmieren. Anhand Bildverarbeitungsmethoden konnte
          die Software die Gesten für Schere, Stein und Papier erkennen. 
          <br/>
          Meine Aufgabe im Team war es, die Bildverarbeitungsaufgabe zu programmieren.
          Ich arbeitete mit OpenCV und nutzte die Vorlesungsinhalte, um die
          Erkennung für die Gesten Schere, Stein und Papier zu realisieren.
        
        </div>
        <video
          controls
          className="project_video"
          src={video}
          poster={thumbnail}
        ></video>
      </div>

      <div className="project_box">
        <div className="project_description">
          <div className="project_subheader">Vorgehensweise</div>
          Ich nutzte meine Webcam, um die Bildverarbeitung zu testen. Die erste
          Idee war es, eine Momentaufnahme von der Hand zu machen, um diese dann
          anschließend auszuwerten. Ich wandelte das Bild in ein Graustufenbild
          um und nutzte dann einen Schwellenwert, der bestimmt ab welchen
          Grauwert die Pixel weiß bzw. schwarz dargestellt werden sollen. Für die
          Konturerkennung nutzte ich den Canny-Algorithmus. Nach einem ersten
          Test stellten wir fest, dass wir statt Fotos zu erstellen lieber die
          Bildverarbeitung direkt im Video arbeiten lassen wollen. Daher
          verwarf ich diesen Ansatz wieder.
          <br />
          Der zweiten Ansatz:
          <br />
          <ol className="project_list">
            <li>Webcam wird durch openCV VideoCapture erkannt.</li>
            <li>
              Erstes Frame der offenen Webcam wird von einem openCV Matrize
              gespeichert.
            </li>
            <li>
              Danach werden die darauffolgenden Frames der Webcam in
              Grauwertbilder umgewandelt + der Filter "GaussianBlur" angewendet.
            </li>

            <li>
              Dann wird der Threshold für die Grauwerte angewendet. Dieser
              entscheidet ab welchem Grauwert die Pixel weiß oder schwarz
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
              Dann wird die Hough-Transformation verwendet, um gerade Stellen im
              Kantenbild zu finden. Das ermöglicht es uns, die Geste für Papier
              leichter zu erkennen.
            </li>
            <li>
              Danach wird eine Hülle um die Finger gezeichnet (rote Linie um die
              Hand). Dies ermöglicht es, die Konvexitätsdefekte ausfindig zu
              machen.
            </li>
            <li>
              Mit der vordefinierten Funktion convexityDefects(); von OpenCV
              bekommen wir die Stellen der Konvexitätsdefekte. Das ermöglicht
              uns, die Fingerspitzen zu erkennen.{" "}
            </li>
            <li>
              Dann folgte die Erkennung des Mittelpunktes der Kontur. Das machen
              wir mit der Hilfe von "Moments". Es berechnet den
              Massenschwerpunkt eines Objektes in einem Bild. Die Stellen werden
              durch die Kontur des Objektes berechnet.
            </li>
            <li>
              Dadurch erhalten wir die Koordinaten für den Mittelpunkt der
              Kontur. Die Punkte, die wir von den Konvexitätsdefekten erhalten,
              werden mit dem Mittelpunkt zusammen verbunden. Dadurch können wir
              sehen, wie viele Finger angezeigt werden. Das hilft bei der
              Erkennung der Geste Papier und Schere.
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

        <div className="project_video">
          <figure>
            <img
              src={imgScissor}
              alt="Scissors gesture"
              style={{ width: "100%", padding: "10px" }}
            />
            <figcaption>
              Konvexitätsdefekte ermöglichen die Erkennung der Geste Schere
            </figcaption>
          </figure>

          <figure>
            <img
              src={imgStone}
              alt="Stone gesture"
              style={{ width: "100%", padding: "10px" }}
            />
            <figcaption>Die Erkennung der Geste Stein</figcaption>
          </figure>

          <figure>
            <img
              src={imgPaper}
              alt="Paper gesture"
              style={{ width: "100%", padding: "10px" }}
            />
            <figcaption>Die Erkennung der Geste Papier</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
export default SchereSteinPapier;
