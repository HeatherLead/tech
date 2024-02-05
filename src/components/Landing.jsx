import React, { useRef, useEffect } from "react";
import l1 from "../images/l1.png";
import l2 from "../images/l2.png";
import l3 from "../images/l3.png";
import landing from "../images/Landing.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const planet = useRef(null);
  const mPlanet = useRef(null);
  const fGround = useRef(null);
  const text = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    let t1 = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });
    let Trigt1 = gsap.timeline({
      scrollTrigger: {
        trigger: body.current,
        start: "top 0%",
        end: "bottom+=60% 90%",
        scrub: 1,
        toggleActions: "play reverse restart reverse ",
      },
      defaults: {
        ease: "power2.inOut",
      },
    });
    t1.fromTo(
      text.current,
      { translateY: "400px", opacity: 0.7 },
      {
        translateY: "1px",
        opacity: 1,
        duration: 2,
      }
    ).to(text.current, {
      fontSize: "8rem",
      ease: "expo.inOut",
    });
    Trigt1.to(planet.current, {
      scale: 2,
    })
      .to(
        text.current,
        {
          translateY: "300px",
        },
        "<"
      )
      .to(
        mPlanet.current,
        {
          translateY: "300px",
          scale: 1.5,
          delay: 0.15,
        },
        "<"
      );
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      ref={body}
      className=" w-screen h-screen flex justify-center items-center"
    >
      <h1 ref={text} className=" text-white text-8xl z-50  tracking-[3rem]  ">
        AYUSH
      </h1>
      <img
        src={l1}
        className=" object-cover w-screen h-screen absolute z-10 scale-100  "
        alt=""
        ref={planet}
      />
      <img
        src={l2}
        className="object-cover w-screen h-screen absolute z-30 scale-100    "
        alt=""
        ref={mPlanet}
      />
      <img
        src={l3}
        className="object-cover w-screen h-screen absolute z-20 scale-100 "
        alt=""
        ref={fGround}
      />
      <img
        src={landing}
        className="object-cover w-screen h-screen absolute z-0 "
        alt=""
      />
    </div>
  );
};

export default Landing;
