import React from 'react';
import bg from '/img/BG.jpg';
import Food from '/img/Food.png';
import ECommerce from '/img/ecommerce.png';
import './Project.css';

function Project() {
    return ( <>
      <section id='Project'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className="container project_container">
            <article className='project_item'>
                <div className="project_item_image">
                    <img src={bg} alt="" />
                </div>
                <h3>BG Calc</h3>
                <small className='text-light'> HTML, CSS3, Javascript </small>
                <div className="project_item_btn">
                    <a href="https://github.com/manicsegithub/BG_Cal" className='btn'> Github </a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={Food} alt="" />
                </div>
                <h3>FooD Court</h3>
                <small className='text-light'>React JS, RestAPI, PostMan</small>
                <div className="project_item_btn">
                    <a href="https://github.com/manicsegithub/Food_Court" className='btn'> Github </a>
                </div>
            </article>

            <article className='project_item'>
                <div className="project_item_image">
                    <img src={ECommerce} alt="" />
                </div>
                <h3>E-Commerce</h3>
                <small className='text-light'> HTML, CSS3, PHP, Mysql, Xampp </small>
                <div className="project_item_btn">
                    <a href="https://github.com/manicsegithub/e_commerce" className='btn'> Github </a>
                </div>
            </article>


        </div>
      </section>
    </> );
}

export default Project;