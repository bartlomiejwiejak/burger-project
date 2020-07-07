import React, { useEffect } from 'react';
import bgVideo from '../../Assets/bg-video.mp4';
import sandra from '../../Assets/Images/sandra.jpg';
import paulina from '../../Assets/Images/paulina.jpg';
import oskar from '../../Assets/Images/oskar.jpg';
import './stories.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Stories = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.stories__line--1', { x: '20%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '-70%'
    })
    gsap.fromTo('.stories__line--2', { x: '-80%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '20%'
    })
    gsap.fromTo('.stories__line--3', { x: '20%' }, {
      scrollTrigger: {
        trigger: '.stories__lines-box',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }, x: '-100%'
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stories__wrapper',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    tl.fromTo('.story:nth-child(1)', { x: '-150%' }, { x: 0 })
      .fromTo('.story:nth-child(2)', { x: '150%' }, { x: 0, scrub: '-=.3' })
      .fromTo('.story:nth-child(3)', { x: '-150%' }, { x: 0 })
  }, [])

  return (
    <section className="stories">
      <div className="bg-video">
        <video src={bgVideo} autoPlay muted loop className="bg-video__content"></video>
      </div>
      <div className="stories__lines-box">
        <div className="stories__line stories__line--1">121 LOCALS IN COUNTRY - 121 LOCALS IN COUNTRY</div>
        <div className="stories__line stories__line--2">HIGHEST SERVICE QUALITY - HIGHEST SERVICE QUALITY</div>
        <div className="stories__line stories__line--3">THOUSANDS HAPPY CUSTOMERS - THOUSANDS HAPPY CUSTOMERS</div>
      </div>
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
  );
}

export default Stories;