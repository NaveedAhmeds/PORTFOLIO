// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google Fonts loaded once for the whole app */}
				<link
					href="https://fonts.googleapis.com/css2?family=Neue+Montreal&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
