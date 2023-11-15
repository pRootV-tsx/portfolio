"use client"

import { connect } from "@/constants/constants"
import { ArrowRight } from "lucide-react"
import React, { useState } from "react"

const ContactPage = () => {
	const [isHovered, setIsHovered] = useState(true)
	const [imageIndex, setImageIndex] = useState(0)

	const handleHover = () => {
		setImageIndex(1)
	}
	return (
		<section className="section">
			<div className="w-full flex flex-col gap-4 mt-6">
				<div className="flex w-full flex-col justify-between items-start">
					<h3 className="font-medium text-2xl ">Contact Me </h3>
					<p className="text-zinc-500">Get in touch</p>
				</div>
				<p>
					You can contact me via email at{" "}
					<a className="font-semibold " href="mailto:makeitrealpc@gmail.com">
						makeitrealpc@gmail.com
					</a>
				</p>
				<p className="text-zinc-300 dark:text-zinc-500">(or)</p>
				<div>
					<div className="flex items-center text-xl font-medium mb-6">
						DM Me{" "}
					</div>
					<ul className="grid grid-cols-3 w-full gap-4 justify-between items-start">
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
				</div>
				<p className="text-zinc-300 dark:text-zinc-500">(or)</p>
				<div>
					<p>
						Meet me in person at{" "}
						<span className="font-semibold">UASD, Dharwad</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
