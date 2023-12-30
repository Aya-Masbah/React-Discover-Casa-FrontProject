import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FanzoneCarouselStyles.css';

function FanzoneCarousel({ fanzones }) {
  return (
    <div className='container'>
      <h1>Best Things to Do in Casablanca</h1>
      <h3>Explore the exciting activities and attractions in Casablanca</h3>

      <Carousel
        className='carousel'
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        {fanzones.map((fanzone) => (
          <Card key={fanzone.id} className='cardBox'>
            <img
              className='image'
              src={fanzone.image}
              alt='fanzoneImage'
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>{fanzone.title}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {fanzone.desc}
              </Typography>
              <Typography variant="body2" color="textSecondary" className='address'>
                <LocationOnIcon /> {fanzone.address}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

export default FanzoneCarousel;
