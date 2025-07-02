// components/Contact.js
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Hey ${formData.name}, your message has been sent! 🚀`);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<section id="contact" className={styles.contactSection}>
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit} className={styles.contactForm}>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type="submit">Send Message</button>
			</form>
		</section>
	);
}
