import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<Link
				href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
				rel="stylesheet"
			></Link>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
