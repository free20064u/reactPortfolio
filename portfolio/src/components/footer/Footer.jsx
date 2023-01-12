import React from 'react';
import facebook from '../../asserts/images/facebook.svg';
import instagram from '../../asserts/images/instagram.svg';
import twitter from '../../asserts/images/twitter.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <p>Please visit our social media pages</p>
        <p>
          <img src={twitter} alt='twitter logo'/>
          <img src={facebook} alt='facebook logo'/>
          <img src={instagram} alt='instagram logo'/>
        </p>
      <p><small>All content copyright &copy; 2017, Black Goose Bistro and Jennifer Robbins</small></p>
    </footer>
  )
}

export default Footer