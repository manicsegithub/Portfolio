import React from 'react';
import me from '/img/me.jpg';
import me1 from '/img/me.jpg';
import me2 from '/img/me.jpg';
import './Project.css';

function Project() {
    return ( <>
      <section id='Projects'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="container project_container">
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={me} alt="" />
                </div>
                <h3>BG Calc</h3>
                <small className='text-light'> Javascript </small>
                <div className="project_item_btn">
                    <a href="" className='btn'> Github </a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={me1} alt="" />
                </div>
                <h3>BG Calc</h3>
                <small className='text-light'> Javascript </small>
                <div className="project_item_btn">
                    <a href="" className='btn'> Github </a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={me2} alt="" />
                </div>
                <h3>BG Calc</h3>
                <small className='text-light'> Javascript </small>
                <div className="project_item_btn">
                    <a href="" className='btn'> Github </a>
                </div>
            </article>


        </div>
      </section>
    </> );
}

export default Project;