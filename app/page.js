"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Intro from "./components/Intro";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Description from "./components/Description";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const LocomotiveSCroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 2200);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Intro />
        <Description />
      </main>
    </>
  );
}
