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

    gsap.set(text.current, { opacity: 0, x: -100 });

    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: 3,
        start: "top bottom",
        end: "center center",
      },
      opacity: 1,
      x: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <p ref={text} style={{ opacity: 0, transform: "translateX(-100%)" }}>
      {children}
    </p>
  );
}
