import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './menu.css';

const Menu = () => {
  return (
    <>
      <Navbar/>
      <header>
        <div id="info">
          <h1>Black Goose Bistro &bull; Summer Menu</h1>
          <p>Baker's Corner, Seekonk, Massachusetts<br/>
          <span className="label">Hours: Monday through Thursday:</span> 11 to 9, <span className="label">Friday and Saturday;</span> 11 to midnight</p>
        </div>
        <ul>
          <li><a href="#appetizers">Appetizers</a></li>
          <li><a href="#entrees">Main Courses</a></li>
          <li><a href="#toast">Traditional Toasts</a></li>
          <li><a href="#dessert">Dessert Selection</a></li>
        </ul>
      </header>

<div id="appetizers">
<h2>Appetizers</h2>
<p>This season, we explore the spicy flavors of the southwest in our appetizer collection.</p>

<dl>
<dt>Black bean purses</dt>
<dd>Spicy black bean and a blend of mexican cheeses wrapped in sheets of phyllo and baked until golden. <span className="price">$3.95</span></dd>

<dt className="newitem">Southwestern napoleons with lump crab &mdash; <strong>new item!</strong></dt>
<dd>Layers of light lump crab meat, bean and corn salsa, and our handmade flour tortillas. <span className="price">$7.95</span></dd>
</dl>
</div>

<div id="entrees">

<h2>Main courses</h2>
<p>Big, bold flavors are the name of the game this summer. Allow us to assist you with finding the perfect wine.</p>


<dl>

<dt className="newitem">Jerk rotisserie chicken with fried plantains &mdash; <strong>new item!</strong></dt>
<dd>Tender chicken slow-roasted on the rotisserie, flavored with spicy and fragrant jerk sauce and served with fried plantains and fresh mango. <strong>Very spicy.</strong> <span className="price">$12.95</span></dd>

<dt>Shrimp sate kebabs with peanut sauce</dt>
<dd>Skewers of shrimp marinated in lemongrass, garlic, and fish sauce then grilled to perfection. Served with spicy peanut sauce and jasmine rice. <span className="price">$12.95</span></dd>

<dt>Grilled skirt steak with mushroom fricasee</dt>
<dd>Flavorful skirt steak marinated in Asian flavors grilled as you like it<sup>*</sup>. Served over a blend of sauteed wild mushrooms with a side of blue cheese mashed potatoes. <span className="price">$16.95</span></dd>
</dl>

</div>

<p className="warning"><sup>*</sup> We are required to warn you that undercooked food is a health risk.</p>
<Footer/>
    </>
  )
}

export default Menu