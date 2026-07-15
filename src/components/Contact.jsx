import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqsiog3",
        "template_fd879fl",
        form.current,
        "-PgexTEY6vLngkdBF"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.03 }}
        >
          <h3>Let's Connect</h3>

          <p>
            I'm always interested in Embedded Systems, VLSI,
            internships, research opportunities and innovative projects.
          </p>

          <div className="contact-info">
            <p><FaEnvelope /> sarika250406@gmail.com</p>
            <p><FaPhone /> +91 8309554622</p>
            <p><FaMapMarkerAlt /> Bengaluru, Karnataka</p>
          </div>

          <div className="social-links">
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
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          whileHover={{ scale: 1.02 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;