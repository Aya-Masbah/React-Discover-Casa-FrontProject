import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import { CssBaseline, Grid } from '@material-ui/core';
import List from './components/List/List';
import Map from './components/Map/Map';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CssBaseline />
      <Header/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map/>
        </Grid>
      </Grid>
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
