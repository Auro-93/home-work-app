import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useParallax } from "react-scroll-parallax";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./HomeSection.module.scss";
import { style } from "../../utilities/homeSectionsData";
import { Link } from "react-router-dom";

const HomeSectionUI = ({ section, isTabletOrMobile }) => {
  /*PARALLAX CONFIG FOR HOME SECTIONS IMAGES AND DESCRIPTIONS */
  const parallaxConfig = {
    speed: isTabletOrMobile ? 10 : 15,
    opacity: [1, 0.2],
  };
  const parallaxDesc = useParallax(parallaxConfig);

  const parallaxImg = useParallax(parallaxConfig);

  return (
    <div
      className={styles.home_section}
      style={
        section.theme === "light" ? style.container.light : style.container.dark
      }
    >
      <AnimationOnScroll
        animateOnce={true}
        animateIn={
          section.order === "textFirst"
            ? "animate__fadeInLeft"
            : "animate__fadeInRight"
        }
        className={styles.home_section_desc_container}
        style={section.order === "textFirst" ? { order: 1 } : { order: 2 }}
      >
        <div ref={parallaxDesc.ref}>
          <h2
            className={styles.home_section_desc_container_title}
            style={
              section.theme === "light" ? style.title.dark : style.title.light
            }
          >
            {section.title}
          </h2>
          {section.desc.map((desc) => (
            <p
              key={uuidv4()}
              className={styles.home_section_desc_container_paragraph}
              style={
                section.theme === "light"
                  ? style.paragraph.dark
                  : style.paragraph.light
              }
            >
              {desc}
            </p>
          ))}
          <Link
            to={section.link}
            className={styles.home_section_desc_container_link}
            style={{
              backgroundColor:
                section.theme === "light"
                  ? style.paragraph.light.color
                  : style.container.light.backgroundColor,
            }}
          >
            EXPLORE
          </Link>
        </div>
      </AnimationOnScroll>

      <div
        ref={parallaxImg.ref}
        className={styles.home_section_img_container}
        style={
          section.order === "textFirst"
            ? {
                order: 2,
                justifyContent: "flex-end",
              }
            : { order: 1, justifyContent: "flex-start" }
        }
      >
        <img src={section.img.src} alt={section.img.alt} />
      </div>
    </div>
  );
};

export default HomeSectionUI;
