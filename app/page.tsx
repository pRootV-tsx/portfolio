import Hero from "@/components/Hero"
import Tools from "@/components/Tools"
import UIDesigns from "@/components/UIDesigns"

import React from "react"

const HomePage = () => {
	return (
		<main className=" section ">
			<Hero />
			<UIDesigns />
			<Tools />
			{/* Project */}
		</main>
	)
}

export default HomePage
