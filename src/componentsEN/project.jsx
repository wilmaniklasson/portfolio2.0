import React, { useState } from 'react';
import '../style/project.css';
import Note from '../assets/Note.svg';
import Pokemon from '../assets/Pokemon.svg';
import Hangman from '../assets/Hangman.svg';
import Bättrewebb from '../assets/Bättrewebb.svg';
import DivingDelights from '../assets/DivingDelights.svg';



const Project = () => {
    return (
        <>
            <section className='Projects'>
                <h2>Some of My Projects</h2>
                <div className='project-container'>

                <div className='project'>
                    <div className='project-image'>
                        <a href="https://wilmaniklasson.github.io/Notes/" target="_blank" rel="noopener noreferrer">
                            <img src={DivingDelights} alt="En bild på webbappen Notes" />
                        </a>
                    </div>
                    <h3>Diving Delights</h3>
                    <p>An online shop using React, React Router (HashRouter), Zustand for state management, and Firestore for data storage.</p>
                    <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Webbshop-divingdelights" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Webbshop-divingdelights/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>

                    </div>
                </div>


                <div className='project'>
                    <div className='project-image'>
                        <a href="https://wilmaniklasson.github.io/Notes/" target="_blank" rel="noopener noreferrer">
                            <img src={Note} alt="En bild på webbappen Notes" />
                        </a>
                    </div>
                    <h3>Notes</h3>
                    <p>Create and delete notes. Switch between dark and light mode. Search for notes with the search field. Notes are stored locally in the browser.</p>
                    <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Notes" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Notes/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>

                    </div>
                </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/Poke_manager/" target="_blank" rel="noopener noreferrer">
                        <img src={Pokemon} alt="En bild på webbappen Pokémon team manager" />
                        </a>
                    
                        </div>
                    
                        <h3>Pokémon team manager</h3>
                        <p>Search for Pokémon from an external API. Add and remove Pokémon to your team and move to the reserve list.</p>

                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Poke_manager" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Poke_manager/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>

                    </div>
                    </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/Hangman/" target="_blank" rel="noopener noreferrer">
                    <img src={Hangman} alt="En bild på webbappen Hangman" />
                        </a>
                    
                        </div>
                    
                        <h3>Hangman</h3>
                        <p>A group project that combines JavaScript, HTML, and CSS. A classic Hangman game that saves the player's results locally.</p>
                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/Hangman" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/Hangman/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>
                        </div>
                    </div>
                    <div className='project'>
                    <div className='project-image'>
                    <a href="https://wilmaniklasson.github.io/CreativeCodeNest/" target="_blank" rel="noopener noreferrer">
                    <img src={Bättrewebb} alt="En bild på webbappen Bättre webb" />
                    </a>
                        
                        </div>
                        <h3>Bättre Webb</h3>
                        <p>A website for the 'Bättre webb' conference, developed with HTML and CSS as part of the first course in my education.</p>
                        <div className='button-container'>
                        <a href="https://github.com/wilmaniklasson/CreativeCodeNest" target="_blank" rel="noopener noreferrer" className='show-more'>Repo</a>
                        <a href="https://wilmaniklasson.github.io/CreativeCodeNest/" target="_blank" rel="noopener noreferrer" className='show-more'>Demo</a>
                        </div>
                       
                    </div>
                </div>
               

            </section>
        </>
    );
}

export default Project;