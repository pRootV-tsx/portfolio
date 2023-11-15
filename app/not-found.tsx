import { Button } from "@/components/ui/button"
import { aboutImages } from "@/constants/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const ErrorPage = () => {
	return (
		<section className="px-4 md:px-6 overflow-hidden lg  w-[700px] mx-auto h-[80vh] flex flex-col justify-center items-center gap-3">
			<Image
				className="w-[300px] rounded-full drop-shadow-lg aspect-square"
				src={aboutImages[0].image}
				alt={aboutImages[0].alt}
			/>
			<h1 className="text-3xl  flex items-center justify-center   w-full font-bold">
				Sorry! This Page doesn't exit
			</h1>
			<p className="text-zinc-500 select-none">
				seems you either this page is deleted/removed or you may have made a
				typo
			</p>
			<Link href={"/"}>
				<Button variant={"ghost"}>Return Home</Button>
			</Link>
		</section>
	)
}

export default ErrorPage
