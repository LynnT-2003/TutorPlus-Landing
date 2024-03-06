import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const phrases = [
  "Introducing TutorPlus",
  "A modernized Tutoring Services Portal ",
  // "to Promote our Faculty's Tutoring Services.",
  "Build an effective learning environment",
  "For everyone in the Faculty with us.",
  "Developed by the students for the students.",
];

export default function Index() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure the element is initially invisible or off-screen
    // For example, you can set opacity to 0 and x to -100% as initial state
    gsap.set(text.current, { opacity: 0, x: -100 });

    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: 1, // Smooth scrubbing, adjust as needed
        start: "top bottom", // Start animation when the top of the element hits the bottom of the viewport
        end: "center center", // End animation when the element is in the center of the viewport
      },
      opacity: 1,
      x: 0, // Move text to its original position
      ease: "power3.out", // Ensure easing matches desired animation effect
    });
  }, []);

  return (
    <p ref={text} style={{ opacity: 0, transform: "translateX(-100%)" }}>
      {children}
    </p>
  );
}

// function AnimatedText({ children }) {
//   const text = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from(text.current, {
//       scrollTrigger: {
//         trigger: text.current,
//         scrub: true,
//         start: "0px bottom",
//         end: "bottom+=400px bottom",
//       },
//       opacity: 0,
//       left: "-200px",
//       ease: "power3.Out",
//     });
//   }, []);

//   return <p ref={text}>{children}</p>;
// }
