import Head from "next/head";
import "@/styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import BackgroundScrollEffect from "@/components/BackgroundScrollEffect";

export default function App({ Component, pageProps }) {
	return (
		<>
			<BackgroundScrollEffect />
			<Head>
				{/* Preload any fonts here if needed */}
				<link
					href="https://fonts.googleapis.com/css2?family=Neue+Montreal&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
					rel="stylesheet"
				/>
			</Head>

			{/* Here’s the magic */}
			<CustomCursor />

			<Component {...pageProps} />
		</>
	);
}
