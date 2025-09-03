import Head from "next/head";
import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundScrollEffect from "@/components/BackgroundScrollEffect";

export default function App({ Component, pageProps }) {
	return (
		<>
			<BackgroundScrollEffect />
			{/* Here’s the magic */}
			<CustomCursor />
			<Component {...pageProps} />
		</>
	);
}
