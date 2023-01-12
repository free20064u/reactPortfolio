import React from 'react';
import './home.css';
//import logo from '../../asserts/images/blackgoose.png';
import svgLogo from '../../asserts/images/blackgoose-logo.svg';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';



const Home = () => {
  return (
    <>
      <Navbar/>
      <header>
      <h1><img src={svgLogo} alt='logo' /><br/>Black Goose Bistro</h1>
      </header>
      <h2>The Restaurant</h2>
      <p>The Black Goose Bistro offers casual lunch and dinner fare in a relaxed
      atmosphere. The menu changes regularly to highlight the freshest local
      ingredients.</p>
      <h2>Catering</h2>
      <p>You have fun.<em>We'll handle the cooking.</em> Black Goose Catering can handle
      events from snacks for a meetup to elegant corporate fundraisers.</p>
      <h2>Location and Hours</h2>
      <p>Seekonk, Massachusetts;<br/>
      Monday through Thursday 11am to 9pm;<br/>
      Friday and Saturday, 11am to
      midnight</p>
      <Footer/>
    </>
  )
}

export default Home