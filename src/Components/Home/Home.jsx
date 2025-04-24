import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import { BsGithub } from "react-icons/bs";
//import { BsMedium } from "react-icons/bs";

import ME from '/img/Mani1.png';
import './Home.css';

function Home(){
    return<>
    <header id="home">
        <div className="container home_container">
            <h5>Hello, I'm</h5>
            <h1>MANIKANDAN_B</h1>
            <h5 className="text-light">Full Stack Software Engineer</h5>
            <div className="cta">
                <a href="/file/Manikandan B 1.1 - Copy.pdf" download className="btn">
                    Download CV
                </a>
                <a href="#contact" className="btn btn-primary">
                    Contact Me
                </a>
            </div>

            <div className="home_social">
                <a href="">
                    <BsLinkedin />
                </a>
                <a href="">
                    <BsGithub />
                </a>
            </div>

            <div className="me">
                <img src={ME} alt="Mani"/>
            </div>

            <a href="/contact" className="scroll_down">
              Scroll Down
            </a>
        </div>
    </header>
    </>
}

export default Home;