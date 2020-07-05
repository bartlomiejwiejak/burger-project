import React, { useRef, useEffect } from 'react';
import './home.scss';
import BurgerPlate from '../../components/BurgerPlate/BurgerPlate';
import Link from '../../components/UL/Link/Link';

const Home = (props) => {
  return (
    <div className="wrapper">
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
              <i class="fas fa-carrot offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">100% ORGANIC VEGETABLES</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i class="fas fa-truck offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">SUPER FAST DELIVERY</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i class="fas fa-hamburger offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">NATURAL TASTE</h1>
              <p className='offer__box--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home;