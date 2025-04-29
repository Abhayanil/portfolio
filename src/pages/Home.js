import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container my-5">
        <h2>Welcome to my Portfolio</h2>
        <p className="lead">
          I'm a DevRel professional and automation enthusiast passionate about building 
          communities and creating innovative solutions.
        </p>
        <p>
          This portfolio showcases some of my recent projects and skills. Feel free to 
          explore and get in touch if you'd like to collaborate!
        </p>
      </div>
    </div>
  );
};

export default Home;