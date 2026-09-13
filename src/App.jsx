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
    category: "AI / CAREER ASSISTANCE",
    title: "CareerPath AI",
    description:
      "An AI-powered career assistance project focused on helping users explore and navigate career-related decisions.",
    github: "https://github.com/ancient333/Career-Growth-Ai-Assistant",
  },
  {
    number: "03",
    category: "MACHINE LEARNING / DATA",
    title: "AQI Prediction System",
    description:
      "A machine learning project for predicting air quality using data preprocessing, analysis, and regression techniques.",
    github: "https://github.com/ancient333/AQI-Predictor",
  },
];

const additionalWork = [
  {
    category: "HARDWARE / SECURITY",
    title: "RFID Smart Security System",
    description:
      "A smart security system project developed as part of the portfolio work.",
  },
  {
    category: "MACHINE LEARNING / DATA",
    title: "Weather Prediction",
    description:
      "A weather prediction project included in the portfolio.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <CherryBlossom />

      <div className="background-overlay" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#overview" className="logo" onClick={closeMenu}>
          PORTFOLIO
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MENU */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu-nav">
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
        {/* HERO / OVERVIEW */}
        <section className="hero" id="overview">
          <div className="hero-content">
            <p className="eyebrow">AI / ML ENGINEERING</p>

            <h1 className="hero-name">
              Akshaya
              <br />
              Krishna S
            </h1>

            <h2 className="hero-role">
              AI &amp; ML Engineering Student
            </h2>

            <p className="hero-description">
              Pursuing a Bachelor&apos;s degree in Engineering,
              <br />
              majoring in Artificial Intelligence &amp; Machine Learning.
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
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  className="github-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ADDITIONAL WORK */}
        <section
          className="additional-section"
          id="additional-work"
        >
          <div className="section-heading">
            <p className="section-label">OTHER WORK</p>
            <h2>Additional Work</h2>
          </div>

          <div className="additional-list">
            {additionalWork.map((work) => (
              <article
                className="additional-card"
                key={work.title}
              >
                <p className="project-category">
                  {work.category}
                </p>

                <h3>{work.title}</h3>

                <p className="additional-description">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p className="section-label">CAPABILITIES</p>
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
        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="section-label">GET IN TOUCH</p>
            <h2>Contact</h2>
          </div>

          <div className="contact-content">
            <p>
              Interested in connecting or discussing a project?
            </p>

            <a href="mailto:krishnasakshaya24@gmail.com">
              krishnasakshaya24@gmail.com ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Akshaya Krishna S</span>

        <a href="#overview">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;