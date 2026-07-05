import "../styles/Achievements.css";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaLightbulb, FaCode } from "react-icons/fa";

function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <h2>Achievements</h2>

      <div className="achievement-container">

        <motion.div
          className="achievement-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaAward className="achievement-icon" />
          <h3>Hackathons</h3>
          <p>
            Participated in multiple hackathons focused on Embedded Systems,
            IoT and innovative engineering solutions.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="achievement-icon" />
          <h3>IEEE</h3>
          <p>
            Active IEEE member, participating in technical events, workshops
            and collaborative engineering activities.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode className="achievement-icon" />
          <h3>Projects</h3>
          <p>
            Built multiple embedded systems projects solving practical
            engineering problems.
          </p>
        </motion.div>

        <motion.div
          className="achievement-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLightbulb className="achievement-icon" />
          <h3>Innovation</h3>
          <p>
            Passionate about developing creative solutions using Embedded
            Systems and VLSI concepts.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Achievements;