import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y, marginTop: "100px" }}
      ref={container}
      className={styles.contact}
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/lynn.png`} />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together.</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <div backgroundColor={"#334BD3"} className={styles.button}>
              <p>Get in touch</p>
            </div>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <div className={styles.button}>
            <p>lnyinyi22@gmail.com</p>
          </div>
          <div className={styles.button}>
            <p>+66 900 947 427</p>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Last Updated</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Version</h3>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <p
                onClick={() =>
                  window.open("https://github.com/LynnT-2003", "_blank")
                }
              >
                GitHub
              </p>
            </span>
            <p>Instagram</p>
            <p>Dribbble</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
