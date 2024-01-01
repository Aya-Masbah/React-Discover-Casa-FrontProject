import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Casa City</h3>
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
            <div className="footer-content">
            <p>© 2024 Your Website. All Rights Reserved.</p>
            <p>Created by Aya Masbah and Oumaima Khafi</p>
      </div>
        </div>
    )
}

export default Footer
