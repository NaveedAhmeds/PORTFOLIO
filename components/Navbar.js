import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	const navLinks = [
		{ href: "#ExperienceTimeline.js", label: "Experience" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	const scrollToTop = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	//Navbar - Porgress Listener
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = Math.min(scrollTop / docHeight, 1);

			setScrollProgress(progress);
			// Keep any other scroll-dependent stuff you want, like nav bg or classes
			setScrolled(scrollTop > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
				initial={{ y: -80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 80, damping: 15 }}
			>
				<div className={styles.navContent}>
					{/* Wrap logo and subtitle in container */}
					<div className={styles.logoWrapper}>
						<a href="#" className={styles.logo} onClick={scrollToTop}>
							Naveed
						</a>
						<div className={styles.subtitle}>UI/UX Designer/Developer</div>
					</div>

					<ul className={styles.navLinks}>
						{navLinks.map(({ href, label }) => (
							<li key={href}>
								<a href={href}>{label}</a>
							</li>
						))}
					</ul>

					<div
						className={styles.hamburger}
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
						aria-expanded={menuOpen}
					>
						<span />
						<span />
						<span />
					</div>

					<AnimatePresence>
						{menuOpen && (
							<motion.ul
								className={styles.mobileMenu}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
							>
								{navLinks.map(({ href, label }) => (
									<li key={href} onClick={() => setMenuOpen(false)}>
										<a href={href}>{label}</a>
									</li>
								))}
							</motion.ul>
						)}
					</AnimatePresence>
				</div>

				<div className={styles.progressContainer}>
					<div
						className={styles.progressBar}
						style={{
							transform: `scaleX(${scrollProgress})`,
							transformOrigin: "left",
						}}
					></div>
				</div>
			</motion.nav>
		</>
	);
}
