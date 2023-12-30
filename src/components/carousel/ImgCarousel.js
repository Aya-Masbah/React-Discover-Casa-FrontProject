import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function ImgCarousel({bestThingsToDo}) {
  
    return (
      <div name='carousel' className='container'>
        <h1>Best Things to Do in Casablanca</h1>
        <h3>Explore the exciting activities and attractions in Casablanca</h3>
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
          {bestThingsToDo.map(bestThingToDo =>(
            <div key={bestThingToDo.id}>
                <h2>{bestThingToDo.title}</h2>
                <div className='bestThingToDoBox bg-dark' >
                    <div className='container'>
                        <img className='image' src={bestThingToDo.image} alt="bestThingToDoImage" style={{ height: '90vh', objectFit: 'cover' }} />
                        <div className='overlay'>
                            <div className='text'>{bestThingToDo.desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </Carousel>
      </div>
    );
  }
  
export default ImgCarousel;