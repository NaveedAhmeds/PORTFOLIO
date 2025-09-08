import React from "react";
import { Code, GitBranch, Zap } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./TestimonialCard.module.css"; // Use CSS modules or adjust accordingly

export default function TestimonialCard() {
	return (
		<motion.div
			className={styles.testimonialCard}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			whileHover={{
				scale: 1.03,
				rotateX: 4,
				rotateY: 6,
				boxShadow: "0 10px 40px rgba(59, 130, 246, 0.7)",
			}}
			whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
		>
			{/* Header */}
			<div className={styles.testimonialCardHeader}>
				<div className={styles.testimonialCardHeaderLeft}>
					<div className={styles.avatar}>PAR</div>
					<div>
						<h3 className={styles.testimonialCardRole}>
							QA Automation Engineer
						</h3>
						<p className={styles.testimonialCardCompany}>
							PAR Technology &bull; 4 months Co-op
						</p>
					</div>
				</div>
				<div className={styles.testimonialCardBadge}>Featured Role</div>
			</div>

			{/* Achievements */}
			<div className={styles.testimonialCardAchievements}>
				<div className={styles.testimonialCardAchievement}>
					<div className={styles.testimonialCardIconWrapper}>
						<Code size={16} color="#2563eb" />
					</div>
					<div>
						<h4 className={styles.testimonialCardAchievementTitle}>
							Automation Development
						</h4>
						<p className={styles.testimonialCardAchievementDesc}>
							Developed comprehensive automation scripts to test the POS
							(Point-of-Sale) system, ensuring reliability and performance
							across multiple scenarios.
						</p>
					</div>
				</div>
				<div className={styles.testimonialCardAchievement}>
					<div className={styles.testimonialCardIconWrapper}>
						<GitBranch size={16} color="#7c3aed" />
					</div>
					<div>
						<h4 className={styles.testimonialCardAchievementTitle}>
							CI/CD Pipeline Implementation
						</h4>
						<p className={styles.testimonialCardAchievementDesc}>
							Designed and implemented Jenkins pipelines to automate test script
							execution during regression testing, delivering faster feedback
							cycles and improved CI/CD efficiency.
						</p>
					</div>
				</div>
				<div className={styles.testimonialCardAchievement}>
					<div className={styles.testimonialCardIconWrapper}>
						<Zap size={16} color="#15803d" />
					</div>
					<div>
						<h4 className={styles.testimonialCardAchievementTitle}>
							Impact & Results
						</h4>
						<p className={styles.testimonialCardAchievementDesc}>
							Increased testing coverage, reduced manual testing overhead, and
							established robust quality assurance processes that enhanced
							overall product reliability.
						</p>
					</div>
				</div>
			</div>

			{/* Technologies Used */}
			<div className={styles.testimonialCardTech}>
				{[
					"Jenkins",
					"Automation Testing",
					"POS Systems",
					"CI/CD",
					"Quality Assurance",
				].map((tech) => (
					<span key={tech} className={styles.testimonialCardTechTag}>
						{tech}
					</span>
				))}
			</div>
		</motion.div>
	);
}
