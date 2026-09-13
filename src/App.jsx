import { useState } from "react";
import CherryBlossom from "./components/CherryBlossom";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "AI / INTERACTIVE LEARNING",
    title: "AI-Based Interactive Quantum Algorithm Learning Platform",
    description:
      "An interactive platform designed to make quantum computing concepts and algorithms easier to understand through visual and interactive learning experiences.",
    github: "https://github.com/ancient333/QuantumLearn",
  },
  {
    number: "02",
    category: "AI / CAREER INTELLIGENCE",
    title: "CareerPath AI",
    description:
      "An AI-focused project built around helping users explore and understand career-oriented paths.",
    github: "https://github.com/ancient333/Career-Growth-Ai-Assistant",
  },
  {
    number: "03",
    category: "MACHINE LEARNING / DATA",
    title: "AQI Prediction System",
    description:
      "A machine learning project focused on air-quality prediction using data preprocessing, analysis and regression techniques.",
    github: "https://github.com/ancient333/AQI-Predictor",
  },
];

const additionalWork = [
  {
    number: "01",
    category: "HARDWARE / SECURITY",
    title: "RFID Smart Security System",
    description:
      "A hardware-focused security project using RFID-based access and security concepts.",
  },
  {
    number: "02",
    category: "MACHINE LEARNING / DATA",
    title: "Weather Prediction",
    description:
      "A weather prediction project included as part of the portfolio work.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="site-background" />
      <CherryBlossom />

      <header className="navbar">
        <a href="#overview" className="logo" onClick={closeMenu}>
          AKS
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav>
          <a href="#overview" onClick={closeMenu}>
            Overview
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#additional-work" onClick={closeMenu}>
            Additional Work
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>

      <main>
        {/* HERO */}
        <section className="hero section" id="overview">
          <div className="hero-inner">
            <p className="eyebrow">AI / ML ENGINEERING</p>

            <h1>Akshaya Krishna S</h1>

            <h2>AI &amp; ML Engineering Student</h2>

            <p className="hero-description">
              Pursuing a Bachelor&apos;s Degree in Engineering, specializing
              in Artificial Intelligence &amp; Machine Learning.
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/akshaya-krishna-s-5a52a4393/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/ancient333"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="mailto:krishnasakshaya24@gmail.com">
                Email ↗
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <a
                    className="repository-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ADDITIONAL WORK */}
        <section
          className="additional-work section"
          id="additional-work"
        >
          <div className="section-heading">
            <p className="eyebrow">OTHER BUILDS</p>
            <h2>Additional Work</h2>
          </div>

          <div className="additional-list">
            {additionalWork.map((work) => (
              <article className="additional-card" key={work.number}>
                <div className="additional-number">{work.number}</div>

                <div className="additional-content">
                  <p className="project-category">{work.category}</p>

                  <h3>{work.title}</h3>

                  <p className="project-description">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">CAPABILITIES</p>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Artificial Intelligence</span>
            <span>Data Analysis</span>
            <span>React</span>
            <span>JavaScript</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Contact</h2>
          </div>

          <p className="contact-text">
            Interested in connecting or discussing a project?
          </p>

          <a
            className="contact-email"
            href="mailto:krishnasakshaya24@gmail.com"
          >
            krishnasakshaya24@gmail.com ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>Akshaya Krishna S</span>
        <span>AI / ML ENGINEERING</span>
      </footer>
    </div>
  );
}

export default App;