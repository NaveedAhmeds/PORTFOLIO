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
		image: "/Images/1.png",
		video: "https://www.youtube.com/embed/hCChO2X6vrk?autoplay=1",
		link: "https://github.com/NaveedAhmeds/DAVE",
	},
	{
		title: "Historian",
		description:
			"Art history web app with powerful search and user authentication.",
		about:
			"A web application that allows users to explore and filter artworks by various criteria. Features user authentication with JWT for saving favorites.",
		image: "/Images/3.png",
		video: "",
		link: "https://github.com/NaveedAhmeds/Historian",
	},
	{
		title: "Matrix Auto Login",
		description:
			"Automated SSH login to Seneca Matrix server using stored credentials.",
		about:
			"Scripts that automate the SSH login process to the Seneca Matrix server, prompting user confirmation before login. Compatible with Unix-like and Windows systems.",
		image: "/Images/2.png",
		video: "",
		link: "https://github.com/NaveedAhmeds/matrixAutoLogin",
	},
	{
		title: "JAF Logistics Website",
		description: "Modern Next.js + Tailwind CSS logistics platform UI.",
		about:
			"A sleek logistics site inspired by Apple's design principles. Fully responsive, dark mode support, animations, and a backend API for real-time updates.",
		image: "/Images/3.png",
		video: "",
		link: "https://github.com/NaveedAhmeds/JAF-Website",
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

	const quote =
		philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)];

	return (
		<section ref={sectionRef} className={styles.projectsSection}>
			{/* Animated coding background */}
			<motion.div
				className={styles.codeBg}
				style={{
					opacity: 1,
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
						transition={{ duration: 0.4, delay: idx * 0.15 }}
						viewport={{ once: true }}
						whileHover={{
							y: -4,
							scale: 1.02,
							transition: { duration: 0.15 },
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
									View on GitHub
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
