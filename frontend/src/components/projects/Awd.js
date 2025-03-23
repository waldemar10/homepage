import React from "react";

import video from "../../videos/LinguPingu.mp4";
import thumbnail from "../../images/Awd/GrammarHub.JPG";
import grammar from "../../images/Awd/Grammatik.jpg";
import vocabel from "../../images/Awd/Vokabeln.jpg";
import settings from "../../images/Awd/Einstellungen.jpg";
function Awd() {
  return (
    <div className="project">
      <p className="project__text">
        In Advanced Web Development (AWD) war es die Aufgabe, eine progressive
        Webanwendung zu entwickeln. Dabei war es wichtig, Backend-Technologien
        zu verwenden. Wir entschieden uns im Team für eine Sprachlernwebseite,
        die die Möglichkeit bietet, Vokabeln zu lernen und Grammatikübungen zu
        machen. Der Benutzer kann sich registrieren und anmelden. Die Webseite
        speichert die Daten in einer MongoDB-Datenbank. Auch ist sie responsiv
        und kann auf allen Geräten verwendet werden.
      </p>
      <h3 className="project__title">Was ist LinguPingu?</h3>
      <p className="project__text">
        LinguPingu ist eine Sprachenlern-App, die das Vokabellernen zu einem
        unterhaltsamen und effektiven Erlebnis macht. Durch die Kombination von
        Vokabeltraining, interaktiven Lektionen und der Möglichkeit,
        individuelle Vokabelkollektionen zu erstellen, hebt sich LinguPingu
        deutlich von anderen Sprachenlern-Apps ab. Inspiriert von erfolgreichen
        Anwendungen wie Duolingo und Busuu legt LinguPingu besonderen Wert auf
        die Integration von Benutzer erstellten Vokabelkollektionen. Dies
        ermöglicht es den Nutzern, ihr persönliches Lernumfeld zu gestalten und
        ihre individuellen Lernziele effizient zu verfolgen.
      </p>
      <div>
        <figure className="project__figure">
          <img src={vocabel} alt="Vokabeln" />
          <figcaption className="project__figcaption">
            Vokabeln lernen mit LinguPingu
          </figcaption>
        </figure>
      </div>
      <h3 className="project__title">Grammatikübungen</h3>
      <p className="project__text">
        Die Grammatik ist in zwei Kategorien unterteilt:
      </p>
      <ul>
        <li>
          <b>Zeitformen:</b> Hier lernt der Benutzer verschiedene Zeitformen
          kennen und vertieft sein Verständnis für die korrekte Anwendung.
        </li>
        <li>
          <b>Tägliches Leben:</b> In dieser Kategorie geht es um Situationen und
          Ausdrücke aus dem Alltag. Der Fokus liegt darauf, grammatikalisch
          korrekte Sätze für den täglichen Umgang zu erlernen.
        </li>
      </ul>

      <p className="project__text">
        Bei einem Klick auf eine Lektion wird ein erklärender Grammatiktext
        angezeigt. Anschließend kann der Benutzer die Übung starten, bei der er
        einen Satz in die zu lernende Sprache übersetzen muss. Dabei wählt er
        aus vorgegebenen Wörtern – einige davon sind falsch, um die
        Herausforderung zu erhöhen.
      </p>

      <p className="project__text">
        <b>Interaktive Features:</b>
      </p>
      <ul>
        <li>
          Der Benutzer kann auf ein Wort klicken, um es zu ändern oder
          Tippfehler zu korrigieren.
        </li>
        <li>
          Nach der Bestätigung wird die Antwort überprüft:
          <ul>
            <li>
              <b>Falsche Antwort:</b> Die Karte wackelt, und ein trauriger
              Pinguin erscheint. Der Benutzer muss den Satz erneut bilden.
            </li>
            <li>
              <b>Richtige Antwort:</b> Die Karte wird grün umrandet, und ein
              fröhlicher Pinguin erscheint. Die nächste Aufgabe wird angezeigt.
            </li>
          </ul>
        </li>
      </ul>

      <p className="project__text">
        Dieser Prozess wiederholt sich, bis alle Aufgaben der Lektion
        abgeschlossen sind. Danach erscheint ein Bestätigungsfeld, und der
        Benutzer kehrt zur Grammatik-Seite zurück. Abgeschlossene Lektionen
        werden mit einer grünen Hintergrundfarbe hervorgehoben und individuell
        in der Datenbank gespeichert.
      </p>

      <div className="project__image-box">
        <figure className="project__figure" style={{ margin: "5px" }}>
          <img src={grammar} alt="Grammatik" />
          <figcaption className="project__figcaption">Grammatik</figcaption>
        </figure>
        <figure className="project__figure" style={{ margin: "5px" }}>
          <img src={settings} alt="Konto" />
          <figcaption className="project__figcaption">
            Kontoeinstellungen
          </figcaption>
        </figure>
      </div>

      <h3 className="project__title">Video</h3>
      <div className="project__video">
        <video controls src={video} poster={thumbnail} />
      </div>
    </div>
  );
}
export default Awd;
