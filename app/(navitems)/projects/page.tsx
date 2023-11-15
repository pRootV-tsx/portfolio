import { Button } from "@/components/ui/button"
import { aboutImages } from "@/constants/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ErrorPage = () => {
	return (
		<section className="section ">
			<Image
				className="w-[300px] rounded-full drop-shadow-lg aspect-square"
				src={aboutImages[0].image}
				alt={aboutImages[0].alt}
			/>
			<h1 className="text-3xl  flex items-center justify-center   w-full font-bold">
				Rest of Projects will be updated soon....
			</h1>
			<p className="text-zinc-500 select-none">
				Some of my old projects seems out-dates and not worth showing So
				currently working on some new projects please check back later
			</p>
			<Link href={"/"}>
				<Button variant={"ghost"}>Return Home</Button>
			</Link>
		</section>
	)
}

export default ErrorPage
