import React from 'react';
import myImage from '/img/me.jpg';
import { GiGraduateCap} from "react-icons/gi";
import { BsTelephoneForward } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import './About.css';


function About() {
    return ( 
    <>
       <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>

         <div className="container about_container">
            <div className="about_me">
                <div className="about_me_image">
                    <img src={myImage} alt="Mani" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <GiGraduateCap className='about_icon'/>
                        <h5>Degree</h5>
                        <small>
                            BE.Computer Science <br />
                            <i>SSMIET Dindigul</i>
                        </small>
                    </article>

                    <article className="about_card">
                        <TfiWorld  className='about_icon'/>
                        <h5>Location</h5>
                        <small>
                           Address...
                        </small>
                    </article>

                    <article className="about_card">
                        <BsTelephoneForward  className='about_icon'/>
                        <h5>Contact</h5>
                        <small>
                          <ul>
                            <li>Phone: </li>
                            <li>EMail: </li>
                          </ul>
                        </small>
                    </article>

                </div>
                <p>
                    Hi, I'm Manikandan B, a Skilled full-stack developer.
                    Hi, I'm Manikandan B, a Skilled full-stack developer.
                    Hi, I'm Manikandan B, a Skilled full-stack developer.
                </p>
            </div>

         </div>
       </section>
    </>
     );
}

export default About;