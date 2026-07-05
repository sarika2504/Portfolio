import "../styles/Hero.css";
import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">

        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sarika G
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Embedded Systems Engineer",
            2000,
            "Aspiring VLSI Design Engineer",
            2000,
            "ECE Student",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p>
          Passionate about Embedded Systems, VLSI Design, IoT and Electronics.
          I enjoy building innovative hardware solutions and continuously
          learning new technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#" className="secondary-btn">
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="hero-social">

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

      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <img src={profile} alt="Sarika G" />
      </motion.div>

    </section>
  );
}

export default Hero;