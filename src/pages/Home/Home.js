import React from 'react';
import './home.scss';
import bgVideo from '../../Assets/bg-video.mp4';
import sandra from '../../Assets/Images/sandra.jpg';
import paulina from '../../Assets/Images/paulina.jpg';
import oskar from '../../Assets/Images/oskar.jpg';
import About from './About'
import Welcome from './Welcome';
import Offer from './Offer';

const Home = () => {

  return (
    <div className="wrapper">
      <div className="home">
        <Welcome />
        <About />
        <Offer />
        <section className="stories">
          <div className="bg-video">
            <video src={bgVideo} autoPlay muted loop className="bg-video__content"></video>
          </div>
          <h2 className="heading-secondary">WE MAKE PEOPLE GENUINELY HAPPY</h2>
          <div className="stories__wrapper">
            <div className="story">
              <figure className="story__figure">
                <img src={sandra} alt="Sandra" className="story__img" />
                <figcaption className="story__caption">Sandra Thielmann</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">BEST BURGER OF MY LIFE</h3>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias animi consequatur commodi nihil illum soluta deleniti sunt, omnis iste odio quia autem tenetur suscipit non quod fugiat, maiores nulla.</p>
              </div>
            </div>
            <div className="story">
              <figure className="story__figure">
                <img src={oskar} alt="Oskar" className="story__img" />
                <figcaption className="story__caption">Oskar Thielmann</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">SUPER FAST DELIVERY</h3>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias animi consequatur commodi nihil illum soluta deleniti sunt, omnis iste odio quia autem tenetur suscipit non quod fugiat, maiores nulla.</p>
              </div>
            </div>
            <div className="story">
              <figure className="story__figure">
                <img src={paulina} alt="Paulina" className="story__img" />
                <figcaption className="story__caption">Paulina Pogorzelska</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">NEVER TASTED MEAT LIKE THAT</h3>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias animi consequatur commodi nihil illum soluta deleniti sunt, omnis iste odio quia autem tenetur suscipit non quod fugiat, maiores nulla.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;