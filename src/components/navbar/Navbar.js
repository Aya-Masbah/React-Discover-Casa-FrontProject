import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>Discover Casablanca</h2>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                <Link to='home' activeClassName="active" className="nav-links" onClick={handleClick} smooth={true} duration={500} ><li>Home</li></Link>
                </li>
                <li className="nav-item">
                <Link to='destinations' activeClassName="active" className="nav-links" onClick={handleClick} smooth={true} duration={500} ><li>Destinations</li></Link>
                </li>
                <li className="nav-item">
                <Link to='carouselFanZone' activeClassName="active" className="nav-links" onClick={handleClick} smooth={true} duration={500} ><li>FanZones</li></Link>
                </li>
                <li className="nav-item">
                <Link to='carousel' activeClassName="active" className="nav-links" onClick={handleClick} smooth={true} duration={500} ><li>Things to Do</li></Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carouselFanZone' smooth={true} duration={500} ><li>FanZones</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Things to Do</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
