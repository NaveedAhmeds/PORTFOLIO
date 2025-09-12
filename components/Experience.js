import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ExperienceTimeline from "./ExperienceTimeline";
import styles from "./Experience.module.css";

export default function Experience() {
	const [bgOpaque, setBgOpaque] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			setBgOpaque(scrollTop >= 600);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section className={styles.experienceSection}>
			{/* Background Overlay */}
			<div
				className={styles.experienceOverlay}
				style={{ opacity: bgOpaque ? 0.85 : 0 }}
			/>

			{/* Content */}
			<div className={styles.experienceContent}>
				<div className={styles.experienceHeader}>
					<h2>Professional Experience</h2>
					<p>
						A journey through technology and design, building solutions that
						make a difference.
					</p>
				</div>

				<div className={styles.testimonialWrapper}>
					<TestimonialCard />
				</div>

				<div className={styles.timelineWrapper}>
					<ExperienceTimeline />
				</div>
			</div>
		</section>
	);
}
