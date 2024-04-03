// import React, { useState, useLayoutEffect, useRef } from "react";
// import styles from "./style.module.css";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const projects = [
//   {
//     title: "Landing Screen",
//     // src: "Landing.png",
//     src: "background.jpeg",
//   },
//   {
//     title: "Discovery Screen",
//     src: "truelab_horizontal.png",
//   },
//   {
//     title: "Appointment Screen",
//     src: "background.jpeg",
//   },
//   {
//     title: "Classes Screen",
//     src: "truelab_horizontal.png",
//   },
// ];

// export default function Index() {
//   const [selectedProject, setSelectedProject] = useState(0);
//   const container = useRef(null);
//   const imageContainer = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.create({
//       trigger: imageContainer.current,
//       pin: true,
//       start: "top-=100px",
//       end: document.body.offsetHeight,
//     });
//   }, []);

//   return (
//     <div ref={container} className={styles.projects}>
//       <div className={styles.projectDescription}>
//         <div ref={imageContainer} className={styles.imageContainer}>
//           <Image
//             src={`/images/${projects[selectedProject].src}`}
//             fill={true}
//             alt="project image"
//             priority={true}
//           />
//         </div>
//         <div className={styles.column}>
//           <p>
//             The flora is characterized by the presence of high elevation
//             wetland, as well as yellow straw, broom sedge, tola de agua and tola
//             amaia.
//           </p>
//         </div>
//         <div className={styles.column}>
//           <p>
//             Some, like the southern viscacha, vicuña and Darwins rhea, are
//             classified as endangered species. Others, such as Andean goose,
//             horned coot, Andean gull, puna tinamou and the three flamingo
//             species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
//             Jamess flamingo) are considered vulnerable.
//           </p>
//         </div>
//       </div>

//       <div className={styles.projectList}>
//         {projects.map((project, index) => {
//           return (
//             <div
//               key={index}
//               onMouseOver={() => {
//                 setSelectedProject(index);
//               }}
//               className={styles.projectEl}
//             >
//               <h2>{project.title}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Classes Screen",
    src: "Frame 679demo.png",
  },
  {
    title: "Landing Screen",
    src: "landing_screen.png",
  },
  {
    title: "Discovery Screen",
    src: "discovery_screen.png",
  },
  {
    title: "Booking Screen",
    src: "booking_screen.png",
  },
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const textRefs = useRef(projects.map(() => React.createRef()));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    textRefs.current.forEach((ref) => {
      if (ref.current) {
        gsap.set(ref.current, { opacity: 0, x: 100 });

        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            scrub: 3,
            start: "top bottom",
            end: "center center",
          },
          opacity: 1,
          x: 0,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.projectList}>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => {
                  setSelectedProject(index);
                }}
                className={styles.projectEl}
              >
                <h2 ref={textRefs.current[index]}>{project.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
