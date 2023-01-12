import React from 'react';
import './gallery.css';
import bread200 from '../../asserts/images/thumbnails/bread-200.jpg';
import bread400 from '../../asserts/images/thumbnails/bread-400.jpg';
import bread800 from '../../asserts/images/thumbnails/bread-800.jpg';
import bread1200 from '../../asserts/images/thumbnails/bread-1200.jpg'
import burgers200 from '../../asserts/images/thumbnails/burgers-200.jpg';
import fish200 from '../../asserts/images/thumbnails/fish-200.jpg';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';



const Gallery = () => {
  return (
    <>
      <Navbar/>
      <header>
        <h1>Blackstone Bistro Gallery</h1>
      </header>
      <p>Not is our food good, it's also good-looking! Our patrons often stop to admire our fare with a quick Instagram before digging in. We've collected a few of our favorite shots here.</p>

      <h2>Our Baked Goods</h2>
      <p>
        <a href="bread.html">
          <picture>
            <source media='(min-width:400px)' srcset={`${bread1200} 1200w`}/>
            <img src={bread200} alt="close-up of sliced rustic bread" width="200" height="200"/>
          </picture>
        </a><br/>
      <p>We start our day at the crack of dawn to bake our own muffins, bread, and dinner rolls. Loaves       not used that day are donated to the local food shelter.
      </p>
</p>

<h2>Our Burgers</h2>
<p>
  <a href="burgers.html">
    <picture>
      <img src={burgers200} alt="juicy burgers on a cutting board" width="200" height="200"/>
    </picture>
  </a><br/>
People come from all over to enjoy our lovingly made burgers. We grind our own locally-sourced organic beef and turkey so you know it's fresh and free from fillers and other nonsense. Go for one of our creative topping combos or stick with the classics. 
</p>

<h2>Catch of the Day</h2>
<p>
  <a href="fish.html">
    <picture>
      <img src={fish200} alt="baked fish with potatoes and cherry tomatoes" width="200" height="200"/>
    </picture>
  </a><br/>
Our chef works with local fisherman to pick the freshest the sea has to offer for our daily seafood special. Our Roast Cod Caponata with Roasted Potatoes is an old favorite with our regulars.
</p>
<Footer/>
    </>
  )
}

export default Gallery