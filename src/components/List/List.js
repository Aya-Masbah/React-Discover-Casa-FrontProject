import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import "@splidejs/react-splide/css";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import { Splide, SplideSlide } from "@splidejs/react-splide";
  
  const List = ({ places, type, setType, rating, setRating }) => {
    const classes = useStyles();
    
  
    
  return (
    <div id='destinations' className={classes.container}>
          <h1>Suggestions Around You</h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Splide
        options={{
          perPage: 3,
          autoWidth: false,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            1024: {
              perPage: 2,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {places?.map((place, i) => (
          <SplideSlide key={i}>
            <PlaceDetails place={place} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default List;


