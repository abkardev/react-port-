import {useState} from 'react';
import './index.scss'
import LogoS from '../../assets/images/logoa1a.png'
import LogoSubtitle from '../../assets/images/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
 

} from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faBars, faSuitcase, faHomeAlt} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {

  const [isShownMenu, setIsShownMenu] = useState(false);
 

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={isShownMenu? 'nav show':'nav'}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHomeAlt} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        {/* <NavLink activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink> */}
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/abkarmallah/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abkardev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/abkarcode"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <span id="mobile-link" onClick={ (event) => setIsShownMenu(!isShownMenu)}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
    </div>
  )
}

export default Sidebar