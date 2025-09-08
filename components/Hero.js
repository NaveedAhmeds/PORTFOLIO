import styles from "./Hero.module.css";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
	const heroRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.9]);
	const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.4]);

	const controls = useAnimation();
	useEffect(() => {
		controls.start("visible");
	}, [controls]);

	return (
		<section className={styles.hero} ref={heroRef}>
			<motion.div
				className={styles.bgDiagonal}
				style={{
					scale: bgScale,
					opacity: bgOpacity,
					backgroundImage: `url('/hercules-bg-zoom.jpg')`,
				}}
				initial={{ scale: 1.25, opacity: 0 }}
				animate={{ scale: 1.1, opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
			/>

			<motion.div
				className={styles.left}
				variants={{
					hidden: { opacity: 0, x: -80 },
					visible: {
						opacity: 1,
						x: 0,
						transition: { delay: 0.7, duration: 1.2 },
					},
				}}
				initial="hidden"
				animate={controls}
			>
				<h1 className={styles.headline}>
					DESIGNER <br />&<br /> DEVELOPER
				</h1>
				<motion.p
					className={styles.subtitle}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.7 }}
				>
					Crafting code & visuals with renaissance precision.
				</motion.p>
			</motion.div>

			<motion.div
				className={styles.right}
				variants={{
					hidden: { opacity: 0, x: 40 },
					visible: {
						opacity: 1,
						x: 0,
						transition: { delay: 1.5, duration: 1 },
					},
				}}
				initial="hidden"
				animate={controls}
			>
				<motion.p
					className={styles.rightText}
					initial={{ opacity: 0, y: 60 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.8, duration: 0.8 }}
				>
					I AM A DEVELOPER AND UX/UI DESIGNER CURRENTLY STUDYING AT SENECA. I
					LOVE NATURE, PROGRAMMING, PIZZA, AND ART.
				</motion.p>
				<motion.button
					className={styles.contactButton}
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 2.1, type: "spring", stiffness: 100 }}
				>
					Contact Me
				</motion.button>
			</motion.div>
		</section>
	);
}
