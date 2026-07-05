import "../styles/Skills.css";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMicrochip,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode className="icon" />

          <h3>Programming</h3>

          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
            <li>Embedded C</li>
          </ul>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaMicrochip className="icon" />

          <h3>Embedded Systems</h3>

          <ul>
            <li>Arduino</li>
            <li>ESP32</li>
            <li>Raspberry Pi</li>
            <li>IoT</li>
            <li>UART</li>
            <li>I2C</li>
            <li>SPI</li>
          </ul>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="icon" />

          <h3>VLSI</h3>

          <ul>
            <li>Digital Electronics</li>
            <li>Verilog</li>
            <li>MATLAB</li>
            <li>Simulink</li>
          </ul>
        </motion.div>

        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaTools className="icon" />

          <h3>Tools</h3>

          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Arduino IDE</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;