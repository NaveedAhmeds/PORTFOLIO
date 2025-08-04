import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
	{
		title: "D.A.V.E",
		description: "Document Adapter & Versatile Encoder Python & Tkinter app for seamless PDF-DOCX conversions.",
		about: "A desktop app that effortlessly converts PDFs to DOCX and vice versa, improving productivity for document-heavy workflows.",
		image: "/Images/1.png",
		video: "https://www.youtube.com/embed/hCChO2X6vrk?autoplay=1",
		link: "https://github.com/NaveedAhmeds/DAVE",
	},
	{
	title: "JAF Logistics Website",
	description: "Modern logistics platform built with Next.js and Tailwind CSS.",
	about:
		"A sleek, responsive logistics website inspired by Apple's aesthetic. Built with Next.js and packed with dark mode, smooth animations, and UI polish with back-end API integrations, it's designed for a premium user experience in the world of cargo tracking and management.",
	image: "/Images/3.png", 
	video: "", 
	link: "https://github.com/NaveedAhmeds/JAF-Website"
	},
	{
	title: "Tic Tac Toe",
	description: "A C++ command-line game using OOP principles.",
	about:
		"A terminal-based Tic Tac Toe game written in C++ that showcases object-oriented programming through clear class separation, gameplay logic, and error handling.",
	image: "/Images/3.webp",
	video: "https://www.youtube.com/embed/KeIpPV6h8CE?autoplay=1&mute=1&loop=1&playlist=KeIpPV6h8CE", 
	link: "https://github.com/NaveedAhmeds/Tic-Tac-Toe-Game"
	},
	{
		title: "Music Streaming Web App",
		description:
			"Mobile-responsive web app with dynamic artist and song content.",
		about:
			"An immersive streaming platform that adapts to your mood, delivering your favorite artists and tracks seamlessly on any device.",
		image: "/Images/2.png",
		video: "https://www.youtube.com/embed/uVtk1rjVCSg?autoplay=1&mute=1&loop=1&playlist=uVtk1rjVCSg",
		link: "https://github.com/NaveedAhmeds/Streamer"
	},
	// Add 3 more projects similarly with image, about, and video
	{
		title: "Project Four",
		description: "Description for project four.",
		about: "Detailed about info for project four.",
		image: "/images/project4-thumb.jpg",
		video: "https://www.youtube.com/embed/XXXXXXXXX?autoplay=1&mute=1&loop=1&playlist=XXXXXXXXX",
		link: "#",
	},
	{
		title: "Project Five",
		description: "Description for project five.",
		about: "Detailed about info for project five.",
		image: "/images/project5-thumb.jpg",
		video: "https://www.youtube.com/embed/YYYYYYYYY?autoplay=1&mute=1&loop=1&playlist=YYYYYYYYY",
		link: "#",
	},
	{
		title: "Project Six",
		description: "Description for project six.",
		about: "Detailed about info for project six.",
		image: "/images/project6-thumb.jpg",
		video: "https://www.youtube.com/embed/ZZZZZZZZZ?autoplay=1&mute=1&loop=1&playlist=ZZZZZZZZZ",
		link: "#",
	},
];

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	const closeModal = () => setSelectedProject(null);

	return (
		<section id="projects" className={styles.projectsSection}>
			<h2>Projects</h2>
			<div className={styles.projectsGrid}>
				{projects.map(({ title, description, image }, i) => (
					<motion.div
						key={title}
						className={styles.projectCard}
						onClick={() => setSelectedProject(projects[i])}
						whileHover={{
							scale: 1.05,
							boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)",
						}}
						transition={{ type: "spring", stiffness: 300 }}
						tabIndex={0}
						role="button"
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") setSelectedProject(projects[i]);
						}}
						aria-label={`Open details for project ${title}`}
					>
						<img src={image} alt={`${title} thumbnail`} className={styles.projectImage} />
						<h3>{title}</h3>
						<p>{description}</p>
					</motion.div>
				))}
			</div>

			{/* Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						className={styles.modalBackdrop}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal}
						aria-modal="true"
						role="dialog"
						aria-labelledby="modal-title"
						aria-describedby="modal-desc"
					>
						<motion.div
							className={styles.modalContent}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className={styles.closeButton}
								onClick={closeModal}
								aria-label="Close project details"
							>
								&times;
							</button>

							<h3 id="modal-title">{selectedProject.title}</h3>
							<p id="modal-desc" className={styles.aboutText}>
								{selectedProject.about}
							</p>
							<div className={styles.videoWrapper}>
								<iframe
									src={selectedProject.video}
									title={`${selectedProject.title} demo video`}
									frameBorder="0"
									allow="autoplay; encrypted-media"
									allowFullScreen
								></iframe>
							</div>
							<a
								href={selectedProject.link}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.githubLink}
							>
								View Project
							</a>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
