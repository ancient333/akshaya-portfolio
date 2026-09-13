import { useState } from "react";
import CherryBlossom from "./components/CherryBlossom";
import "./App.css";

const projects = [
  {
    category: "AI / INTERACTIVE LEARNING",
    title: "AI-Based Interactive Quantum Algorithm Learning Platform",
    description:
      "An interactive platform designed to make quantum computing concepts and algorithms easier to understand through visual and interactive learning experiences.",
    github: "https://github.com/ancient333/QuantumLearn",
  },
  {
    category: "AI / CAREER INTELLIGENCE",
    title: "CareerPath AI",
    description:
      "An AI-powered career-focused project designed to support users with intelligent guidance and career-oriented insights.",
    github: "https://github.com/ancient333/Career-Growth-Ai-Assistant",
  },
  {
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
      <div className="site-background" />
      <CherryBlossom />

      <header className="navbar">
        <a href="#overview" className="brand" onClick={closeMenu}>
          PORTFOLIO
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu-links">
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
        <section id="overview" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">AI / ML ENGINEERING</p>

            <h1>
              Building
              <br />
              intelligent
              <br />
              systems.
            </h1>

            <p className="hero-description">
              Designing intelligent software, machine learning systems, and
              interactive experiences that turn complex ideas into useful
              products.
            </p>

            <div className="hero-links">
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
        <section id="projects" className="projects section">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-card ${
                  index === 0 ? "featured-project" : ""
                }`}
                key={project.title}
              >
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  className="project-link"
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
        <section id="additional-work" className="additional-work section">
          <div className="section-heading">
            <p className="eyebrow">MORE WORK</p>
            <h2>Additional Work</h2>
          </div>

          <div className="additional-work-list">
            {additionalWork.map((project, index) => (
              <article className="additional-card" key={project.title}>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills section">
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
        <section id="contact" className="contact section">
          <div className="contact-content">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Let's build
              <br />
              something intelligent.
            </h2>

            <a
              className="contact-email"
              href="mailto:krishnasakshaya24@gmail.com"
            >
              krishnasakshaya24@gmail.com ↗
            </a>

            <div className="contact-links">
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
            </div>
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