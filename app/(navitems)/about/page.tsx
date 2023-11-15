"use client"

import { about, aboutImages, connect, hardware } from "@/constants/constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { ArrowRight } from "lucide-react"
import React, { useState } from "react"

import profile from "@/public/profile.png"
import profile_back from "@/public/profile_black.jpg"
import Image from "next/image"
import ImageFlipper from "@/components/ImageFlipper"
const imageSources = [
	{
		src: profile,
		alt: "profile",
	},
	{
		src: profile_back,
		alt: "profile-back",
	},
]

const AboutMe = () => {
	const [isHovered, setIsHovered] = useState(true)
	const [imageIndex, setImageIndex] = useState(0)
	const [isImageHovered, setisImageHovered] = useState(false)
	const handleHover = () => {
		setImageIndex(1)
	}
	const handleImageHover = () => {
		setisImageHovered(true)
	}

	return (
		<section className=" section">
			<div className="w-full  flex flex-col gap-2 mt-6">
				<div className="flex w-full flex-col justify-between items-start">
					<h3 className="font-medium text-2xl ">About Me </h3>
					<p className="text-zinc-500">Qucik things about me</p>
				</div>
				<p>
					Some of my tools i've been obsessed with lately. From Laptop to Sleep
					No sponsors, affliates or anything. Just my personal opinion.
				</p>
			</div>

			<div className="w-full flex relative h-[20rem] ">
				<Image
					src={aboutImages[0].image}
					alt={aboutImages[0].alt}
					onMouseEnter={() => handleImageHover()}
					className={` w-60 rotate-[6deg] top-4 shadow-md  transition-all duration-300 ease-linear  aspect-square max-sm:left-[10%] max-md:left-[5%] -z-10 object-cover animate-accordion-down absolute rounded-lg ${
						isImageHovered ? "scale-110" : ""
					}}`}
				/>
				<Image
					src={aboutImages[1].image}
					alt={aboutImages[1].alt}
					className={` w-44 -rotate-12 top-4  shadow-md transition-all duration-300 ease-linear  object-cover  -z-20 absolute max-sm:left-[50%] max-md:left-[51%] left-[35%] rounded-lg ${
						isImageHovered ? "scale-110" : ""
					}`}
					onMouseEnter={() => handleImageHover()}
				/>
				<Image
					src={aboutImages[3].image}
					alt={aboutImages[3].alt}
					className={` w-52 rotate-[24deg] hidden  sm:inline-flex max-md:left-[65%]  shadow-md  transition-all duration-300 ease-linear aspect-square top-4  object-cover  -z-20 absolute left-[55%] rounded-lg `}
					onMouseEnter={() => handleImageHover()}
				/>
				<Image
					src={aboutImages[2].image}
					alt={aboutImages[2].alt}
					className={` w-52 -rotate-[12deg] shadow-md hidden  md:inline-flex  absolute  transition-all duration-300 ease-linear  aspect-square top-4  object-cover  -z-20 left-[75%] rounded-lg `}
					onMouseEnter={() => handleImageHover()}
				/>
			</div>

			<AboutSection>
				{about.map((content, idx) => {
					return (
						<div className="w-full flex md:flex-row flex-col  gap-4  items-start justify-between">
							<div className="flex items-center font-medium" key={idx}>
								{content.title}{" "}
							</div>
							<ul className="flex flex-col md:ml-6 gap-4">
								{content.content.map((content, idx2) => (
									<li className="" key={idx2}>
										{content.toString()}
									</li>
								))}
							</ul>
						</div>
					)
				})}
			</AboutSection>
			<AboutSection>
				<div className=" flex md:flex-row flex-col items-center font-medium ">
					Connect
				</div>
				<ul className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 justify-between items-start">
					{connect.map((item, idx) => (
						<li
							onMouseEnter={() => setIsHovered(false)}
							onMouseLeave={() => setIsHovered(true)}
							key={idx}
							className={`flex items-center gap-4 border p-3 group hover:text-zinc-700 dark:hover:text-zinc-100 cursor-pointer  transition-all duration-200 ease-linear rounded-lg dark:border-zinc-800 justify-between ${
								isHovered
									? "text-gray-700 dark:text-gray-100 "
									: "text-gray-700 dark:text-gray-500"
							}`}>
							<div className="flex items-center gap-2  ">
								{item.icon}
								{item.title}
							</div>
							<ArrowRight
								className="group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300 ease-linear "
								size={20}
							/>
						</li>
					))}
				</ul>
			</AboutSection>

			{/* Skills */}
		</section>
	)
}

export default AboutMe

const AboutSection = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex md:flex-row flex-col  my-6 w-full gap-4 justify-between items-start">
			{children}
		</div>
	)
}
