import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
	const [bgOpaque, setBgOpaque] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY;
			setBgOpaque(scrollTop >= 400);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section
			style={{
				"--bg-color": bgOpaque ? "rgba(0,0,0,0.85)" : "transparent",
				"--blur": bgOpaque ? "10px" : "0px",
				"--grid-opacity": bgOpaque ? 0.1 : 0,
				minHeight: "100vh",
				padding: "4rem 1rem",
				color: "white",
				fontFamily: "'Neue Montreal', sans-serif",
				position: "relative",
				overflow: "hidden",
				backgroundColor: "var(--bg-color)",
				backdropFilter: "blur(var(--blur))",
				WebkitBackdropFilter: "blur(var(--blur))",
				transition: "all 0.6s ease",
				backgroundImage: `radial-gradient(2px 2px at 10px 10px, rgba(255,255,255,var(--grid-opacity)), transparent),
                            radial-gradient(2px 2px at 30px 30px, rgba(255,255,255,var(--grid-opacity)), transparent)`,
				backgroundSize: "40px 40px",
				boxShadow: bgOpaque ? "inset 0 0 100px rgba(255,255,255,0.05)" : "none",
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

			<div style={{ marginBottom: "5rem" }}>
				<TestimonialCard />
			</div>

			<ExperienceTimeline />
		</section>
	);
}
