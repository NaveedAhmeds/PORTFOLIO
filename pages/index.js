import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<Hero />
				<ExperienceSection />
				<Projects />
				<Experience />
				<Contact />
			</main>
		</>
	);
}
