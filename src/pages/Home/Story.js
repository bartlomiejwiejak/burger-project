import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Story = ({ img, name, heading, description }) => {
  const [isMobile, setIsMobile] = useState(null)
  const storyRef = useRef(null);
  const figureRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', checkSize)
  }, [])
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  }, [])
  useEffect(() => {
    const story = storyRef.current;
    const figure = figureRef.current;
    const text = textRef.current;
    console.log(isMobile)
    if (isMobile) {
      gsap.set([story, figure, text], { skewX: 0 })
    }
    else if (isMobile !== true) {
      gsap.set([story], { skewX: '-12deg' })
      gsap.set([figure, text], { skewX: '12deg' })
    }
  }, [isMobile])
  return (
    <div ref={storyRef} className="story">
      <figure ref={figureRef} className="story__figure">
        <img src={img} alt="Oskar" className="story__img" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div ref={textRef} className="story__text">
        <h3 className="heading-tertiary">{heading}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}

export default Story;