import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import gsap from "gsap";
import styles from "./style.module.scss";

const phrases = [
  "INTRODUCING TUTORPLUS:",
  "A MODERNIZED TUTORING SERVICES APP ",
  // "to Promote our Faculty's Tutoring Services.",
  "- Foster an effective learning environment.",
  "- Start actively learning together with us.",
  "- Developed by the students for the students.",
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}

      {/* <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div> */}
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
