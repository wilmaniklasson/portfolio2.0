import React, { useState } from 'react';
import '../style/intro.css';
import Navbar from './Navbar'; 
import avatarImg from '../assets/avatar.svg';
import githubImg from '../assets/Github.svg';
import linkedinImg from '../assets/LinkedIn.svg';

const Intro = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="intro">
        <section className="container">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> {/* Skicka in tillstånd och funktion som props */}
          <div className="main-content">
            <div className="text-content">
              <h1 className="greeting" id='animated-text'> Hello! <br /> my name is</h1>
              <h2 className="name" id='animate-me'>Wilma</h2>
            </div>
            <div className="profile-pic">
              <img src={avatarImg} alt="Wilma" />
            </div>
            <div className="speech-bubble">
              <div className="social-link">
                <a href="https://github.com/wilmaniklasson" target="_blank" rel="noopener noreferrer">
                  <img src={githubImg} alt="github knapp" id="github" />
                </a>
                <a href="https://www.linkedin.com/in/wilma-niklasson-5b3518192/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinImg} alt="LinkedIn knapp" id="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="description-section">
          <p className="description">I am driven, solution-oriented, and a skilled facilitator who fosters collaboration and collective problem-solving within the team.</p>
        </section>
      </section>
    </>
  );
}

export default Intro;
