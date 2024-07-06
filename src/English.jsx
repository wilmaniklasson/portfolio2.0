import React from 'react'
import Intro from './componentsEN/intro'
import About from './componentsEN/About'
import Project from './componentsEN/project'
import Cv from './componentsEN/Cv'
import { Element } from 'react-scroll'


function English() {
  
  return (
    <>
      <div>
        <Element name="Intro">
          <Intro />
        </Element>
      </div>
      <div>
        <Element name="About">
          <About />
        </Element>
      </div>
      
      <div>
        <Element name="Project">
          <Project />
        </Element>
      </div>

      <div>
        <Element name="Cv">
          <Cv />
        </Element>
      </div>
    </>
  )
}




export default English