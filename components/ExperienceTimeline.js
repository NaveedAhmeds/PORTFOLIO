import React from "react";
import { Code, Palette, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
	{
		title: "Web Developer",
		company: "WOW Kebabish",
		type: "Freelance",
		duration: "3 months",
		description:
			"Built and maintained the restaurant's website focusing on performance and responsiveness.",
		icon: Globe,
		color: "#10B981",
		details: [
			"Developed responsive web application",
			"Optimized site performance and loading speeds",
			"Implemented mobile-first design",
		],
	},
	{
		title: "Graphic Designer",
		company: "Sahib",
		type: "Part-Time",
		duration: "5 months",
		description:
			"Designed branding assets and promotional material for digital and print media.",
		icon: Palette,
		color: "#8B5CF6",
		details: [
			"Created comprehensive brand identity",
			"Designed print and digital marketing materials",
			"Developed consistent visual language",
		],
	},
	{
		title: "Graphic Designer",
		company: "WOW Kebabish",
		type: "Part-Time",
		duration: "8 months",
		description:
			"Created engaging social media content, menus, posters, and promotional materials.",
		icon: Code,
		color: "#3B82F6",
		details: [
			"Designed social media content strategy",
			"Created menu designs and promotional posters",
			"Managed brand consistency across platforms",
		],
	},
];

const philosopherQuotes = [
	"“The unexamined life is not worth living.” – Socrates",
	"“I think therefore I am.” – René Descartes",
	"“Happiness depends upon ourselves.” – Aristotle",
	"“He who has a why to live can bear almost any how.” – Friedrich Nietzsche",
	"“Man is condemned to be free.” – Jean-Paul Sartre",
	"“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
	"“Knowing yourself is the beginning of all wisdom.” – Aristotle",
	"“To be is to be perceived.” – George Berkeley",
];

const cardVariants = {
	offscreen: { opacity: 0, y: 40 },
	onscreen: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", bounce: 0.25, duration: 0.5 },
	},
};

const quoteVariants = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 50, damping: 12, duration: 0.7 },
	},
};

export default function ExperienceTimeline() {
	return (
		<div
			style={{
				position: "relative",
				padding: "3rem 1rem",
				maxWidth: 1000,
				margin: "0 auto",
				background: "#0d0d0d", // Apple-style black coding vibe
				borderRadius: "1rem",
				overflow: "hidden",
			}}
		>
			{/* Timeline Line */}
			<div
				aria-hidden="true"
				style={{
					position: "absolute",
					top: 0,
					left: "50%",
					transform: "translateX(-50%)",
					width: 4,
					height: "100%",
					background: "linear-gradient(to bottom, #3B82F6, #8B5CF6, #10B981)",
					borderRadius: 2,
					zIndex: 0,
					boxShadow: "0 0 12px rgba(99, 102, 241, 0.5)",
				}}
			/>

			{experiences.map((exp, i) => {
				const isLeft = i % 2 === 0;
				const Icon = exp.icon;
				const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
				const quote = philosopherQuotes[i % philosopherQuotes.length];

				return (
					<motion.article
						ref={ref}
						key={i}
						initial="offscreen"
						animate={inView ? "onscreen" : "offscreen"}
						variants={cardVariants}
						style={{
							display: "flex",
							flexDirection: isLeft ? "row" : "row-reverse",
							alignItems: "flex-start",
							justifyContent: "space-between",
							marginBottom: "4rem",
							position: "relative",
							zIndex: 1,
							flexWrap: "wrap",
						}}
						whileHover={{
							rotateX: -3,
							rotateY: isLeft ? 3 : -3,
							scale: 1.03,
							transition: { type: "spring", stiffness: 300, damping: 18 },
						}}
						whileTap={{ scale: 0.97 }}
					>
						{/* Dot */}
						<div
							aria-hidden="true"
							style={{
								position: "absolute",
								top: "1.5rem",
								left: "50%",
								transform: "translateX(-50%)",
								width: 16,
								height: 16,
								backgroundColor: exp.color,
								borderRadius: "50%",
								border: "3px solid #0d0d0d",
								boxShadow: `0 0 8px ${exp.color}88`,
								zIndex: 2,
							}}
						/>

						{/* Card */}
						<section
							role="region"
							tabIndex={0}
							style={{
								background: "#1b1b1b",
								borderRadius: "1rem",
								padding: "1.5rem 2rem",
								boxShadow: "0 6px 25px rgba(0,0,0,0.6)",
								maxWidth: "45%",
								cursor: "default",
								userSelect: "none",
								outline: "none",
								transition: "all 0.25s ease",
								flex: "1 1 100%",
								marginBottom: "1rem",
							}}
						>
							<header
								style={{
									display: "flex",
									alignItems: "center",
									gap: "1rem",
									marginBottom: "0.75rem",
									flexWrap: "wrap",
								}}
							>
								<div
									style={{
										backgroundColor: exp.color + "33",
										padding: "0.5rem",
										borderRadius: "0.5rem",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: 40,
										height: 40,
									}}
								>
									<Icon size={22} color={exp.color} />
								</div>
								<div>
									<h4
										style={{
											margin: 0,
											fontWeight: 700,
											color: "#fff",
											fontFamily: "'Cinzel', serif",
											fontSize: "1.3rem",
										}}
									>
										{exp.title}
									</h4>
									<p
										style={{
											margin: 0,
											fontWeight: 600,
											color: exp.color,
											fontFamily: "'Neue Montreal', sans-serif",
											fontSize: "0.9rem",
										}}
									>
										{exp.company} &bull; {exp.type}
									</p>
								</div>
							</header>
							<p
								style={{
									color: "rgba(255,255,255,0.85)",
									fontFamily: "'Neue Montreal', sans-serif",
									fontSize: "1rem",
									marginBottom: "0.5rem",
								}}
							>
								{exp.description}
							</p>
							<ul
								style={{
									margin: 0,
									paddingLeft: "1rem",
									color: "rgba(255,255,255,0.7)",
									fontSize: "0.9rem",
									fontFamily: "'Neue Montreal', sans-serif",
									listStyleType: "disc",
									lineHeight: 1.4,
								}}
							>
								{exp.details.map((d, idx) => (
									<li key={idx}>{d}</li>
								))}
							</ul>
						</section>

						{/* Quote */}
						<motion.div
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							variants={quoteVariants}
							style={{
								maxWidth: "45%",
								marginLeft: isLeft ? "2rem" : "0",
								marginRight: isLeft ? "0" : "2rem",
								color: "#fff",
								fontStyle: "italic",
								fontFamily: "'Cinzel', serif",
								fontSize: "1.1rem",
								alignSelf: "center",
								userSelect: "none",
								pointerEvents: "none",
								padding: "1rem",
								borderRadius: "1rem",
								background: "rgba(255,255,255,0.05)",
								boxShadow: isLeft
									? "4px 4px 12px rgba(0,0,0,0.25)"
									: "-4px 4px 12px rgba(0,0,0,0.25)",
								backdropFilter: "blur(6px)",
								WebkitBackdropFilter: "blur(6px)",
								flex: "1 1 100%",
								marginTop: "1rem",
							}}
							aria-hidden="true"
						>
							{quote}
						</motion.div>
					</motion.article>
				);
			})}
		</div>
	);
}
