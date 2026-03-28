const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          <div className="col-sm-6 col-lg-4">
            <div className="footer-brand">
              <h3>Gulshan</h3>
              <p>
                Frontend Developer building modern web experiences with React
                and AI tools.
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-12 col-lg-4">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-socials justify-content-sm-center justify-content-lg-start">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href="mailto:gulshansaini0125@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Gulshan%2C%20I%20want%20to%20connect%20with%20you."
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />
        <p className="footer-copy">© 2026 Gulshan. All rights reserved.</p>
      </div>

      <a className="back-to-top" href="#home" aria-label="Back to top">
        <i className="bi bi-arrow-up" />
      </a>
    </footer>
  );
}
