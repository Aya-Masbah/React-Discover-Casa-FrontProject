import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import Video from '../../assets/casaVideo.mp4'

const Hero = ({ placeSelect, suggestionsChange }) => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Reveal Casa's Charms</h1>
                <GeoapifyContext apiKey="ee45311d7c1647c791d57f69e57bf328">
                   <GeoapifyGeocoderAutocomplete
                        placeholder="Enter address here"
                        placeSelect={placeSelect}
                        suggestionsChange={suggestionsChange}
                        />
                </GeoapifyContext>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
                
            </div>
        </div>
    )
};

export default Hero
