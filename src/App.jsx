import { useState } from "react";
import CherryBlossom from "./components/CherryBlossom";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="background-image" />
      <div className="background-overlay" />

      <CherryBlossom />

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#overview" className="logo" onClick={closeMenu}>
          PORTFOLIO
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MENU */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu-links">
          <a href="#overview" onClick={closeMenu}>
            Overview
          </a>

          <a href="#systems" onClick={closeMenu}>
            Systems
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
        <section className="hero" id="overview">
          <div className="hero-content">
            <p className="eyebrow">AI / ML ENGINEERING</p>

            <h1>Akshaya Krishna S</h1>

            <h2>AI &amp; ML Engineering Student</h2>

            <p className="degree-line">
              Pursuing a Bachelor&apos;s degree in Engineering, majoring in
              Artificial Intelligence &amp; Machine Learning.
            </p>

            <p className="hero-description">
              Designing intelligent software, machine learning systems, and
              interactive experiences that turn complex ideas into useful
              products.
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

        {/* SYSTEMS */}
        <section className="systems section" id="systems">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Systems &amp; Projects</h2>
          </div>

          <div className="projects">
            {/* PROJECT 1 */}
            <article className="project project-large">
              <div className="project-number">01</div>

              <div className="project-content">
                <p className="project-type">AI / INTERACTIVE LEARNING</p>

                <h3>
                  AI-Based Interactive Quantum Algorithm Learning Platform
                </h3>

                <p className="project-description">
                  An interactive platform designed to make quantum computing
                  concepts and algorithms easier to understand through visual
                  and interactive learning experiences.
                </p>

                <a
                  className="repository-link"
                  href="https://github.com/ancient333/QuantumLearn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="project">
              <div className="project-number">02</div>

              <div className="project-content">
                <p className="project-type">AI / CAREER ASSISTANCE</p>

                <h3>CareerPath AI</h3>

                <p className="project-description">
                  An AI-powered career assistance project focused on helping
                  users explore and understand career growth opportunities.
                </p>

                <a
                  className="repository-link"
                  href="https://github.com/ancient333/Career-Growth-Ai-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </article>

            {/* PROJECT 3 */}
            <article className="project">
              <div className="project-number">03</div>

              <div className="project-content">
                <p className="project-type">MACHINE LEARNING / DATA</p>

                <h3>AQI Prediction System</h3>

                <p className="project-description">
                  A machine learning project for air-quality prediction using
                  data preprocessing, analysis, and predictive modelling.
                </p>

                <a
                  className="repository-link"
                  href="https://github.com/ancient333/AQI-Predictor"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </article>

            {/* PROJECT 4 */}
            <article className="project project-small">
              <div className="project-number">04</div>

              <div className="project-content">
                <p className="project-type">HARDWARE / SECURITY</p>

                <h3>RFID Smart Security System</h3>

                <p className="project-description">
                  A smart security system project developed as part of the
                  portfolio work.
                </p>
              </div>
            </article>

            {/* PROJECT 5 */}
            <article className="project project-small">
              <div className="project-number">05</div>

              <div className="project-content">
                <p className="project-type">MACHINE LEARNING / DATA</p>

                <h3>Weather Prediction</h3>

                <p className="project-description">
                  A weather prediction project included in the portfolio.
                </p>
              </div>
            </article>
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
          <div className="contact-content">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>Let&apos;s build something intelligent.</h2>

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
        <span>Akshaya Krishna S</span>
        <span>AI &amp; ML Engineering</span>
      </footer>
    </div>
  );
}

export default App;