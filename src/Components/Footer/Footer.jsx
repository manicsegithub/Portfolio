import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
import './Footer.css';

function Footer() {
    return ( <>
       <footer>
        <a href="#home" className='footer_logo'> Mani </a>
        <ul className='links'>
            <li><a href="#home"> Home </a></li>
            <li><a href="#about"> About </a></li>
            <li><a href="#experience"> Experience </a></li>
            <li><a href="#Project"> Projects </a></li>
        </ul>

        <div className='footer_social'>
          <a href=""><BsLinkedin /></a>
          <a href=""><BsGithub /></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Manikandan. All Right Reversed.</small>
        </div>

       </footer>
    </> );
}

export default Footer;
   
