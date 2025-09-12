import styles from "./Hero.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
	// Parallax scroll effect
	const { scrollY } = useScroll();
	const bgY = useTransform(scrollY, [0, 500], ["0%", "10%"]);

	// Scroll to Contact Section
	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={styles.hero}>
			{/* Background */}
			<motion.div
				className={styles.bgDiagonal}
				style={{ y: bgY }}
				initial={{ scale: 1.05 }}
				animate={{ scale: 1.0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			/>

			{/* Left Text */}
			<motion.div
				className={styles.left}
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.35 }}
			>
				<h1 className={styles.headline}>
					DESIGNER <br />&<br /> DEVELOPER
				</h1>
				<motion.p
					className={styles.subtitle}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.1 }}
				>
					Crafting code & visuals with renaissance precision.
				</motion.p>
			</motion.div>

			{/* Right Text */}
			<motion.div
				className={styles.right}
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.35, delay: 0.2 }}
			>
				<p className={styles.rightText}>
					I AM A DEVELOPER AND UX/UI DESIGNER CURRENTLY STUDYING AT SENECA. I
					LOVE NATURE, PROGRAMMING, PIZZA, AND ART.
				</p>
				<motion.button
					className={styles.contactButton}
					whileHover={{ scale: 1.15 }}
					transition={{ type: "spring", stiffness: 120, damping: 12 }}
					onClick={scrollToContact}
				>
					Contact Me
				</motion.button>
			</motion.div>
		</section>
	);
}
