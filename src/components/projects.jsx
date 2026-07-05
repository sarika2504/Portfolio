import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "🌾 Smart Guardian",
    description:
      "A smart agriculture solution using ESP32 and sensors to monitor environmental conditions and improve crop management.",
    tech: ["ESP32", "IoT", "Sensors"],
    github: "https://github.com/sarika2504"
  },
  {
    title: "💧 Smart Water Leakage Detection",
    description:
      "Arduino-based system that detects water leakage using flow sensors and helps reduce water wastage through real-time monitoring.",
    tech: ["Arduino", "Embedded C", "Flow Sensor"],
    github: "https://github.com/sarika2504"
  },
  {
    title: "📍 Automatic Location Tracking",
    description:
      "Embedded GPS-based tracking system designed for real-time location monitoring and emergency applications.",
    tech: ["GPS", "Arduino", "Embedded Systems"],
    github: "https://github.com/sarika2504"
  },
  {
    title: "🌼 Pollination Bot",
    description:
      "An embedded system developed to support automated crop pollination for improving agricultural productivity.",
    tech: ["Raspberry Pi", "Camera", "IoT"],
    github: "https://github.com/sarika2504"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.04 }}
          >

            <div className="project-image">
              Project Image
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />
              GitHub
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;