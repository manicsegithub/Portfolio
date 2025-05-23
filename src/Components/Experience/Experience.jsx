import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

function Experience() {
    return ( 
    <>
    <section id='experience'>
        {/* <h5>The Skills I have</h5> */}
        <h2> My Skills Set </h2>

        <div className="container experience_container">
            <div className="experience_frontend">
                <h3>FrontEnd Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'> Experienced </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'> Experienced </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'> Intermediate </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>Bootstrap_5</h4>
                            <small className='text-light'> Intermediate </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>React Js</h4>
                            <small className='text-light'> Intermediate </small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience_frontend">
                <h3>BackEnd Development</h3>
                <div className="experience_content">
                <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>Java</h4>
                            <small className='text-light'> Intermediate </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>Java SpringBoot</h4>
                            <small className='text-light'> Beginner </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>Node.JS</h4>
                            <small className='text-light'> Beginner </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>MYSQL</h4>
                            <small className='text-light'> Intermediate </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>Express.JS</h4>
                            <small className='text-light'> Beginner </small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <BsFillPatchCheckFill  className='experience_icon'/>
                        <div>
                            <h4>PHP</h4>
                            <small className='text-light'> Beginner </small>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
    </> 
    );
}

export default Experience;