import React from 'react';
import './offer.scss';
import Arrow from './Arrow';

const Offer = () => {
  return (
    <div className="offer-scroll">
      <div className="offer-wrapper">
        <section className="offer">
          <div className="offer__container">
            <div className="offer__box">
              <i className="fas fa-carrot offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">100% ORGANIC VEGETABLES</h1>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i className="fas fa-truck offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">SUPER FAST DELIVERY</h1>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
            <div className="offer__box">
              <i className="fas fa-hamburger offer__box--icon"></i>
              <h1 className="heading-tertiary offer__box--header">NATURAL TASTE</h1>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aliquam. Fugit, sit ab natus iusto quis rem, error excepturi ullam nostrum beatae architecto hic consequuntur sed in enim possimus nemo?</p>
            </div>
          </div>
        </section>
        <Arrow />
      </div>
    </div>
  );
}

export default Offer;