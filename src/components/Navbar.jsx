import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavClick = () => setOpen(false);

  return (
    <nav className={`navbar-glass ${open ? "is-open" : ""}`}>
      <div className="container nav-inner d-flex align-items-center">
        <a className="logo" href="#home" onClick={handleNavClick}>
          <span className="logo-mark">
            <span className="logo-ring" />
            G
          </span>
          <span className="logo-text">Gulshan</span>
        </a>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-links d-flex align-items-center ${open ? "show" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={handleNavClick}>
            Reach Out
          </a>
        </div>
      </div>
    </nav>
  );
}
