import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaGoodreads } from "react-icons/fa";
// import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        {/* <a href="#home" className='footer__title'>Saiyam</a> */}
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/saiyam31098/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/saiyam31098/" target="_blank"><BsGithub/></a>
          <a href="https://goodreads.com/saiyxm/" target="_blank"><FaGoodreads/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Saiyam Jain. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer