import React, { useEffect, useState } from 'react'
import projectsInfo from '../../data/project.json'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer)
    }
   });

   const renderProjects = (projects) => {
     return (
        <div className="projects-container">
        {projects.map((project , id) => {
           return(
            <div className="project-box" key={id}>
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-images">
               <img className='desktop-version-image' 
                 src={project.desktopVersionImage}
                 alt="project-desktop"/>
               <img className='mobile-version-image' 
                 src={project.mobileVersionImage}
                 alt="project-mobile"/>
                </div>
             </div>
           )    
        })}
    </div>
     )
    

   }

  return (
    <>
      <div className="container projects-page">
        <div className="headline">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P ', 'r ', 'o ', 'j ', 'e ', 'c ', 't ', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div>{renderProjects(projectsInfo.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects