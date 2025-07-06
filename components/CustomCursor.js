import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const addMouseListeners = () => {
			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseenter", () => setVisible(true));
			document.addEventListener("mouseleave", () => setVisible(false));
		};

		const removeMouseListeners = () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseenter", () => setVisible(true));
			document.removeEventListener("mouseleave", () => setVisible(false));
		};

		const onMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		addMouseListeners();
		return () => removeMouseListeners();
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: position.y,
				left: position.x,
				width: 12,
				height: 12,
				backgroundColor: "white",
				borderRadius: "50%",
				pointerEvents: "none",
				transform: "translate(-50%, -50%)",
				boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.7)",
				transition: "background-color 0.2s ease",
				zIndex: 9999,
				opacity: visible ? 1 : 0,
			}}
		/>
	);
}
