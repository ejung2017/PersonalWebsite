import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/donutbanner.png'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style ={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer' >
                <h1>Eunah Jung</h1>
                <p>Undergraduate at HKU majoring in Chemistry and minoring in Mathematics</p>
                <Link to="/portfolio">
                    <button> Explore! </button>
                </Link>
            </div>
        </div>
    );
}

export default Home
