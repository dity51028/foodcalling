import React from 'react';
import Food from '../assets/image.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{backgroundImage: `url(${Food})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                 mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default About