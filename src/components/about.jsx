import "../styles/About.css";
import { motion } from "framer-motion";
import { FaUniversity, FaMicrochip, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="about-card">

          <h2>About Me</h2>

          <p>
            I am a B.Tech student in Electronics and Communication Engineering
            at Presidency University, Bangalore, with a CGPA of 9.2.
          </p>

          <p>
            My passion lies in Embedded Systems, VLSI Design and IoT.
            I enjoy designing intelligent hardware solutions that solve
            real-world engineering problems.
          </p>

          <p>
            I am continuously improving my technical skills through projects,
            hackathons and certifications.
          </p>

        </div>

        <div className="info-grid">

          <div className="info-box">
            <FaUniversity size={40} />
            <h3>University</h3>
            <p>Presidency University</p>
          </div>

          <div className="info-box">
            <FaGraduationCap size={40} />
            <h3>CGPA</h3>
            <p>9.2</p>
          </div>

          <div className="info-box">
            <FaMicrochip size={40} />
            <h3>Domain</h3>
            <p>Embedded Systems & VLSI</p>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt size={40} />
            <h3>Location</h3>
            <p>Bengaluru, India</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;