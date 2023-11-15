import { ArrowRight, Construction } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface CardProps {
	projectLink: string
	projectName: string
	image: string | StaticImageData
	projectBrief: string
	isUnderConstruction?: boolean
	className?: string
}

const Card = ({
	projectLink,
	projectName,
	image,
	projectBrief,
	isUnderConstruction,
	className,
}: CardProps) => {
	return (
		<div
			className={cn(
				"w-full h-48 flex items-center gap-3 justify-between  dark:hover:text- rounded-lg ",
				className
			)}>
			<Image
				src={image}
				alt={`${projectName} project's image`}
				className="object-cover h-full min-w-fit flex-1 w-32 rounded-lg"
			/>
			<div className="h-full flex flex-col flex-1 justify-evenly items-start">
				<p className="font-medium">{projectName}</p>
				<p className="dark:text-zinc-300 text-zinc-700 max-sm:line-clamp-2">
					{projectBrief}
				</p>
				{!isUnderConstruction ? (
					<Button variant={"ghost"} className="py-1  group">
						<a
							className="hover:font-semibold flex gap-1 items-center justify-center transition-all duration-300 ease-linear"
							href={projectLink}>
							Visit{" "}
							<ArrowRight
								className="group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300 ease-linear "
								size={16}
							/>
						</a>
					</Button>
				) : (
					<p className="flex gap-1 items-center justify-center text-sm text-zinc-400">
						UnderConstruction <Construction />
					</p>
				)}
			</div>
		</div>
	)
}

export default Card
