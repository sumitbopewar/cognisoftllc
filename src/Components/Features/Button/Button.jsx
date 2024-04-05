import React, { useRef, useEffect } from 'react';
import './button.css'
import gsap from 'gsap'; // Assuming gsap is installed as a dependency

const Button = () => {
  const linkRef = useRef(null);
  const pinkRef = useRef(null);
  const hoverTL = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    const pink = pinkRef.current;

    hoverTL.current = gsap.timeline({ paused: true });
    hoverTL.current.to(pink, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4
    });
    hoverTL.current.to(pink, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6
    });

    const handleMouseEnter = () => {
      hoverTL.current.play();
    };

    const handleMouseLeave = () => {
      hoverTL.current.reverse();
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // <div>
    //   {/* Assuming there are elements with the classes ".link" and ".color" */}
    //   <div ref={linkRef} className="link">Link</div>
    //   <div ref={pinkRef} className="color">Pink</div>

      
    // </div>

<div class="wrapper">
<a class="link" href="#" target="_blank" ref={linkRef}>
  <div class="color" ref={pinkRef}></div>
  <span>READ MORE</span>
  <i class="far fa-arrow-right-long"></i>
</a>
</div>
  );
};
export default Button;