import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../styles/socials.css";
const Socials = ({ width, height }) => {
  return (
    <div className="socials-container">
      <a
        href="https://www.linkedin.com/in/waldemar-justus-962467238/"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          style={{ width: width, height: height }}
          icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a href="https://github.com/waldemar10" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          style={{ width: width, height: height }}
          icon={faGithub}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Socials;
