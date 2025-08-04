import { useEffect } from "react";

export default function BackgroundScrollEffect() {
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxTranslate = -100; // Negative means background moves UP by max 100px
			const translateY = Math.max(scrollTop * -0.5, maxTranslate);

			document.body.style.setProperty("--bg-translateY", `${translateY}px`);
		};

		// Trigger once in case user is already scrolled
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return null;
}
