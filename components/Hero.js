import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
	// Scroll down handler for arrow
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

			{/* Scroll Arrow */}
			<div
				className={styles.scrollArrow}
				role="button"
				tabIndex={0}
				aria-label="Scroll down to Experience"
				onClick={scrollToExperience}
				onKeyDown={(e) => (e.key === "Enter" ? scrollToExperience() : null)}
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={styles.arrowSvg}
				>
					<line x1="12" y1="5" x2="12" y2="19" />
					<polyline points="19 12 12 19 5 12" />
				</svg>
			</div>
		</section>
	);
}
