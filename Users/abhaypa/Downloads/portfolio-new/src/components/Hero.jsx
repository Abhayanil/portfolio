import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <header className="bg-primary text-white text-center py-5">
    <div className="container">
      <h1 className="display-4">Hi, I'm Abhay P A 👋</h1>
      <p className="lead">Software Developer Engineer • Low-Code Specialist • Community Builder</p>
      <p className="mt-3">
        <Link to="/about" className="btn btn-light btn-lg me-2">Learn More</Link>
        <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
      </p>
    </div>
  </header>
);

export default Hero;