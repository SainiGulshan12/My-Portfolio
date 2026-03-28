import { useEffect, useMemo, useState } from "react";

const reactIcon = (
  <svg className="react-svg" viewBox="0 0 841 595" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
    <circle cx="420.5" cy="296.5" r="40" fill="currentColor" />
    <ellipse cx="420.5" cy="296.5" rx="190" ry="75" stroke="currentColor" strokeWidth="28" />
    <ellipse cx="420.5" cy="296.5" rx="190" ry="75" transform="rotate(60 420.5 296.5)" stroke="currentColor" strokeWidth="28"/>
    <ellipse cx="420.5" cy="296.5" rx="190" ry="75" transform="rotate(120 420.5 296.5)" stroke="currentColor" strokeWidth="28" />
  </svg>
);

const chatgpt = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-openai" viewBox="0 0 16 16">
  <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z"/>
</svg>
);

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "bi-filetype-html", color: "#ff7a18", level: 95 },
      { name: "CSS", icon: "bi-filetype-css", color: "#4dabf7", level: 90 },
      { name: "JavaScript", icon: "bi-filetype-js", color: "#ffd43b", level: 80,},
      { name: "React", icon: reactIcon, color: "#5edfff", level: 75 },
      { name: "Bootstrap", icon: "bi-bootstrap", color: "#a370f7", level: 85 },
    ],
  },
  {
    category: "AI Tools & Tech",
    items: [
      { name: "Prompt Engineering", icon: "bi-lightning-charge", color: "#ffb26b", level: 75,},
      { name: "Codex", icon: "bi-code-slash", color: "#ff7a18", level: 78 },
      { name: "VS Code", icon: "bi-vimeo", color: "#3ea6ff", level: 92 },
      { name: "Chatgpt", icon: chatgpt, color: "#ffffff", level: 95 },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "Git & GitHub", icon: "bi-github", color: "#ffffff", level: 75 },
      { name: "Responsive Design", icon: "bi-phone", color: "#5eead4", level: 85, },
      { name: "UI/UX Design", icon: "bi-vector-pen", color: "#ff9a3c", level: 70 },
      { name: "Canva", icon: "bi-image-alt", color: "#35c5f0", level: 82 },
    ],
  },
];

const tabs = ["All", "Frontend", "AI Tools & Tech", "Other Skills"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = useMemo(() => {
    if (activeTab === "All") return skillsData;
    return skillsData.filter((group) => group.category === activeTab);
  }, [activeTab]);

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
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
    <section id="skills" className="skills-section section scroll-reveal">
      <div className="container text-center">
        <span className="section-kicker">Technologies I Work With</span>
        <h2 className="section-title gradient-title">My Skills</h2>
        <p className="section-text mx-auto">
          A focused toolkit for building fast, responsive, and modern web
          experiences with clean UI and smart automation.
        </p>

        <div className="skills-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`skills-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {filtered.map((group) => (
          <div key={group.category} className="skills-group">
            <h3 className="skills-group-title">{group.category}</h3>
            <div className="row g-4 justify-content-center justify-content-sm-start">
              {group.items.map((skill) => (
                <div key={skill.name} className="col-10 col-sm-6 col-lg-4">
                  <div
                    className="skill-card"
                    title={skill.name}
                    style={{ "--accent-color": skill.color }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">
                        {typeof skill.icon === "string" ? (
                          <i className={`bi ${skill.icon}`} />
                        ) : (
                          skill.icon
                        )}
                      </span>
                      <div>
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <span
                        className="skill-progress-bar"
                        style={{ "--progress": `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
