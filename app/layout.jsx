import "./globals.css";
import { GeistSans } from "geist/font/sans";

const font = GeistSans;

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<link rel="icon" href="/assets/logo.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className={font.className}>{children}</body>
		</html>
	);
}
