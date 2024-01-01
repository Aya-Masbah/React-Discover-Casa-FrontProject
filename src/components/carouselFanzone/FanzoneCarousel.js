import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FanzoneCarouselStyles.css';
import previousArrow from '../../assets/previous.png';
import nextArrow from '../../assets/next.png';
function FanzoneCarousel({ fanzones }) {
  return (
    <div id='carouselFanZone' className='container'>
      <h1>Fanzones</h1>
      <h3>Epic Fan Zones to Experience the World Cup Like Never Before</h3>

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
        {fanzones.map((fanzone) => (
          <Card key={fanzone.id} className='cardBox'>
            <img
              className='image'
              src={fanzone.image}
              alt='fanzoneImage'
            />
            <CardContent>
              <h2>{fanzone.title}</h2>
              <Typography variant="body2" color="textSecondary" component="p">
                {fanzone.desc}
              </Typography>
              <Typography variant="body2" color="textSecondary" className='address'>
                <LocationOnIcon /> {fanzone.address}
              </Typography>
              <br></br>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

export default FanzoneCarousel;
