import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Projects />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;