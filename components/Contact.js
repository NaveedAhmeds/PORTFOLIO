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
	const [loading, setLoading] = useState(false);

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setSuccess(true);
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => setSuccess(false), 4000);
			} else {
				const data = await res.json();
				alert(data.error || "Something went wrong!");
			}
		} catch (err) {
			alert("Failed to send message, try again later.");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="contact" className={styles.contactSection}>
			<h2 className={styles.heading}>Contact Me</h2>
			<div className={`${styles.bgGlass} ${styles.contactFormContainer}`}>
				{/* Cool SVG envelope */}
				<div className={styles.icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v.217l-8 5-8-5V4zm0 1.383v6.634l5.803-3.627L0 5.383zm6.761 3.397L16 12.017V5.383l-5.803 3.607-3.436 2.092a.5.5 0 01-.562 0L6.761 8.78zM16 13.017V13a2 2 0 01-2 2H2a2 2 0 01-2-2v-.017l5.803-3.627L16 13.017z" />
					</svg>
				</div>

				<form
					onSubmit={handleSubmit}
					className={styles.contactForm}
					autoComplete="off"
				>
					<div className={styles.inputGroup}>
						<input
							id="name"
							type="text"
							name="name"
							placeholder=" "
							value={formData.name}
							onChange={handleChange}
							className={styles.input}
							required
						/>
						<label htmlFor="name" className={styles.floatingLabel}>
							Name
						</label>
					</div>

					<div className={styles.inputGroup}>
						<input
							id="email"
							type="email"
							name="email"
							placeholder=" "
							value={formData.email}
							onChange={handleChange}
							className={styles.input}
							required
						/>
						<label htmlFor="email" className={styles.floatingLabel}>
							Email
						</label>
					</div>

					<div className={styles.inputGroup}>
						<textarea
							id="message"
							name="message"
							placeholder=" "
							value={formData.message}
							onChange={handleChange}
							className={styles.textarea}
							required
						/>
						<label htmlFor="message" className={styles.floatingLabel}>
							Message
						</label>
					</div>

					<button type="submit" className={styles.button} disabled={loading}>
						{loading ? "Sending..." : "Send Message"}
					</button>

					{success && (
						<div className={styles.successMessage}>
							Thank you! Your message has been sent.
						</div>
					)}
				</form>
			</div>
		</section>
	);
}
