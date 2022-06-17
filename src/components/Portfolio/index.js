import React , {useState, useEffect} from 'react'
import AnimatedLetrers from '../AnimatedLetters'
import Louder from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import projectsInfo from '../../data/project.json'

const Portfolio = () => {
   const [letterClass, setLetterClass] = useState('text-animate');
   
  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer)
    }
   });


   const renderPortfolio = (projects) => {
      return (
          <div className="images-container">
            {
                projects.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                          <img 
                          src={port.mobileVersionImage}
                          className="portfolio-image"
                          alt="portfolio"/>
                          <div className='content'>
                              <p className="title">{port.title}</p>
                              <h4 className='description'>{port.description}</h4>
                              <button className="btn" onClick={() => window.open(port.url)}>View</button>
                          </div>     
                        </div>
                    )
                })
            }
          </div>
      )
   }
   return (
       <>
           <div className="container portfolio-page">
              <span className="tags top-tags">&lt;body&gt;</span>
              <h1 className="page-title">
                <AnimatedLetrers
                 letterClass={letterClass}
                 strArray={['P', 'o', 'r', 't', 'f', ' o', 'l', 'i','o']}
                  idx={17}
                 />
              </h1>
              <div>{renderPortfolio(projectsInfo.projects)}</div>
              <div className="see-more">
              <span class="arrow">
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
              see more projects on my github 
              <a
                href="https://github.com/abkardev"
                target="_blank"
                rel="noreferrer"
              >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a></div>
              <span className="tags bottom-tags">
                  &lt;/body&gt;
                  <br />
                  <span className="bottom-tag-html">&lt;/html&gt;</span>
              </span> 
            </div>
           <Louder type="ball-grid-pulse"/>  
       </>
   )

}

export default Portfolio;