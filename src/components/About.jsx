export default function About() {
  return (
    <section id="about" className="about-section section scroll-reveal">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-sm-5 col-md-5 col-lg-4 about-left">
            <div className="about-image-card">
              <div className="about-image-wrapper">
                <div className="about-image-placeholder">GS</div>
              </div>
              <div className="about-badges">
                <span className="about-badge">AI Specialist</span>
                <span className="about-badge">Frontend</span>
                <span className="about-badge">UI Design</span>
              </div>
            </div>
          </div>

          <div className="col-sm-7 col-md-7 col-lg-7">
            <div className="about-content">
              <h2 className="section-title gradient-title">About Me</h2>
              <p className="section-text">
              <span className="section-kicker">I&apos;m Gulshan Saini, a frontend developer</span><br />
                who loves turning bold ideas into clean, fast, and user-friendly interfaces. I
                enjoy exploring AI-powered development tools to boost
                productivity and deliver modern, reliable web experiences. My
                focus is on building polished UI with scalable code and
                thoughtful UX.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <p>Projects Completed</p>
                  <h3>20+</h3>
                </div>
                <div className="stat-card">
                  <p>Speciality</p>
                  <h3>Frontend</h3>
                </div>
                <div className="stat-card">
                  <p>Years Experience</p>
                  <h3>1+</h3>
                </div>
              </div>
              <div className="about-actions">
                <a className="btn-primary-cta" href="#projects">
                  View Projects
                </a>
                <a className="btn-outline-cta" href="#contact">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator about-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
