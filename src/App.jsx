import { useState } from "react";
import CherryBlossom from "./components/CherryBlossom";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainProjects = [
    {
      number: "01",
      category: "AI / INTERACTIVE LEARNING",
      title: "AI-Based Interactive Quantum Algorithm Learning Platform",
      description:
        "An interactive platform designed to make quantum computing concepts and algorithms easier to understand through visual and interactive learning experiences.",
      link: "https://github.com/ancient333/QuantumLearn",
    },
    {
      number: "02",
      category: "AI / CAREER",
      title: "CareerPath AI",
      description:
        "An AI-focused project designed around career guidance and personalized assistance.",
      link: "https://github.com/ancient333/Career-Growth-Ai-Assistant",
    },
    {
      number: "03",
      category: "MACHINE LEARNING / DATA",
      title: "AQI Prediction System",
      description:
        "A machine learning project focused on air-quality prediction using data preprocessing, analysis, and predictive modeling.",
      link: "https://github.com/ancient333/AQI-Predictor",
    },
  ];

  const additionalWork = [
    {
      number: "01",
      category: "HARDWARE / SECURITY",
      title: "RFID Smart Security System",
      description:
        "A smart security system project developed as part of the portfolio work.",
    },
    {
      number: "02",
      category: "MACHINE LEARNING / DATA",
      title: "Weather Prediction",
      description:
        "A weather prediction project included in the portfolio.",
    },
  ];

  const skills = [
    "Java",
    "Python",
    "SQL",
    "React",
    "Data Analytics",
    "Machine Learning",
    "JavaScript",
    "HTML",
  ];

  return (
    <div className="portfolio">
      <div className="background-image" />
      <div className="background-overlay" />

      <CherryBlossom />

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#overview" className="logo">
          AK
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MENU */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu-links">
          <a
            href="#overview"
            onClick={() => setMenuOpen(false)}
          >
            Overview
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#additional-work"
            onClick={() => setMenuOpen(false)}
          >
            Additional Work
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      <main>
        {/* HERO */}
        <section className="hero" id="overview">
          <div className="hero-content">
            <div className="eyebrow">AI / ML ENGINEERING</div>

            <h1 className="hero-name">
              Akshaya Krishna S
            </h1>

            <h2 className="hero-role">
              AI &amp; ML Engineering Student
            </h2>

            <p className="hero-education">
              Pursuing a Bachelor&apos;s Degree in Engineering,
              majoring in Artificial Intelligence and Machine Learning.
            </p>

            <p className="hero-description">
              Designing intelligent software, machine learning systems,
              and interactive experiences that turn complex ideas into
              useful products.
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
            <div className="eyebrow">SELECTED PROJECTS</div>
            <h2>Projects</h2>
          </div>

          <div className="projects-list">
            {mainProjects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  className="repository-link"
                  href={project.link}
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
            <div className="eyebrow">OTHER WORK</div>
            <h2>Additional Work</h2>
          </div>

          <div className="additional-list">
            {additionalWork.map((project) => (
              <article
                className="additional-card"
                key={project.number}
              >
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-heading">
            <div className="eyebrow">CAPABILITIES</div>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-heading">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Contact</h2>
          </div>

          <div className="contact-content">
            <p>
              Interested in connecting or discussing a project?
            </p>

            <a
              className="contact-email"
              href="mailto:krishnasakshaya24@gmail.com"
            >
              krishnasakshaya24@gmail.com ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Akshaya Krishna S</span>

        <span>AI / ML ENGINEERING</span>
      </footer>
    </div>
  );
}

export default App;