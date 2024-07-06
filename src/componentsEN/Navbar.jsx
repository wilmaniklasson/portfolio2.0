import React, { useState } from 'react';
import '../style/intro.css';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} id="mobile-menu" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'rotate-forward' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'fade-out' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'rotate-backward' : ''}`}></span>
      </div>
      <nav className={`navigation-buttons ${isMenuOpen ? 'open' : ''}`}>

      <ScrollLink className="button" id="about" to="About" smooth={true} duration={500}>
            ABOTE ME
        </ScrollLink>
          <ScrollLink className="button" id="projects" to="Project" smooth={true} duration={500}>
            PROJECTS
          </ScrollLink>
          <ScrollLink className="button" id="cv" to="Cv" smooth={true} duration={500}>
            CV
          </ScrollLink>
          <NavLink className="button" id='english' to="/">SVENSKA</NavLink>
        
      </nav>
    </div>
  );
}

export default Navbar;
