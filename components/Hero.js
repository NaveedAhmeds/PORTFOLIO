import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  // Scroll down handler for arrow (now unused, but keeping if you want later)
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.bgGlass}>
          <h1>
            DESIGNER <br />
            &<br />
            DEVELOPER{" "}
          </h1>
          <p className={styles.subtitle}>
            Crafting code & visuals with renaissance precision.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={styles.bgGlass}>
          <p>
            I AM A DEVELOPER AND UX/UI DESIGNER CURRENTLY STUDYING AT SENECA. I
            LOVE NATURE, PROGRAMMING, PIZZA, AND ART.
          </p>
          <button className={styles.contactButton}>Contact Me</button>
        </div>
      </motion.div>
    </section>
  );
}
