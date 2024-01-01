import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import previousArrow from '../../assets/previous.png';
import nextArrow from '../../assets/next.png';

function ImgCarousel({bestThingsToDo}) {
  console.log('bestThingsToDo:', bestThingsToDo);
  console.log('bestThingsToDo length:', bestThingsToDo.length);
  const validThingsToDo = bestThingsToDo.filter((item) => item.id);
    return (
      <div name='carousel' className='container'>
      <h1>Best Things to Do in Casablanca</h1>
      <h3>Explore the exciting activities and attractions in Casablanca</h3>
      <Carousel
        className='carousel'
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button onClick={clickHandler} className="arrow-button prev-button">
              <img
                style={{ height: "50px", width: "50px" }}
                src={previousArrow}
                alt="Previous"
              />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button onClick={clickHandler} className="arrow-button next-button">
              <img
                style={{ height: "50px", width: "50px" }}
                src={nextArrow}
                alt="Next"
              />
            </button>
          )
        }
      >
          {validThingsToDo.map((bestThingToDo) => (
          <div key={bestThingToDo.id}>
            <h2>{bestThingToDo.title}</h2>
            <div className='bestThingToDoBox bg-dark'>
              <div className='container'>
                <img
                  className='image'
                  src={bestThingToDo.image}
                  alt='bestThingToDoImage'
                  style={{ height: '90vh', objectFit: 'cover' }}
                />
                <div className='overlay'>
                  <div className='text'>{bestThingToDo.desc}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br></br>
        </Carousel>
        
      </div>
    );
  }
  
export default ImgCarousel;