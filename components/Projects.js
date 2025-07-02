// components/Projects.js
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
	{
		title: "Food Safety AI Platform",
		description:
			"AI-driven digital platform ensuring food safety, traceability, and transparency.",
		link: "https://github.com/NaveedAhmeds/LookMeUp",
	},
	{
		title: "File Converter App",
		description: "Python & Tkinter app for seamless PDF-DOCX conversions.",
		link: "https://github.com/NaveedAhmeds/FileConverterApp",
	},
	{
		title: "Music Streaming Web App",
		description:
			"Mobile-responsive web app with dynamic artist and song content.",
		link: "https://github.com/NaveedAhmeds/MusicStreamer",
	},
];

export default function Projects() {
	return (
		<section id="projects" className={styles.projectsSection}>
			<h2>Projects</h2>
			<div className={styles.projectsGrid}>
				{projects.map(({ title, description, link }) => (
					<motion.a
						key={title}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.projectCard}
						whileHover={{
							scale: 1.05,
							boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
						}}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<h3>{title}</h3>
						<p>{description}</p>
					</motion.a>
				))}
			</div>
		</section>
	);
}
