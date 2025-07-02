import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
	return (
		<section className={styles.experienceSection}>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h2>Experience — QA Automation Engineer</h2>
				<p>
					At PAR Co-op, I worked as a QA Automation Engineer for 4 months,
					automating tests, improving reliability, and making sure software
					stayed bug-free.
				</p>
				{/* You can add more experience details here */}
			</div>
		</section>
	);
}
