
import './index.css'
import Intro from './componentsSE/intro';
import About from './componentsSE/About';
import Project from './componentsSE/project';
import Cv from './componentsSE/Cv';
import { Link as ScrollLink, Element } from 'react-scroll';

function Svenska() {
  

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

export default Svenska
