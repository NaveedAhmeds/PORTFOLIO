// components/Contact.js
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccess(true);
		setFormData({ name: "", email: "", message: "" });
		setTimeout(() => setSuccess(false), 4000); // Auto-hide message
	};

	return (
		<section id="contact" className={styles.contactSection}>
			<h2 className={styles.heading}>Contact Me</h2>
			<div className={`${styles.bgGlass} ${styles.contactFormContainer}`}>
				{/* Example icon (emoji) for simplicity, replace with SVG if you wish */}
				<div className={styles.icon}>📧</div>
				<form
					onSubmit={handleSubmit}
					className={styles.contactForm}
					autoComplete="off"
				>
					<label htmlFor="name" className={styles.label}>
						Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						className={styles.input}
						required
					/>
					<label htmlFor="email" className={styles.label}>
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="you@example.com"
						value={formData.email}
						onChange={handleChange}
						className={styles.input}
						required
					/>
					<label htmlFor="message" className={styles.label}>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						className={styles.textarea}
						required
					/>
					<button type="submit" className={styles.button}>
						Send Message
					</button>
					{success && (
						<div className={styles.successMessage}>
							Thank you! Your message has been sent. 🚀
						</div>
					)}
				</form>
			</div>
		</section>
	);
}
