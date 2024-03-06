import styles from "./style.module.scss";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function index() {
  const container = useRef(null);
  const meetTheTeamRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (meetTheTeamRef.current) {
      gsap.fromTo(
        meetTheTeamRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: meetTheTeamRef.current,
            start: "top center+=100",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      style={{ y, marginTop: "0px" }}
      ref={container}
      className={styles.contact}
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <h2 className="pb-10" ref={meetTheTeamRef}>
            Meet the team.
          </h2>
          <span>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 400, objectFit: "cover" }}
                  image="/images/lynn2.png"
                />
                <CardContent sx={{ backgroundColor: "transparent" }}>
                  <Typography gutterBottom variant="h4" component="div">
                    Lynn Thit Nyi Nyi
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Full-Stack Developer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="ml-10" sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 400, objectFit: "cover" }}
                  image="/images/sawzwe.png"
                />
                <CardContent sx={{ backgroundColor: "transparent" }}>
                  <Typography gutterBottom variant="h4" component="div">
                    Saw Zwe Wai Yan
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Project Manager
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="ml-10" sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: 400, height: 400, objectFit: "cover" }}
                  image="/images/user.jpg"
                />
                <CardContent sx={{ backgroundColor: "transparent" }}>
                  <Typography gutterBottom variant="h4" component="div">
                    Min Khant Kyaw
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    UI/UX Designer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
