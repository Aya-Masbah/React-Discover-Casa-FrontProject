import React, { useState, useEffect } from 'react';
import ImgCarousel from './components/carousel/ImgCarousel';
import FanzoneCarousel from './components/carouselFanzone/FanzoneCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Selects from './components/selects/Selects';
import { CssBaseline, Grid } from '@material-ui/core';
import List from './components/List/List';
import { getPlacesData} from './api/travelAdvisorAPI';
import { bestThingsToDoData } from "./helper/data";
import { fanzonesData } from "./helper/data";
const App = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [places, setPlaces] = useState([]);
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [places ,rating]);

  
  useEffect(() => {
    // Fetch restaurant data when coordinates are available
    if (coords.lat && coords.lng) {
      getPlacesData( type ,coords.lat, coords.lng)
      .then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
      });
  }
}, [type , coords]);

function onPlaceSelect(value) {
  console.log(value);
  const lat = value.properties.lat;
  const lng = value.properties.lon;

  setCoords({ lat, lng });

};

function onSuggectionChange(value) {
  console.log(value);
};

  return (
    <>
      <Navbar />
      <Hero placeSelect={onPlaceSelect}
            suggestionsChange={onSuggectionChange} />
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={12}>
          <List 
          places={filteredPlaces.length ? filteredPlaces : places}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}/>
        </Grid>
      </Grid>
      <Destinations />
      <Selects />
      <FanzoneCarousel fanzones = {fanzonesData} />
      <ImgCarousel bestThingsToDo = {bestThingsToDoData} />
      <Footer />
    </>
  );
};

export default App;
