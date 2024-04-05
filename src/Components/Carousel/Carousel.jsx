import React, { useEffect, useState } from 'react';
import './carousel.css'
// import Cards from './components/Cards';
// import BreadCrumb from './components/BreadCrumb/BreadCrumb';

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeTrans = 6000; // transition time in milliseconds
  const [slides, setSlides] = useState([]);
  const [nav, setNav] = useState([]);
  const [totalSlides, setTotalSlides] = useState(0);
  const [indexElements, setIndexElements] = useState([]);

  useEffect(() => {
    const el = document.querySelector('.slider');
    const slidesArray = Array.from(el.querySelectorAll('li'));
    const navArray = Array.from(el.querySelectorAll('aside a'));
    const totalSlidesCount = slidesArray.length;
    const indexElementsArray = Array.from({ length: totalSlidesCount }, (_, i) => i);

    setSlides(slidesArray);
    setNav(navArray);
    setTotalSlides(totalSlidesCount);
    setIndexElements(indexElementsArray);
    setCurrent(0);

    setCurret();

    const interval = setInterval(() => {
      if (autoPlay) {
        setCurrent((prevCurrent) => (prevCurrent < totalSlidesCount - 1 ? prevCurrent + 1 : 0));
      }
    }, timeTrans);

    return () => clearInterval(interval);
  }, [autoPlay, timeTrans, totalSlides]);

  useEffect(() => {
    changeSlide(current);
  }, [current]);

  const setCurret = () => {
    slides[current]?.classList.add('current');
    nav[current]?.classList.add('current_dot');
  };

  const changeSlide = (index) => {
    nav.forEach((dot) => dot.classList.remove('current_dot'));
    slides.forEach((slide) => slide.classList.remove('prev', 'current'));

    const prevElements = indexElements.filter((value) => value < index);
    prevElements.forEach((indexPrevEle) => slides[indexPrevEle]?.classList.add('prev'));

    slides[index]?.classList.add('current');
    nav[index]?.classList.add('current_dot');
  };

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <>
    <header>
      <section className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title text-white"><em>Welcome To </em>CogniSoft <em>IT</em> Services</h3>
              <p>Where Your IT Dreams Take Flight! </p>
              <a href="#about" className="btn btn_3">More about us</a>
            </article>
          </li>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title text-white"><em>Think Big.</em> We Make IT.</h3>
              <p>We are not just a staffing company; we are your strategic partner in your journey to success.</p>
              <a href="#" className="btn btn_3">View Issues</a>
            </article>
          </li>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title text-white"><em>Discover Your Path</em> To Excellence <br /> With CogniSoft <em>IT</em> Services.</h3>
              <p>Our mission is to empower you with the tools, knowledge, and opportunities needed to thrive in the IT industry.</p>
              <a href="#" className="btn btn_3">View Issues</a>
            </article>
          </li>
        </ul>
        <aside>
          {nav.map((_, index) => (
            <a key={index} href="#" onClick={() => handleDotClick(index)}></a>
          ))}
        </aside>
      </section>
      <a href="#services" className="cs-down"></a>
    </header>
    {/* <Cards />
    <BreadCrumb /> */}
    </>
  );
}

export default Carousel;
