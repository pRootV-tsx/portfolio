import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "P-√-v-tsx | Creative Web Developer",
	description: "Personal website of Pruthviraj Chauhan ",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" className="rounded-lg" sizes="any" />
			<body className={`${inter.className} w-full relative`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<main>
						<Navbar />
						{children}
					</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
