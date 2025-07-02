import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
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
			<Component {...pageProps} />
		</>
	);
}
