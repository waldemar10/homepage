import React from "react";

import video from "../../videos/LinguPingu.mp4";
import thumbnail from "../../images/Awd/GrammarHub.JPG";
import grammar from "../../images/Awd/Grammatik.jpg";
import vocabel from "../../images/Awd/Vokabeln.jpg";
import settings from "../../images/Awd/Einstellungen.jpg";
function Awd() {
  return (
    <div className="project__content-box">
      <div className="project__box">
        <div className="project__description">
          <p>
            In Advanced Web Development (AWD) war es die Aufgabe, eine
            progressive Webanwendung zu entwickeln. Dabei war es wichtig,
            Backend-Technologien zu verwenden. Wir entschieden uns im Team für
            eine Sprachlernwebseite, die die Möglichkeit bietet, Vokabeln zu
            lernen und Grammatikübungen zu machen. Der Benutzer kann sich
            registrieren und anmelden. Die Webseite speichert die Daten in einer
            MongoDB-Datenbank. Auch ist sie responsiv und kann auf allen Geräten
            verwendet werden.
          </p>
          <h3>Was ist LinguPingu?</h3>
          <p>
            LinguPingu ist eine Sprachenlern-App, die das Vokabellernen zu einem
            unterhaltsamen und effektiven Erlebnis macht. Durch die Kombination
            von Vokabeltraining, interaktiven Lektionen und der Möglichkeit,
            individuelle Vokabelkollektionen zu erstellen, hebt sich LinguPingu
            deutlich von anderen Sprachenlern-Apps ab. Inspiriert von
            erfolgreichen Anwendungen wie Duolingo und Busuu legt LinguPingu
            besonderen Wert auf die Integration von Benutzer erstellten
            Vokabelkollektionen. Dies ermöglicht es den Nutzern, ihr
            persönliches Lernumfeld zu gestalten und ihre individuellen
            Lernziele effizient zu verfolgen.
          </p>
          <div>
            <figure className="project__figure">
              <img src={vocabel} alt="Beschriftung" />
              <figcaption className="project__figcaption">
                Die Möglichkeit Vokabeln zu lernen
              </figcaption>
            </figure>
          </div>
          <h3>Grammatikübungen</h3>
          <p>
            Die Grammatik ist in zwei Kategorien aufgeteilt. Es gibt zum einen
            die Kategorie Zeitformen, dort kann der Benutzer jede Zeitform
            lernen. Zum anderen gibt es die Kategorie des täglichen Lebens, in
            der der Nutzer Situationen und Ausdrücke aus dem Alltag erlernt.
            Hierbei steht vor allem die Anwendung grammatikalisch korrekter
            Sätze des täglichen Umgangs im Vordergrund. Bei einem Klick auf eine
            Lektion erscheint ein erklärender Text zur Grammatik. Anschließend
            kann der Benutzer die Übung starten, bei der er den dargestellten
            Satz in die zu lernende Sprache übersetzen muss. Dort wählt er aus
            vorgegebenen Wörtern. Die Übung enthält auch falsche Wörter, um die
            Schwierigkeit zu erhöhen. Um eine Antwort zu ändern oder einen
            Tippfehler zu korrigieren, kann der Benutzer einfach auf das
            entsprechende Wort klicken und es erneut auswählen. Nach der
            Bestätigung wird die Antwort überprüft. Wenn die Antwort falsch ist,
            wird die Karte wackeln und ein trauriger Pinguin erscheint. Die
            Antwort des Benutzers wird gelöscht und er muss den Satz erneut
            bilden. Wenn die Antwort richtig ist, wird die Karte grün umrandet
            und ein fröhlicher Pinguin erscheint. Die neue Aufgabe wird
            anschließend angezeigt und dies geschieht so lange, bis alle
            Aufgaben für die jeweilige Lektion erledigt sind. Danach erscheint
            ein Feld, um den Abschluss der Lektion zu bestätigen. Der Benutzer
            kann nun zur Grammatik-Seite zurückkehren. Die abgeschlossene
            Lektion wird mit grüner Hintergrundfarbe hervorgehoben. Jede
            abgeschlossene Lektion wird in der Datenbank gespeichert und ist für
            jeden Benutzer individuell.
          </p>
        </div>

        <div className="project__image-box">
          <figure className="project__figure" style={{ margin: "5px" }}>
            <img src={grammar} alt="Beschriftung" />
            <figcaption className="project__figcaption">
              Grammatikübungen
            </figcaption>
          </figure>
          <figure className="project__figure" style={{ margin: "5px" }}>
            <img src={settings} alt="Beschriftung" />
            <figcaption className="project__figcaption">
              Einstellungen für das Konto des Benutzers
            </figcaption>
          </figure>
        </div>

        <h3>Video</h3>
        <div className="project__video">
          <video controls src={video} poster={thumbnail} />
        </div>
      </div>
    </div>
  );
}
export default Awd;
