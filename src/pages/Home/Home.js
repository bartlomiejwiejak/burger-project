import React, { useRef, useEffect } from 'react';
import './home.scss';
import BurgerPlate from '../../components/BurgerPlate/BurgerPlate';
import Link from '../../components/UL/Link/Link';
import bgVideo from '../../Assets/bg-video.mp4';
import sandra from '../../Assets/Images/sandra.jpg';
import gsap from 'gsap';

const Home = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div className="wrapper">
      <div className="home__loader"></div>
      <div className="home">
        <section className="welcome">
          <div className="welcome__text-box">
            <h1 className="heading-primary heading-primary--main">-LE BURGER BUILDER-</h1>
            <h2 className="heading-primary heading-primary--sub">...a burger, built by you!</h2>
          </div>
        </section>
        <div className="arrow-container">
          <i className="fa arrow fa-arrow-down" aria-hidden="true"></i>
        </div>
        <section className="about">
          <h2 className="heading-secondary">YOU ARE GOING TO FALL IN LOVE WITH BURGER APP</h2>
          <div className="about__container">
            <div className="about__left">
              <h3 className="heading-tertiary">Who we are</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil excepturi delectus non commodi deserunt perspiciatis nemo amet, veniam perferendis quod, adipisci doloremque maiores? Iusto aliquam aspernatur facilis atque culpa?</p>
              <h3 className="heading-tertiary">What we offer</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores recusandae libero mollitia beatae cupiditate esse laudantium delectus quam, sapiente distinctio, obcaecati, praesentium voluptatum doloremque repudiandae nisi cumque excepturi alias?</p>
              <Link to='/auth'>GET STARTED NOW!</Link>
            </div>
            <div className="about__right">
              <BurgerPlate />
            </div>
          </div>
        </section>
        <section className="offer">
          <div className="offer__container">
            <div className="offer__box">
              <i className="fas fa-carrot offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">100% ORGANIC VEGETABLES</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i className="fas fa-truck offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">SUPER FAST DELIVERY</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i className="fas fa-hamburger offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">NATURAL TASTE</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
          </div>
        </section>
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
                <img src={sandra} alt="" className="story__img" />
                <figcaption className="story__caption"></figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">Best burger of my life</h3>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci alias animi consequatur commodi nihil illum soluta deleniti sunt, omnis iste odio quia autem tenetur suscipit non quod fugiat, maiores nulla.</p>
              </div>
            </div>
            <div className="story">
              <figure className="story__figure">
                <img src={sandra} alt="" className="story__img" />
                <figcaption className="story__caption"></figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary">Best burger of my life</h3>
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