"use client"

import { recentProjects } from "@/constants/constants"
import React from "react"
import Card from "./Card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const UIDesigns = () => {
	const [isHovered, setIsHovered] = React.useState(true)

	return (
		<>
			<div className="w-full flex flex-col gap-4 mt-6">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-2xl ">My Recent Projects</p>
					<Link href={"/projects"}>
						<Button
							variant={"ghost"}
							className="group  transition-all duration-300 ease-linear">
							<p className="group-hover:underline underline-offset-4">
								View all{" "}
							</p>
							<ArrowRight
								className=" opacity-0 group-hover:opacity-100  group-hover:translate-x-1  transition-all duration-300 ease-linear "
								size={16}
							/>
						</Button>
					</Link>
				</div>

				<ul className="flex flex-col gap-3">
					{recentProjects.map((project, idx) => {
						return (
							<li
								onMouseEnter={() => setIsHovered(false)}
								onMouseLeave={() => setIsHovered(true)}
								className={`w-full transition-all duration-300 ease-linear  cursor-pointer bg-zinc-100   hover:bg-zinc-300 dark:hover:bg-zinc-800   rounded-lg ${
									isHovered
										? "bg-zinc-300 dark:bg-zinc-800  "
										: "dark:bg-zinc-700"
								}  `}>
								<Card
									className="p-4"
									key={idx}
									projectLink={project.link}
									projectName={project.name}
									image={project.image}
									projectBrief={project.simplebrief}
									isUnderConstruction={project.isUnderConstruction}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default UIDesigns
