import React from "react";
import styles from "./About.module.scss";
import { techStackData } from "../../utilities/techStackData";

const AboutUI = () => {
  return (
    <div className={styles.about_page}>
      <header className={styles.about_page_header}>
        <h1 className={styles.about_page_header_title}>ABOUT 🛈</h1>
      </header>

      <main className={styles.about_page_main}>
        <p>
          This site has no commercial or profitable purpose. It was made by
          <a
            href="https://www.linkedin.com/in/aurora-sirigu-a001301b4/"
            target="_blank"
          >
            Aurora Sirigu
          </a>
          as the final
          <a href="https://www.start2impact.it/" target="_blank">
            start2impact
          </a>
          Frontend Development project. The source code for this project can be
          found in the
          <a href="https://github.com/Auro-93/home-work-app" target="_blank">
            GitHub repository
          </a>
          .
        </p>

        <h4>Tech Stack</h4>
        <div className={styles.about_page_main_tech_stack_group}>
          {techStackData.map((tech) => (
            <a key={tech.id} href={tech.link} target="_blank">
              <img src={tech.src} alt={tech.alt} />
            </a>
          ))}
        </div>

        <h4>Credits</h4>
        <p>
          This site uses
          <a
            href="https://github.com/remotive-io/remote-jobs-api"
            target="_blank"
          >
            remotive.io API
          </a>
          , which is a free and open-source API dedicated to finding remote job
          offers all over the world.
        </p>
        <p>
          A special thanks goes to
          <a href="https://github.com/adriencombourieu" target="_blank">
            Adrien Combourieu
          </a>
          , CTO of
          <a href="https://remotive.io/" target="_blank">
            remotive.io
          </a>
          , who kindly and quickly fixed a small bug found during my API test.
        </p>
        <p>
          All beautiful Home illustrations are taken from
          <a href="https://undraw.co/" target="_blank">
            unDraw
          </a>
          .
        </p>
        <p>
          Home hero photo is made by
          <a
            href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Brooke Cagle
          </a>
          on
          <a
            href="https://unsplash.com/collections/1273195/events?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
          >
            Unsplash
          </a>
          .
        </p>
        <p>
          Finally, I would like to thank the
          <a href="https://www.start2impact.it/" target="_blank">
            start2impact
          </a>
          platform, which allows me to continually get involved with new
          projects and with the acquisition of new skills in the digital field.
        </p>
      </main>
    </div>
  );
};

export default AboutUI;
