"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    });

    timeline
      .from(background.current, { clipPath: "inset(0%)" }) // Animate to inset
      .to(introImage.current, { height: "200px", duration: 1 }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div
        data-scroll
        data-scroll-speed="0.10"
        className={styles.backgroundImage}
        ref={background}
      >
        <Image
          src={"/images/truelab_horizontal.png"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.1"
          className={styles.introImage}
        >
          <Image
            src={"/images/logo_removed_bg.png"}
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.5">
          VMS TUTORING
        </h1>
      </div>
    </div>
  );
}
