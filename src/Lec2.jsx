import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lec2 = () => {
  const fade1 = useRef(null);
  const fade2 = useRef(null);
  const fade3 = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.4 },
    });

    t1.to([fade1.current, fade2.current, fade3.current], {
      scaleY: 1,
      stagger: 0.2,
    })
      .to(
        text.current,
        {
          x: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=.5"
      )
      .to(fade1.current, {
        scaleY: 0,
      })
      .to(
        fade3.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        "-=.5"
      )
      .to(
        fade2.current,
        {
          height: "100vh",
          translateY: "-34%",
        },
        "-=.5"
      )
      .to(
        text.current,
        {
          scale: 0.6,
        },
        "-=.5"
      );
    t1.paused(true);

    ScrollTrigger.create({
      trigger: ".middle",
      start: "top 40%",
      end: "40% top",
      onEnter: () => {
        t1.play();
      },
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen"></div>
      <div className="middle w-screen h-screen relative">
        <h1
          ref={text}
          className="text-white text-9xl font-bold font-mono absolute top-1/2 left-[40%] -translate-y-1/2 -translate-x-full z-10"
        >
          Ocean
        </h1>
        <div
          ref={fade1}
          className="fade1 w-screen h-[33vh] bg-blue-100 origin-top scale-y-0"
        ></div>
        <div
          ref={fade2}
          className="fade2 w-screen h-[34vh] bg-blue-200  origin-top scale-y-0"
        ></div>
        <div
          ref={fade3}
          className="fade3 w-screen h-[33vh] bg-blue-300 origin-top scale-y-0"
        ></div>
      </div>
      <div className="w-screen h-screen bg-black"></div>
    </div>
  );
};

export default Lec2;
