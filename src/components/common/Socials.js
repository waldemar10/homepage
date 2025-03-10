import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Socials = ({ width, height, color }) => {
  return (
    <div className="socials">
      <a
        className="socials__icon"
        href="https://www.linkedin.com/in/waldemar-justus-962467238/"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          style={{ width: width, height: height, color: color }}
          icon={faLinkedin}></FontAwesomeIcon>
      </a>
      <a className="socials__icon"
       href="https://github.com/waldemar10" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          style={{ width: width, height: height, color: color }}
          icon={faGithub}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Socials;
