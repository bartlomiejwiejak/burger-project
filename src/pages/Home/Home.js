import React, { useRef, useEffect } from 'react';
import './/home.scss';

const Home = (props) => {
  return (
    <div className="wrapper">
      <div className="home">
        <section className="welcome">
          <div className="welcome__text-box">
            <h1 className="heading-primary heading-primary--main">-LE BURGER BUILDER-</h1>
            <h2 className="heading-secondary heading-secondary--main">...a burger, built by you!</h2>
          </div>
        </section>
        <div className="arrow-container">
          <i className="fa arrow fa-arrow-down" aria-hidden="true"></i>
        </div>
        <section className="about">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestiae, dolorem, sint eveniet voluptatibus eum, voluptatum corporis dolores eligendi iste culpa adipisci quos nisi. Aut voluptates nemo voluptatum dignissimos asperiores.</p>
        </section>
      </div>
    </div>
  )
}

export default Home;