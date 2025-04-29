import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Traffic Event Reporting Framework",
    description: "A mobile crowdsourcing platform integrated with blockchain technology for secure and transparent traffic event reporting.",
    technologies: ["Mobile Development", "Blockchain", "Crowdsourcing"],
    link: "https://github.com/abhaypa"
  },
  {
    id: 2,
    title: "Auto Block IoT",
    description: "A forensics framework for connected vehicles that enhances security and provides data analysis for automotive IoT systems.",
    technologies: ["IoT", "Security", "Forensics", "Automotive"],
    link: "https://github.com/abhaypa"
  },
  {
    id: 3,
    title: "MakerGram Hackathon Portal",
    description: "Community portal with event listings, submissions, and AI-generated documentation workflows for tech hackathons.",
    technologies: ["React", "Node.js", "AI Integration"],
    link: "https://makergram.com/hackathon"
  },
  {
    id: 4,
    title: "Upekkha Internal Tools",
    description: "Suite of internal tools that streamlined the application and due-diligence processes for startup accelerator programs.",
    technologies: ["n8n", "Zapier", "Airtable", "Automation"],
    link: "https://upekkha.io"
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <section className="container my-5" id="projects">
      <h2 className="mb-4">Projects & Work</h2>
      <div className="row">
        {projects.map((project) => (
          <div 
            className="col-md-6 mb-4" 
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={`card h-100 transition ${hoveredId === project.id ? 'shadow-lg' : 'shadow-sm'}`}>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-light text-dark me-2 mb-1">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;