import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Discover Casablanca.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                        <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                        <Link to='carouselFanZone' smooth={true} duration={500} ><li>FanZones</li></Link>
                        <Link to='carousel' smooth={true} duration={500} ><li>Things to Do</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
