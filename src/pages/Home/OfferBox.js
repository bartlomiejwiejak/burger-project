import React, { useRef } from 'react';
import gsap from 'gsap';

const OfferBox = ({ header, description, favicon }) => {
  const offerBoxRef = useRef(null);
  const mouseEnterAnimation = () => {
    const offerbox = offerBoxRef.current;
    gsap.to(offerbox, { y: '-1.5rem', scale: 1.03, duration: .3 })
  }
  const mouseleaveAnimation = () => {
    const offerbox = offerBoxRef.current;
    gsap.to(offerbox, { y: 0, scale: 1, duration: .3 })
  }
  return (
    <div onMouseLeave={mouseleaveAnimation} onMouseEnter={mouseEnterAnimation} ref={offerBoxRef} className="offer__box">
      <i className={`fas ${favicon} offer__box--icon`}></i>
      <h1 className="heading-tertiary offer__box--header">{header}</h1>
      <p className='paragraph'>{description}</p>
    </div>
  );
}

export default OfferBox;