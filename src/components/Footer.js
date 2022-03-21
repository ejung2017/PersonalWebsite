import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <InstagramIcon />
            <Link to = "https://www.instagram.com/jungeunah_/"></Link>
        <LinkedInIcon />
      </div>
        <p> &copy; 2022 eunahjung.io </p>
    </div>
  )
}

export default Footer
