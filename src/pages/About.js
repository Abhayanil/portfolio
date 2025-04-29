import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-8">
          <p className="lead">
            Hi, I'm Abhay - a Developer Relations professional with a passion for automation and community building.
          </p>
          <p>
            With experience in both technical and community-focused roles, I enjoy bridging the gap between 
            developers and products. I'm passionate about creating tools and resources that make developers' 
            lives easier and more productive.
          </p>
          <h4>Skills</h4>
          <ul>
            <li>Developer Relations & Community Management</li>
            <li>Automation & Workflow Optimization</li>
            <li>Frontend Development (React, JavaScript)</li>
            <li>Technical Content Creation</li>
            <li>Public Speaking & Workshop Facilitation</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Connect with me</h5>
              <div className="d-grid gap-2">
                <a href="https://github.com/abhaypa" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/" className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;