import styles from "./Experience.module.css";
import { motion } from "framer-motion";

const experiences = [
	{ role: "Graphic Designer (Freelance)", duration: "1 yr 3 mos" },
	{ role: "Wow Kebabish", duration: "Nov 2024 – Present (~8 mos)" },
	{ role: "Web Developer (PT), Wow Kebabish", duration: "2 mos" },
	{ role: "QA Automation Engineer, PAR Co-op", duration: "4 mos" },
	{ role: "Web Developer, Seneca Data Science Club", duration: "Current" },
];

export default function Experience() {
	return (
		<section id="experience" className={styles.experience}>
			<h2>Experience</h2>
			<div className={styles.timeline}>
				{experiences.map((item, idx) => (
					<motion.div
						key={idx}
						className={styles.item}
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}
					>
						<h3>{item.role}</h3>
						<span>{item.duration}</span>
					</motion.div>
				))}
			</div>
		</section>
	);
}
