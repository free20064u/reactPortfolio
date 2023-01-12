import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <header>
        <h1>Black Goose Bistros: Contact</h1>
        
      </header>
      <h2>Contact Us</h2>
      <label> Name: <input type="text" name="" id="" /></label>
      <label>Email: <input type="email" name="email"/></label>
      <label>Message<textarea></textarea></label>
      <h2>LOCATION AND HOURS</h2>
        <p>Seekonk, Massachusetts; Monday through Thursday 11am to 9pm; Friday and Saturday, 11am to midnigh</p>
      <Footer/>
    </>
  )
}

export default Contact