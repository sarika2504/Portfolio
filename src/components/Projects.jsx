import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Smart Water Detection System",
    description:
      "Arduino-based system that detects water levels and alerts users to prevent overflow and wastage.",
    github: "https://github.com/sarika2504",
  },
  {
    title: "Farm Guardian",
    description:
      "AI-powered smart agriculture project for monitoring crops using sensors and automation.",
    github: "https://github.com/sarika2504",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using React, Vite, Framer Motion, and CSS to showcase projects and skills.",
    github: "https://github.com/sarika2504",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub /> View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;