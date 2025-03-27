import React from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import './Contact.css';

function Contact() {
    return ( <>
      <section id='contact'>
        <h5>Get in Touch </h5>
        <h2>Contact Me </h2>

        <div className='container contact_container'>
            <div className="contact_options">
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_option_icon'/>
                    <h4>Email</h4>
                    <h5>b.manikandanmk1234</h5>
                    <a href="">Send Message </a>
                </article>
                <article className='contact_option'>
                    <BsGithub className='contact_option_icon'/>
                    <h4>Github</h4>
                    <h5>github link</h5>
                    <a href="github link">Open</a>
                </article>
            </div>
            <form>
                <input type="text" name='name' placeholder='Your Name' required/>
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" id="message" rows="7" placeholder='Your Message'></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
      </section>
    </> );
}

export default Contact;