import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h2>About Me</h2>
      <div className="row mb-4">
        <div className="col-md-8">
          <p className="lead">
            Hi, I'm Abhay P A - a Software Developer Engineer with a passion for low-code/no-code engineering, developer experience, community-building, and technical storytelling.
          </p>
          <p>
            Based in Ernakulam, Kerala, India, I've engineered internal tools at Upekkha that streamlined Accelerator operations and enhanced the startup experience. 
            At MakerGram, I lead community programs, build tech demos, deliver talks, and organize events that educate and inspire developers.
          </p>
          <p>
            I'm excited to champion Zencoder's AI-powered tools and help developers build smarter, faster, and with greater creative freedom.
          </p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p><i className="bi bi-geo-alt-fill"></i> Ernakulam, Kerala, India</p>
              <p><i className="bi bi-telephone-fill"></i> +91 8129679886</p>
              <p><i className="bi bi-envelope-fill"></i> abhaypa1925@gmail.com</p>
              <div className="d-grid gap-2">
                <a href="https://github.com/abhaypa" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a href="https://linkedin.com/in/abhay-pa" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <h3>Professional Experience</h3>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Upekkha — Remote</h5>
              <h6 className="card-subtitle mb-2 text-muted">Software Development Engineer III (Jan 2024 – Present)</h6>
              <h6 className="card-subtitle mb-2 text-muted">Software Development Engineer II (Jan 2023 – Dec 2023)</h6>
              <h6 className="card-subtitle mb-2 text-muted">Software Development Engineer I (Dec 2020 – Dec 2022)</h6>
              <ul>
                <li>Developed internal tools to help Upekkha's team scale and optimize the experience for startups in the accelerator program.</li>
                <li>Supported SaaS founders by streamlining operations and enabling program-wide automation.</li>
                <li>Contributed to scalable backend systems while collaborating closely with product and operations teams.</li>
                <li>Led tech team to build internal tools to optimize the Application process and Due-Diligence Process, saving time for the team and Startups.</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">MakerGram — Kerala, India</h5>
              <h6 className="card-subtitle mb-2 text-muted">Head of Operations (Dec 2023 – Present)</h6>
              <h6 className="card-subtitle mb-2 text-muted">Operations Team Member (Nov 2020 – Feb 2024)</h6>
              <h6 className="card-subtitle mb-2 text-muted">Coordinator, MakerChat Events (Jul 2020 – Nov 2020)</h6>
              <ul>
                <li>Led developer outreach and engagement through educational events, workshops, and technical talks focused on IoT, AI, and developer tooling.</li>
                <li>Created live demos and technical walkthroughs for community platforms, including MakerChat sessions and hackathons.</li>
                <li>Managed partnerships with sponsors and industry experts to co-develop content and foster collaborative learning.</li>
                <li>Edited and hosted podcasts, translating complex technology into accessible narratives for aspiring developers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <h3>Technical Skills</h3>
          <div className="card">
            <div className="card-body">
              <h5>Languages & Technologies</h5>
              <p>JavaScript, Python, Git</p>
              
              <h5>Tools & Platforms</h5>
              <p>n8n, Make, Zapier, Airtable, Figma, Audacity</p>
              
              <h5>Frameworks</h5>
              <p>Open Source Tools</p>
              
              <h5>Community & Communication</h5>
              <p>Technical Speaker, Podcast Producer, Event Organizer, Technical Writer</p>
              
              <h5>Soft Skills</h5>
              <p>Strategic Planning, Leadership, Teamwork, Cross-functional Collaboration</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <h3>Education & Certifications</h3>
          <div className="card mb-3">
            <div className="card-body">
              <h5>Bachelor of Technology in Computer Science Engineering</h5>
              <p>APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY, 2016 – 2020</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h5>Certifications</h5>
              <ul>
                <li>Google Cloud Platform: Core Infrastructure</li>
                <li>StartUp India Learning Program</li>
                <li>C++ Programming, MS Office Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>Projects & Community Leadership</h3>
          <div className="card mb-3">
            <div className="card-body">
              <h5>Notable Projects</h5>
              <ul>
                <li>Traffic Event Reporting Framework — Mobile crowdsourcing + Blockchain</li>
                <li>Auto Block IoT — A forensics framework for connected vehicles</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h5>Community & Leadership</h5>
              <ul>
                <li>MakerGram — Organizer: Arduino Day Kochi, TinyML Hackathon, Raspberry Pi Jam</li>
                <li>Public speaker, podcast contributor, and technical content mentor</li>
                <li>eDC IIT Delhi — Campus Ambassador</li>
                <li>FestFlick — Content Writer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;