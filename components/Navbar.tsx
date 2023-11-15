"use client"

import React from "react"
import { ModeToggle } from "./theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { aboutImages, navigation } from "@/constants/constants"
import { toast } from "./ui/use-toast"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

export const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav className="section flex-row  !items-center justify-between">
			{/* Logo */}
			<Link href="/" className="flex gap-3 items-center justify-center ">
				<Image
					className="w-10 h-10 rounded-lg"
					src={aboutImages[0].image}
					alt={aboutImages[0].alt}
				/>
				<div className="flex flex-col text-sm items-start justify-center">
					<pre className="font-semibold select-none">P-√-v-tsx</pre>
					<p className="md:hidden text-sm text-zinc-400">
						Creative Web Developer
					</p>
				</div>
			</Link>
			<div className="flex gap-2 items-center justify-center ">
				{/* Menu */}
				<ul className="hidden  md:flex gap-2 items-center justify-center ">
					{navigation.map((item, index) => (
						<Link key={index} href={item.link}>
							<li
								className={`hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all ease-linear p-2 rounded-md
							${pathname === item.link ? "bg-gray-100 dark:bg-zinc-800" : ""}
							`}>
								{item.title}
							</li>
						</Link>
					))}
				</ul>
				<div
					onClick={() => {
						toast({
							title: "Blogs are coming soon...",
							description:
								"I haven't blogs written recently, I have only few blogs written in my old blog. I will write blogs soon. And update blogs soon.",
						})
					}}
					className={`hover:bg-gray-100 cursor-pointer max-sm:hidden dark:hover:bg-zinc-800 transition-all flex ease-linear p-2 rounded-md
							${pathname === "/blogs" ? "bg-gray-100 dark:bg-zinc-800" : ""}
							`}>
					Blogs{" "}
					<span className="text-[14px] ml-1 rounded-lg scale-90 px-1 bg-zinc-200 dark:bg-zinc-500 ">
						soon
					</span>
				</div>
				<ModeToggle />
				{/* if mobile devices how this */}

				<div className="md:hidden">
					<MobileMenu />
				</div>
			</div>
		</nav>
	)
}
