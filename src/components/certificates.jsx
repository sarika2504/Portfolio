import "../styles/Certificates.css";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <h2>Certifications</h2>

      <div className="certificate-container">

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCertificate className="certificate-icon"/>
          <h3>MATLAB Onramp</h3>
          <p>MathWorks</p>
        </motion.div>

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCertificate className="certificate-icon"/>
          <h3>Simulink Onramp</h3>
          <p>MathWorks</p>
        </motion.div>

        <motion.div
          className="certificate-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCertificate className="certificate-icon"/>
          <h3>Hackathon Participation</h3>
          <p>Technical Innovation Events</p>
        </motion.div>

      </div>

    </section>
  );
}

export default Certificates;