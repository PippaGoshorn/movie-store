import './App.css';
import React from 'react';
import NavbarSearch from './components/NavbarSearch';
// import HeroCarousel from './components/HeroCarousel';
import HeroSlideshow from './components/HeroSlideshow';
// import CarouselSlick from './components/CarouselSlick';
// import Slider from './components/CarouselSlick';
import DVDTile from './components/DVDTile';
import GenreButton from './components/GenreButton';
// import {useEffect, useState} from 'react';
// import { movies_data } from './movie-data';
import breakfastTiffanys from "./img/breakfast-tiffanys.jpg";
import goodWillHunting from "./img/good-will-hunting.jpg";
import goneWithWind from "./img/gone-with-the-wind.jpg";
import theGodfather from "./img/godfather.jpg";
import audrey from "./img/audrey.jpg";
import bridesmaids from "./img/bridesmaids.jpg";
import jumpStreet21 from "./img/21-jump-street.jpg";
import laLaLand from "./img/la-la-land.jpg";
import mammaMia from "./img/mamma-mia.jpg";
import frozen from "./img/frozen.jpeg";
import ViewAllGenresButton2 from './components/ViewAllGenresButton2';
import EmailSignup from './components/EmailSignup';

function App() {
//   const [count, setCount] = useState(0);
//   const [ArrayData, setArrayData] = useState(null);
//   let movieArray = movies_data;
//   let num = 1;
//   useEffect(() => {
//     if (movieArray.length > 10){
//       setCount(num);
//       setArrayData(1);
//       console.log("count works");
//     }
// },[ArrayData, count, num, movieArray.length]);
  return (
    <div className="App">
      <NavbarSearch />
      <HeroSlideshow />

      <section className="highlights">
        <div className="highlights-tile highlights-new-releases">
          <p>New releases</p>
        </div>
        <div className="highlights-tile highlights-bestsellers">
          <p>Bestsellers</p>
        </div>
        <div className="highlights-tile highlights-top-picks">
          <p>Our top picks</p>
        </div>
        <div className="highlights-tile highlights-sale">
          <p>Sale</p>
        </div>
      </section>

      <section className="browse-all-DVDs">
        <div className="all-dvds-header">
          <h1>Browse all DVDs</h1>
          <h3>Filter by genre</h3>
          <div className="genre-button-container">
            <GenreButton genre="Drama"/>
            <GenreButton genre="Classics"/>
            <GenreButton genre="Comedy" />
            <GenreButton genre="Documentary"/>
            <GenreButton genre="Kids"/>
            <GenreButton genre="Musical"/>
            <GenreButton genre="Thriller"/>
            <GenreButton genre="Action"/>
            <GenreButton genre="Sci-Fi"/>
            <ViewAllGenresButton2 className="genre-button all" />
          </div>
        </div>
        <div className="dvd-tiles" id="genre-filter"></div>
        <div className="dvd-tiles" id="tile">
          {/* {Object.entries(movieArray).forEach((item, i)=>{
              <div className="dvd-tile" key={i}>
              <img src={item[1].imgSrc} alt={item[1].filmTitle}></img>
              <p className="movie-title">{item[1].filmTitle}</p>
              <p><span className="rel-year">{item[1].releaseYear}</span>, 
              <span className="genre">{item[1].genre}</span></p>
              <p><span className="price">{item[1].price}</span></p>
              <p className="stock-info">{item[1].stock}</p>
              <button className="buy-button">Add to basket</button>
          </div>
              })
          } */}
          <DVDTile filmTitle="Good Will Hunting" releaseYear="1997" genre="Drama" price="£5.99" stock="In stock" imgSrc={goodWillHunting}/>
          <DVDTile filmTitle="Breakfast at Tiffany's" releaseYear="1961" genre="Classics" price="£4.99" stock="In stock" imgSrc={breakfastTiffanys} />
          <DVDTile filmTitle="Gone With The Wind" releaseYear="1939" genre="Classics" price="£6.99" stock="Only 4 in stock" imgSrc={goneWithWind} />
          <DVDTile filmTitle="The Godfather" releaseYear="1972" genre="Classics" price="£4.99" stock="Only 3 in stock" imgSrc={theGodfather} />
          <DVDTile filmTitle="Audrey" releaseYear="2020" genre="Documentary" price="£5.99" stock="Out of stock" imgSrc={audrey} />
          <DVDTile filmTitle="Bridesmaids" releaseYear="2011" genre="Comedy" price="£4.99" stock="In stock" imgSrc={bridesmaids} />
          <DVDTile filmTitle="21 Jump Street" releaseYear="2012" genre="Comedy" price="£4.99" stock="In stock" imgSrc={jumpStreet21} />
          <DVDTile filmTitle="La La Land" releaseYear="2016" genre="Musical" price="£6.99" stock="Only 5 in stock" imgSrc={laLaLand} />
          <DVDTile filmTitle="Mamma Mia!" releaseYear="2008" genre="Musical" price="£4.99" stock="In stock" imgSrc={mammaMia} />
          <DVDTile filmTitle="Frozen" releaseYear="2013" genre="Kids" price="£6.99" stock="In stock" imgSrc={frozen} />
        </div>
        {/* Pagination - showing 10 of 20 products, SHOW MORE button */}
      </section>

      <section className="promo-box">
        <h3>Receive a 15% discount on your first order</h3>
        <p>Join the Movie Store Video Club to get 15% off your first order, as well as the latest product updates and special offers, delivered right to your inbox.</p>
        <EmailSignup />
      </section>

      <footer>
          <div className="help">
            <h4>Need help?</h4>
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="customer-support">
            <h4>Customer Support</h4>
            <p>Returns</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="corporate-info">
            <h4>Corporate Info</h4>
            <p>About Us</p>
            <p>Affiliates</p>
            <p>Cookies</p>
          </div>
          <div className="location">
            <h4>Location</h4>
            <p>United Kingdom</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
