import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-start">
            <p className="mb-0">© {currentYear} Abhay. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://github.com/abhaypa" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-github"></i> GitHub
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;