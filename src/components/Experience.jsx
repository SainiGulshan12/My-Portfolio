import { useEffect } from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Unified Mentors",
    year: "2025 - 2025",
    icon: "bi-briefcase-fill",
    points: [
      "Developed multiple projects using HTML, CSS, JavaScript, React, and Bootstrap.",
      "Built responsive web applications like Gym Website, Restaurant App, and real-world clones.",
      "Focused on UI/UX and performance optimization.",
      "Explored AI-assisted development using tools like ChatGPT and Codex.",
    ],
  },
  {
    role: "Software Programming Trainee (IANT)",
    company: "IANT",
    year: "2022 - 2024",
    icon: "bi-mortarboard-fill",
    points: [
      "Completed Software Programming course from IANT.",
      "Learned HTML, CSS, JavaScript, C, C++, Python, PHP, MySQL.",
      "Gained knowledge in Cyber Security and IT Essentials.",
      "Worked on basic programming and real-world concepts.",
    ],
  },
  {
    role: "Self-Learning & Personal Projects",
    company: "Independent",
    year: "2022 - Present",
    icon: "bi-lightbulb-fill",
    points: [
      "Continuously improving frontend development skills.",
      "Building real-world projects using React and Bootstrap.",
      "Exploring AI tools and prompt engineering.",
      "Practicing UI/UX and responsive design.",
    ],
  },
];

export default function Experience() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section section scroll-reveal">
      <div className="container text-center">
        <span className="section-kicker">My Journey</span>
        <h2 className="section-title gradient-title">Experience</h2>
        <p className="section-text mx-auto">
          A quick snapshot of my hands-on experience and the path I&apos;ve
          taken to grow as a frontend developer.
        </p>
      </div>

      <div className="container timeline">
        {experiences.map((item, index) => (
          <div
            key={item.role}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className="timeline-dot">
              <i className={`bi ${item.icon}`} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <h3>{item.role}</h3>
                <span className="timeline-year">{item.year}</span>
              </div>
              <p className="timeline-company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
