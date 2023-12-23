import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/casaVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Reveal Casa's Charms</h1>
                <button className='btn-cta'>Daylight Casa</button>
            </div>
        </div>
    )
}

export default Hero
