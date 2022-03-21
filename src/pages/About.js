import React from 'react';
import AboutBackground from '../assets/friends.png';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style ={{ backgroundImage: `url(${AboutBackground})` }}
        ></div>      
        <div className='aboutBottom'>
          <h1> ABOUT ME </h1>
          <p> I was born in Republic of Korea back in 1990s. </p>
        </div>
    </div>
  )
}

export default About
