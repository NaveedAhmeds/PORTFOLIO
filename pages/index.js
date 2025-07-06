import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				{/* Reorientation required */}
				<Hero />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
