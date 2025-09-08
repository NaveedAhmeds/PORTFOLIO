import { useRef, useState } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from "framer-motion";
import styles from "./Projects.module.css";

const philosophyQuotes = [
	"“Simplicity is the ultimate sophistication.” – Leonardo da Vinci",
	"“The details are not the details. They make the design.” – Charles Eames",
	"“The unexamined life is not worth living.” – Socrates",
];

const projects = [
	{
		title: "D.A.V.E",
		description:
			"Seamless PDF-DOCX conversion, Python/Tkinter desktop utility.",
		about:
			"A desktop app that converts PDFs to DOCX and vice versa for document-heavy workflows. Built with Python and Tkinter, focusing on clean UI and reliable performance.",
		image: "/Images/dave.jpg",
		video: "https://www.youtube.com/embed/hCChO2X6vrk?autoplay=1&mute=1&loop=1",
		link: "https://github.com/NaveedAhmeds/DAVE",
	},
	{
		title: "Historian",
		description: "Personal history and journaling web application.",
		about:
			"A full-stack web app for journaling and historical note tracking. Responsive, sleek UI, and uses a modern database backend.",
		image: "/Images/Historian.jpg",
		video:
			"https://www.youtube.com/embed/6b-zPEc0Ob8?si=Zd0tcCq2aD_Ew5tp&autoplay=1&mute=1&loop=1",
		link: "https://github.com/NaveedAhmeds/Historian",
	},
	{
		title: "Matrix Auto Login",
		description: "Python automation for secure Matrix account login.",
		about:
			"Automates the login process for Matrix accounts using Python scripts with error handling and secure credential management.",
		image: "/Images/matrix.jpg",
		video: "",
		link: "https://github.com/NaveedAhmeds/matrixAutoLogin",
	},
	{
		title: "Tic Tac Toe",
		description: "OOP-focused C++ terminal game.",
		about:
			"A fun C++ terminal Tic Tac Toe game with object-oriented structure, error handling, and AI opponent for single-player mode.",
		image: "/Images/3.webp",
		video:
			"https://www.youtube.com/embed/KeIpPV6h8CE?autoplay=1&mute=1&loop=1&playlist=KeIpPV6h8CE",
		link: "https://github.com/NaveedAhmeds/Tic-Tac-Toe-Game",
	},
	{
		title: "Music Streaming Web App",
		description: "Mobile web app, dynamic artist/song display.",
		about:
			"A fully responsive streaming platform built with modern JavaScript frameworks. Auto-updating playlists, mood-based recommendations, and smooth UI transitions.",
		image: "/Images/2.png",
		video:
			"https://www.youtube.com/embed/uVtk1rjVCSg?autoplay=1&mute=1&loop=1&playlist=uVtk1rjVCSg",
		link: "https://github.com/NaveedAhmeds/Streamer",
	},
];

export default function Projects() {
	const [selected, setSelected] = useState(null);
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

	const quote =
		philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)];

	return (
		<section ref={sectionRef} className={styles.projectsSection}>
			{/* Background */}
			<motion.div
				className={styles.animatedBg}
				style={{
					opacity: bgOpacity,
					y: bgY,
				}}
				aria-hidden
			/>

			{/* Quote & Title */}
			<motion.p
				className={styles.philosophyQuote}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				viewport={{ once: true }}
			>
				{quote}
			</motion.p>

			<motion.h2
				className={styles.sectionTitle}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				Projects
			</motion.h2>

			{/* Projects Grid */}
			<div className={styles.projectsGrid}>
				{projects.map((project, idx) => (
					<motion.div
						key={project.title}
						className={styles.projectCard}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: idx * 0.1 }}
						viewport={{ once: true }}
						whileHover={{
							y: -4,
							scale: 1.03,
							boxShadow: "0 6px 30px rgba(255, 255, 255, 0.05)",
						}}
						onClick={() => setSelected(project)}
					>
						<img
							src={project.image}
							alt={`${project.title} thumbnail`}
							className={styles.projectImage}
							loading="lazy"
						/>
						<div className={styles.projectText}>
							<h3 className={styles.cardTitle}>{project.title}</h3>
							<p className={styles.cardDesc}>{project.description}</p>
							<p className={styles.cardAbout}>{project.about}</p>
						</div>

						<div className={styles.clickDemoLabel}>Click to see demo</div>
					</motion.div>
				))}
			</div>

			{/* Modal */}
			<AnimatePresence>
				{selected && (
					<motion.div
						className={styles.modalBackdrop}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelected(null)}
					>
						<motion.div
							className={styles.modalContent}
							initial={{ scale: 0.9, opacity: 0, y: 80 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 120 }}
							transition={{ type: "spring", stiffness: 200, damping: 25 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className={styles.closeButton}
								onClick={() => setSelected(null)}
							>
								×
							</button>
							<h3 className={styles.modalTitle}>{selected.title}</h3>
							<p className={styles.modalDesc}>{selected.about}</p>
							{selected.video ? (
								<div className={styles.videoWrapper}>
									<iframe
										src={selected.video}
										title={`${selected.title} demo video`}
										frameBorder="0"
										allow="autoplay; encrypted-media"
										allowFullScreen
									/>
								</div>
							) : (
								<div className={styles.videoWrapperPlaceholder}>
									<span>No Demo Video</span>
								</div>
							)}
							<div className={styles.modalButtonContainer}>
								<a
									href={selected.link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.githubLink}
								>
									View Code on GitHub
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
