import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "BCCI Clone",
    description:
      "A modern cricket board website clone with responsive sections, match highlights, and clean UI components.",
    tech: ["React", "Bootstrap"],
    category: "React",
    image: "/assets/bcci.png",
    live: "https://bcci-tv.netlify.app/",
    code: "https://github.com/SainiGulshan12/BCCI-Clone-app",
  },
  {
    title: "Hotel & Restaurant Website",
    description:
      "Elegant hospitality website with hero booking CTA, menu showcases, and immersive gallery layout.",
    tech: ["React", "Bootstrap"],
    category: "React",
    image: "/assets/Restro.png",
    live: "https://omg-restro.netlify.app/",
    code: "https://github.com/SainiGulshan12/restaurent-webapp",
  },
  {
    title: "Blinkit Clone",
    description:
      "Grocery delivery UI clone with category grid, offers, and fast checkout experience.",
    tech: ["React", "Bootstrap"],
    category: "React",
    image: "/assets/blink.png",
    live: "https://blinkit-grocery-app.netlify.app/",
    code: "https://github.com/SainiGulshan12/Blinkit-Clone",
  },
  {
    title: "Amazon Clone",
    description:
      "Static Amazon homepage clone with product grid, promo banners, and responsive layout.",
    tech: ["HTML", "CSS"],
    category: "HTML/CSS",
    image: "/assets/amazon.png",
    live: "https://amaz-clo.netlify.app/",
    code: "#",
  },
  {
    title: "Scientific Calculator",
    description:
      "A clean scientific calculator UI with essential operations, keyboard-friendly layout, and dark theme styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
    image: "/assets/calculator.png",
    live: "https://cozy-brigadeiros-08200d.netlify.app/",
    code: "https://github.com/SainiGulshan12/AI-calculator",
  },
];

const tabs = ["All", "React + Bootstrap", "JavaScript", "HTML/CSS"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = useMemo(() => {
    if (activeTab === "All") return projects;
    if (activeTab === "React + Bootstrap") {
      return projects.filter(
        (project) =>
          project.tech.includes("React") || project.tech.includes("Bootstrap"),
      );
    }
    if (activeTab === "JavaScript") {
      return projects.filter((project) => project.tech.includes("JavaScript"));
    }
    if (activeTab === "HTML/CSS") {
      return projects.filter(
        (project) =>
          project.tech.includes("HTML") || project.tech.includes("CSS"),
      );
    }
    return projects;
  }, [activeTab]);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="projects" className="projects-section section scroll-reveal">
      <div className="container text-center">
        <span className="section-kicker">Some of My Recent Work</span>
        <h2 className="section-title gradient-title">My Projects</h2>
        <p className="section-text mx-auto">
          Selected projects that showcase my frontend skills, UI thinking, and
          clean responsive builds.
        </p>

        <div className="projects-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`projects-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="container projects-grid">
        <div className="row g-4">
          {filtered.map((project) => (
            <div key={project.title} className="col-12 col-sm-6 col-lg-4">
              <div className="project-card">
                <div className="project-thumb">
                  <img src={project.image} alt={project.title} />
                  <div className="project-thumb-overlay">
                    <a
                      className="project-btn"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right" />
                      Live Demo
                    </a>
                    <a
                      className="project-btn ghost"
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github" />
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
