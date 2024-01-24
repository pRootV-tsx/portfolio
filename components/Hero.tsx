"use client"
import Image from "next/image"
import React, { useState } from "react"
import profile from "@/public/profile.png"
import { views } from "@/constants/constants"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const onClickHandler = () => {
		setIsClicked(true)
	}

	return (
		<div>
			<div className="flex flex-col items-start gap-1 mt-12">
				<h1 className="text-3xl font-bold dark:bg-gradient-to-r from-[#00ff87] to-[#60efff] inline-block dark:text-transparent bg-clip-text">
					Pruthviraj Chauhan
				</h1>
				<p className="hover:underline underline-offset-4 transition-all duration-500 ease-linear cursor-pointer">
					I design and code for the internet
				</p>
			</div>
			<div className="flex flex-col items-start gap-2 mt-6">
				<div className="flex items-center justify-center gap-4">
					<Image
						src={profile}
						alt="Pruthviraj Profile photo"
						onMouseEnter={onClickHandler}
						onMouseLeave={() => setIsClicked(false)}
						className={`w-32 rounded-2xl hover:-rotate-12 transition-all duration-300 ease-linear  shadow-xl aspect-square ${
							isClicked ? "scale-110" : ""
						}`}
					/>
					<ul className="flex flex-col gap-2">
						{views.map(view => (
							<li
								onMouseEnter={() => setIsHovered(false)}
								onMouseLeave={() => setIsHovered(true)}
								key={view.id}
								className={`flex items-center cursor-pointer transition-all duration-100 ease-linear hover:text-gray-700 dark:hover:text-gray-100  gap-2 ${
									isHovered
										? "text-gray-700 dark:text-gray-100 "
										: "text-gray-500 dark:text-gray-400"
								} `}>
								<div className="">{view.icon}</div>
								<p className="">
									{view.views} {view.title} views{" "}
								</p>
							</li>
						))}
					</ul>
				</div>
				<p className="text-gray-500 dark:text-gray-100 mt-6">
					P-root-v is a designer, developer, and content creator. Designing minimalistic digital experiences. Explore graphic design, programming tips and tricks on my YouTube channel.
				</p>
				<Link className="group" href={"/about"}>
					<Button
						variant={"link"}
						className="p-0 text-zinc-500 dark:text-zinc-300  group">
						More about me
						<ArrowRight
							className=" opacity-0 group-hover:opacity-100  group-hover:translate-x-1  transition-all duration-300 ease-linear "
							size={16}
						/>
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Hero
