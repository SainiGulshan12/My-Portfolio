import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const roles = useMemo(
    () => ["FrontEnd Developer", "AI Specialist", "UI Designer"],
    [],
  );
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 700);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [isDeleting, roleIndex, roles, text]);

  return (
    <section id="home" className="hero-section scroll-reveal">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-typing hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="typing-cursor" />
          </div>
          <h1 className="hero-heading">
            Hello, I&apos;m <span className="hero-heading-accent"></span>
          </h1>
          <h2 className="hero-heading-lg">Gulshan Saini</h2>

          <p className="hero-description">
            I am a frontend developer skilled in web technologies and AI tools, and I build responsive, user-friendly and efficient web applications with the help of modern tools and AI.
          </p>

          <div className="hero-actions d-flex flex-wrap">
            <a className="btn-primary-cta" href="#projects">
              View My Work
            </a>
            <a className="btn-outline-cta" href="https://drive.google.com/file/d/18F6Sa3_qgDtCujRN16w44eX9btdEbl9p/view?usp=sharing">
              My Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/gulshan-saini-6769482b4/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              className="social-link"
              href="mailto:gulshansaini0125@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Gulshan%2C%20I%20want%20to%20connect%20with%20you"
              aria-label="Email"
              onClick={(event) => {
                event.preventDefault();
                window.location.href =
                  "mailto:gulshansaini0125@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Gulshan%2C%20I%20want%20to%20connect%20with%20you";
              }}
            >
              <i className="bi bi-envelope-fill" />
            </a>
            <a
              className="social-link"
              href="https://github.com/SainiGulshan12"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-figure">
            <div className="hero-figure-glow" />
            <div className="hero-figure-core">
              <span className="hero-eye left" />
              <span className="hero-eye right" />
            </div>
            <div className="hero-figure-body" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
