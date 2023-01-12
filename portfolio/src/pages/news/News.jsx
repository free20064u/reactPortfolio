import React from 'react';
import './news.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const News = () => {
  return (
    <>
      <Navbar/>
      <header>
      <h1>The Black Goose Bistro News</h1>
      </header>

      <article>
    
          <h2>Summer Menu Items</h2>
          <p><time >posted by BGB, June 18, 2017</time></p>
    
      <p>Our chef has been busy putting together the perfect menu for the summer months. Stop by to try these appetizers and main courses while the days are still long.</p>

        <section id="appetizers">
          <h3>Appetizers</h3>
          <dl>
            <dt>Black bean purses</dt>
            <dd>Spicy black bean and a blend of Mexican cheeses wrapped in sheets of phyl-lo and baked until golden. <span className="price">$3.95</span></dd>

            <dt className="newitem">Southwestern napoleons with lump crab &#8212; <strong>new item!</strong></dt>
            <dd>Layers of light lump crab meat, bean and corn salsa, and our handmade flour tortillas. <span className="price">$7.95</span></dd>
          </dl>
        </section>

        <section id="maincourses">
          <h3>Main courses</h3>
          <dl>
            <dt>Shrimp sate kebabs with peanut sauce</dt>
            <dd>Skewers of shrimp marinated in lemongrass, garlic, and fish sauce then grilled to perfection. Served with spicy peanut sauce and jasmine rice. <span className="price">$12.95</span></dd>

            <dt className="newitem">Jerk rotisserie chicken with fried plantains &#8212; <strong>new item!</strong></dt>
            <dd>Tender chicken slow-roasted on the rotisserie, flavored with spicy and fragrant jerk sauce and served with fried plantains and fresh mango. <span className="price">$12.95</span></dd>
          </dl>
        </section>
      </article>


      <article>
        
        <h2>Low and Slow</h2>
        <p>posted by BGB, <time >November 15, 2016</time></p>
      
        <p>This week I am <em>extremely</em> excited about a new cooking technique called <dfn><i>sous vide</i></dfn>. In <i>sous vide</i> cooking, you submerge the food (usually vacuum-sealed in plastic) into a water bath that is precisely set to the target temperature you want the food to be cooked to. In his book, <cite>Cooking for Geeks</cite>, Jeff Potter describes it as <q>ultra-low-temperature poaching.</q></p>

        <p>Next month, we will be serving <b><i>Sous Vide</i> Salmon with Dill Hollandaise</b>. To reserve a seat at the chef table, contact us before <time >November 30</time>.</p>
      </article>
      <div id="about">
        <p>Location: Baker's Corner, Seekonk, MA</p>
        <p>Hours: Tuesday to Saturday, <time >11am</time> to <time >11pm</time></p>
      </div>

      <Footer/>

    </>
  )
}

export default News;