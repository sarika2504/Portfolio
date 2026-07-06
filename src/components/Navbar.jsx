import "../styles/Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Sarika G</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="social-icons">
        <a
          href="https://github.com/sarika2504"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sarika-g-397b4a34a"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;