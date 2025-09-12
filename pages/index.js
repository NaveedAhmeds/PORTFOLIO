// pages/index.js
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
	// Fade + slide up animation for all sections
	const sectionVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<>
			<Navbar />
			<main style={{ margin: 0, padding: 0 }}>
				<motion.div
					id="hero"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.25 }}
					variants={sectionVariants}
				>
					<Hero />
				</motion.div>

				<motion.div
					id="experience"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.25 }}
					variants={sectionVariants}
				>
					<Experience />
				</motion.div>

				<motion.div
					id="projects"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.25 }}
					variants={sectionVariants}
				>
					<Projects />
				</motion.div>

				<motion.div
					id="contact"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.25 }}
					variants={sectionVariants}
				>
					<Contact />
				</motion.div>
			</main>
		</>
	);
}
