import React from "react";
import styles from "./Hero.module.scss";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useParallax } from "react-scroll-parallax";
import bgImg from "../../assets/images/bg.png";
import girlImg from "../../assets/images/girl.png";
import foregroundImg from "../../assets/images/foreground.png";

const HeroUI = ({ isTabletOrMobile }) => {
  /*PARALLAX CONFIG FOR GIRL IMAGE */
  const parallaxGirl = useParallax({
    speed: -15,
  });

  /*PARALLAX CONFIG FOR COMPUTER IMAGE */
  const parallaxPc = useParallax({
    speed: isTabletOrMobile ? -1 : -5,
  });

  return (
    <AnimationOnScroll
      animateOnce={true}
      offset={700}
      animateIn="animate__fadeIn"
    >
      <section className={styles.hero}>
        <img
          className={`${styles.hero_image} ${styles.hero_background}`}
          src={bgImg}
          alt="cafe-image"
        />

        <img
          ref={parallaxGirl.ref}
          src={girlImg}
          className={styles.hero_image}
          alt="remote-working-girl-image"
        />
        <img
          ref={parallaxPc.ref}
          src={foregroundImg}
          className={styles.hero_image}
          alt="computer-image"
        />
        <h1 className={styles.hero_title}>
          Open the door to a new <span>career</span>
        </h1>
      </section>
    </AnimationOnScroll>
  );
};

export default HeroUI;
