import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import Video from '../../assets/casaVideo.mp4'

const Hero = ({ placeSelect, suggestionsChange }) => {
    const autocompleteStyle = {
        form: {
          display: 'flex',
          backgroundColor: '#ffffffcc',
          color: '#000',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #ccc',
          padding: '4px',
          borderRadius: '8px',
          maxWidth: '700px',
          width: '100%',
          margin: '0 auto',
        },
        input: {
          border: 'transparent',
          backgroundColor: 'transparent',
          width: '400px',
          fontSize: '1.2rem',
          fontFamily: "'Poppins', sans-serif",
        },
        inputFocus: {
          outline: 'none',
        },
      };
    return (
        <div id='home' className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Reveal Casa's Charms</h1>
                <div id="autocomplete" class="form">
                <GeoapifyContext apiKey="ee45311d7c1647c791d57f69e57bf328">
                   <GeoapifyGeocoderAutocomplete
                        placeholder="Search Destinations"
                        placeSelect={placeSelect}
                        suggestionsChange={suggestionsChange}
                        config={{
                            autocompleteStyle: autocompleteStyle.form,
                            inputStyle: autocompleteStyle.input,
                            inputFocusStyle: autocompleteStyle.inputFocus,
                          }}
                        />
                </GeoapifyContext>
                <div>
                    <button><AiOutlineSearch className='icon'/></button>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Hero
