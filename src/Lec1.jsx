import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Lec1 = () => {
  return <div className=""></div>;
};

export default Lec1;

// const fade1 = useRef(null);
// const fade2 = useRef(null);
// const fade3 = useRef(null);
// const text = useRef(null);

// useEffect(() => {
//   const t1 = gsap.timeline({
//     defaults: { ease: "power4.inOut", duration: 0.4 },
//   });
//   t1.to([fade1.current, fade2.current, fade3.current], {
//     scaleY: 1,
//     stagger: 0.2,
//   })
//     .to(
//       text.current,
//       {
//         x: 0,
//         duration: 1,
//         ease: "elastic.out(1, 0.5)",
//       },
//       "-=.5"
//     )
//     .to(fade1.current, {
//       scaleY: 0,
//     })
//     .to(
//       fade3.current,
//       {
//         scaleY: 0,
//         transformOrigin: "bottom",
//       },
//       "-=.5"
//     )
//     .to(
//       fade2.current,
//       {
//         height: "100vh",

//         translateY: "-34%",
//       },
//       "-=.5"
//     )
//     .to(
//       text.current,
//       {
//         scale: 0.6,
//       },
//       "-=.5"
//     );
// }, []);

// const progressRef = useRef(null);
// const textRef = useRef(null);

// useEffect(() => {
//   if (progressRef.current && textRef.current) {
//     gsap.to(progressRef.current, {
//       width: "100%",
//       duration: 2,
//       ease: "power4.out",
//     });

//     gsap.to(textRef.current, {
//       y: 100,
//       duration: 2,
//       ease: "elastic.out(1,0.3)",
//     });
//     gsap.to(progressRef.current, {
//       height: "100%",
//       top: 0,
//       delay: 2,
//     });
//   }
// }, []);

// <div className="w-screen h-screen bg-blue-300 text-white">
//   <h1
//     ref={textRef}
//     className="text-[20rem] font-serif text-center opacity-10 m-0"
//   >
//     Boring
//   </h1>
//   <div
//     ref={progressRef}
//     className=" h-1 absolute top-1/2 bg-blue-100"
//   ></div>
// </div>

// const aside = useRef(null);
// const main = useRef(null);
// const btn = useRef(null);
// const timeline = useRef(gsap.timeline({ paused: true }));
// const [mst, setMst] = useState(false);

// useEffect(() => {
//   timeline.current.clear();

//   if (!mst) {
//     timeline.current.to([aside.current, main.current], {
//       x: 0,
//       stagger: -0.2,
//     });
//   } else {
//     timeline.current.to([aside.current, main.current], {
//       x: "-100%",
//       stagger: 0.2,
//     });
//   }

//   timeline.current.play();
// }, [mst]);

/* <h1
        ref={text}
        className=" text-white text-9xl font-bold font-mono absolute top-1/2 left-[40%]   -translate-y-1/2 -translate-x-full z-10"
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
      ></div> */

// <div
//   ref={aside}
//   className="w-1/6 bg-slate-300 h-screen -translate-x-full"
// >
//   <h1 className="text-3xl pb-10 text-center">Menu</h1>
//   <nav>
//     <li className="text-xl text-gray-700 pl-5"> blank</li>
//     <li className="text-xl text-gray-700 pl-5"> blank</li>
//     <li className="text-xl text-gray-700 pl-5"> blank</li>
//     <li className="text-xl text-gray-700 pl-5"> blank</li>
//     <li className="text-xl text-gray-700 pl-5"> blank</li>
//   </nav>
// </div>
// <div
//   ref={main}
//   className="main w-screen h-screen bg-slate-600 -translate-x-[13rem]"
// >
//   <h1
//     ref={btn}
//     onClick={() => {
//       setMst(!mst);
//     }}
//     className="text-3xl text-white p-5 cursor-pointer"
//   >
//     click me
//   </h1>
// </div>
