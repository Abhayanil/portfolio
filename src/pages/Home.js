import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container my-5">
        <h2>Welcome to my Portfolio</h2>
        <p className="lead">
          I'm a Software Developer Engineer with a strong foundation in low-code, no-code engineering and a passion for 
          developer experience, community-building, and technical storytelling.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><i className="bi bi-tools text-primary"></i> Engineering Excellence</h3>
                <p className="card-text">
                  At Upekkha, I engineered internal tools that streamlined Accelerator operations and enhanced the startup experience. 
                  Led tech team to build tools that optimized the Application process and Due-Diligence Process, saving time for the team and Startups.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><i className="bi bi-people-fill text-primary"></i> Community Leadership</h3>
                <p className="card-text">
                  At MakerGram, I lead community programs, build tech demos, deliver talks, and organize events that educate and inspire developers.
                  I've organized Arduino Day Kochi, TinyML Hackathon, and Raspberry Pi Jam events.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><i className="bi bi-gear-fill text-primary"></i> Technical Expertise</h3>
                <p className="card-text">
                  I'm skilled in tools like n8n, Zapier, and Figma, and I actively experiment with AI-driven workflows. 
                  As a technical speaker and podcast editor, I simplify complex tech into engaging content.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p>
            I'm excited to champion Zencoder's AI-powered tools and help developers build smarter, faster, and with greater creative freedom.
            This portfolio showcases some of my recent projects and skills. Feel free to explore and get in touch if you'd like to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;