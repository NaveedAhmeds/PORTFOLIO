import React from "react";
import { Code, GitBranch, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialCard() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileHover={{
				scale: 1.03,
				boxShadow: "0 8px 30px rgba(59, 130, 246, 0.6)",
			}}
			style={{
				position: "relative",
				borderRadius: "1rem",
				padding: "2rem",
				background: "rgba(255, 255, 255, 0.1)",
				backdropFilter: "blur(15px)",
				WebkitBackdropFilter: "blur(15px)",
				border: "1.5px solid rgba(255, 255, 255, 0.3)",
				boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
				color: "white",
				maxWidth: "700px",
				margin: "0 auto",
				cursor: "pointer",
			}}
		>
			{/* Header */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "1.5rem",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
					<div
						style={{
							width: "56px",
							height: "56px",
							background:
								"linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
							borderRadius: "0.75rem",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontWeight: "700",
							fontSize: "1.5rem",
							color: "white",
							userSelect: "none",
						}}
					>
						PAR
					</div>
					<div>
						<h3
							style={{
								fontSize: "1.75rem",
								fontWeight: "700",
								margin: 0,
								fontFamily: "'Cinzel', serif",
							}}
						>
							QA Automation Engineer
						</h3>
						<p
							style={{
								color: "#60a5fa", // Tailwind blue-400
								fontWeight: "600",
								marginTop: "0.25rem",
								fontFamily: "'Neue Montreal', sans-serif",
							}}
						>
							PAR Technology • 4 months Co-op
						</p>
					</div>
				</div>

				<div
					style={{
						backgroundColor: "#d1fae5", // Tailwind green-100
						color: "#065f46", // Tailwind green-800
						padding: "0.25rem 0.75rem",
						borderRadius: "9999px",
						fontSize: "0.85rem",
						fontWeight: "600",
						userSelect: "none",
					}}
				>
					Featured Role
				</div>
			</div>

			{/* Achievements */}
			<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
				{/* Automation Development */}
				<div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
					<div
						style={{
							backgroundColor: "#bfdbfe", // Tailwind blue-200
							borderRadius: "9999px",
							width: "32px",
							height: "32px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexShrink: 0,
						}}
					>
						<Code size={16} color="#2563eb" />
					</div>
					<div>
						<h4
							style={{
								margin: 0,
								fontWeight: "700",
								color: "white",
								fontFamily: "'Neue Montreal', sans-serif",
							}}
						>
							Automation Development
						</h4>
						<p
							style={{
								color: "rgba(255,255,255,0.8)",
								marginTop: "0.25rem",
								fontFamily: "'Neue Montreal', sans-serif",
								lineHeight: 1.4,
							}}
						>
							Developed comprehensive automation scripts to test the POS
							(Point-of-Sale) system, ensuring reliability and performance
							across multiple scenarios.
						</p>
					</div>
				</div>

				{/* CI/CD Pipeline Implementation */}
				<div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
					<div
						style={{
							backgroundColor: "#ddd6fe", // Tailwind purple-200
							borderRadius: "9999px",
							width: "32px",
							height: "32px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexShrink: 0,
						}}
					>
						<GitBranch size={16} color="#7c3aed" />
					</div>
					<div>
						<h4
							style={{
								margin: 0,
								fontWeight: "700",
								color: "white",
								fontFamily: "'Neue Montreal', sans-serif",
							}}
						>
							CI/CD Pipeline Implementation
						</h4>
						<p
							style={{
								color: "rgba(255,255,255,0.8)",
								marginTop: "0.25rem",
								fontFamily: "'Neue Montreal', sans-serif",
								lineHeight: 1.4,
							}}
						>
							Designed and implemented Jenkins pipelines to automate test script
							execution during regression testing, delivering faster feedback
							cycles and improved CI/CD efficiency.
						</p>
					</div>
				</div>

				{/* Impact & Results */}
				<div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
					<div
						style={{
							backgroundColor: "#d1fae5", // Tailwind green-100
							borderRadius: "9999px",
							width: "32px",
							height: "32px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexShrink: 0,
						}}
					>
						<Zap size={16} color="#15803d" />
					</div>
					<div>
						<h4
							style={{
								margin: 0,
								fontWeight: "700",
								color: "white",
								fontFamily: "'Neue Montreal', sans-serif",
							}}
						>
							Impact & Results
						</h4>
						<p
							style={{
								color: "rgba(255,255,255,0.8)",
								marginTop: "0.25rem",
								fontFamily: "'Neue Montreal', sans-serif",
								lineHeight: 1.4,
							}}
						>
							Increased testing coverage, reduced manual testing overhead, and
							established robust quality assurance processes that enhanced
							overall product reliability.
						</p>
					</div>
				</div>
			</div>

			{/* Technologies Used */}
			<div
				style={{
					marginTop: "2rem",
					paddingTop: "1.5rem",
					borderTop: "1px solid rgba(255, 255, 255, 0.2)",
					display: "flex",
					flexWrap: "wrap",
					gap: "0.5rem",
					fontFamily: "'Neue Montreal', sans-serif",
				}}
			>
				{[
					"Jenkins",
					"Automation Testing",
					"POS Systems",
					"CI/CD",
					"Quality Assurance",
				].map((tech) => (
					<span
						key={tech}
						style={{
							padding: "0.3rem 0.8rem",
							background: "rgba(59, 130, 246, 0.1)", // blue-500 10% opacity
							color: "#3b82f6",
							borderRadius: "9999px",
							fontSize: "0.85rem",
							fontWeight: "600",
							userSelect: "none",
						}}
					>
						{tech}
					</span>
				))}
			</div>
		</motion.div>
	);
}
