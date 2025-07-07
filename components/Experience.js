import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
	const [bgOpaque, setBgOpaque] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			setBgOpaque(scrollTop >= 740); // when scrollTop hits 837 or more, bgOpaque = true
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section
			style={{
				minHeight: "100vh",
				padding: "4rem 1rem",
				color: "white",
				fontFamily: "'Neue Montreal', sans-serif",
				position: "relative",
				overflow: "hidden",
				backgroundColor: bgOpaque ? "#000" : "transparent",
				transition: "background-color 0.5s ease",
				backgroundImage: bgOpaque
					? `radial-gradient(2px 2px at 10px 10px, rgba(255,255,255,0.15), transparent),
             radial-gradient(2px 2px at 30px 30px, rgba(255,255,255,0.15), transparent)`
					: "none",
				backgroundSize: "40px 40px",
			}}
		>
			<div
				style={{
					maxWidth: "900px",
					margin: "0 auto",
					textAlign: "center",
					marginBottom: "4rem",
				}}
			>
				<h2
					style={{
						fontSize: "3rem",
						fontWeight: "700",
						marginBottom: "0.5rem",
						fontFamily: "'Cinzel', serif",
					}}
				>
					Professional Experience
				</h2>
				<p
					style={{
						fontSize: "1.15rem",
						color: "rgba(255, 255, 255, 0.75)",
						maxWidth: "600px",
						margin: "0 auto",
					}}
				>
					A journey through technology and design, building solutions that make
					a difference.
				</p>
			</div>

			{/* Featured testimonial */}
			<div style={{ marginBottom: "5rem" }}>
				<TestimonialCard />
			</div>

			{/* Timeline */}
			<ExperienceTimeline />
		</section>
	);
}
