import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Zencoder Demo",
    description: "A React + Vite-based interactive portfolio using Zencoder AI to accelerate dev workflows.",
    link: "https://github.com/abhaypa/interactive-portfolio-zencoder-demo"
  },
  {
    id: 2,
    title: "MakerGram Hackathon Portal",
    description: "Community portal with event listings, submissions, and AI-generated documentation workflows.",
    link: "https://makergram.com/hackathon"
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <section className="container my-5" id="projects">
      <h2>Projects</h2>
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