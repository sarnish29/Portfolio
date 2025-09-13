import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub } from 'react-icons/fa';
import './ProjectStyles.css';

const Project = () => {
  useEffect(() => {
    // Add body class so Footer CSS can target body.projects-page .footer
    document.body.classList.add('projects-page');
    return () => {
      document.body.classList.remove('projects-page');
    };
  }, []);

  const projects = [
    {
      title: "Agroapp",
      duration: "Jan 2023 - Apr 2023",
      role: "Frontend Developer",
      technologies: ["HTML", "CSS", "EJS", "Javascript"],
      teamSize: 2,
      description: "Mobile application designed to empower individuals in the agricultural sector by providing information on government schemes, farming tips, notifications, and a directory of district agriculture officers to enhance farming productivity.",
      githubLink: "https://github.com/sarnish29/Agroapp"
    },
    {
      title: "Rewards Points Redemption Automation",
      duration: "Aug 2024 - Nov 2024",
      role: "Frontend Developer",
      technologies: ["HTML", "CSS", "Javascript"],
      teamSize: 1,
      description: "Developed a web-based system to automate reward point tracking, redemptions, and user notifications, improving accuracy, user satisfaction, and operational efficiency while minimizing manual workload.",
      githubLink: "https://github.com/sarnish29/Reward-Points-Automation"
    },
    {
      title: "Smart Hotel Management With AI",
      duration: "Jan 2025 - Apr 2025",
      role: "Frontend Developer",
      technologies: ["HTML", "CSS", "Django", "SQLite"],
      teamSize: 2,
      description: "Designed and implemented a responsive frontend using React to deliver real-time guest interaction, personalized experiences, and AI-powered insights in hotel automation.",
      githubLink: "https://github.com/sarnish29/Smart-Hotel-AI-System"
    }
  ];

  const handleCardClick = (liveLink) => {
    if (liveLink) {
      window.open(liveLink, "_blank");
    }
  };

  return (
    <div className="projects-page">
      <Navbar />
      <h2 className="projects-title"><span className="bounce1">My Projects</span></h2>

      {/* Use projects-container to match CSS */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project.liveLink)}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-duration">{project.duration}</span>
            </div>
            <div className="project-details">
              <div className="project-meta">
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <p>
                  <strong>Team Size:</strong> {project.teamSize}
                </p>
              </div>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Project;
