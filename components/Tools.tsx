"use client"

import { usePathname } from "next/navigation"
import React, { Component, useState } from "react"
import { Button } from "./ui/button"
import { Globe, Settings, icons } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { hardware, myTools, other, software } from "@/constants/constants"
import Link from "next/link"

const Header = () => {
	return (
		<div className="w-full  flex flex-col gap-2 mt-6">
			<div className="flex w-full flex-col justify-between items-start">
				<h3 className="font-medium text-2xl ">My Tools </h3>
				<p className="text-zinc-500">I use on daily basis</p>
			</div>
			<p>
				Some of my tools i've been obsessed with lately. From Laptop to Sleep No
				sponsors, affliates or anything. Just my personal opinion.
			</p>
		</div>
	)
}

const Tools = () => {
	const pathname = usePathname()
	if (pathname == "/") {
		return (
			<section className="w-full">
				<Header />
				<ul className="text-[16px] w-full text-zinc-500 mt-2 dark:text-zinc-700">
					<li>Macbook Pro 2020 ,React, NextJs VSCode, Figma etc..</li>
					<Link href="/tools">
						<Button
							className="w-full mt-3 flex gap-3 group transition-all duration-300 ease-linear dark:hover:bg-zinc-700 dark:hover:text-zinc-400"
							variant={"ghost"}>
							<Settings className="group-hover:rotate-90 transition-all duration-300 ease-linear" />{" "}
							All tools
						</Button>
					</Link>
				</ul>
			</section>
		)
	}
	return (
		<section className="section">
			<Header />
			<Tabs defaultValue="all" className="w-full mt-8">
				<TabsList className="space-x-4   justify-between items-center">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="hardware">Hardware</TabsTrigger>
					<TabsTrigger value="software">Software</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>
				<TabsContent value="all" className="">
					{myTools.map(tools => {
						return tools.tools.map((tool, index) => {
							return (
								<Tool
									key={index}
									tool={tool.tool}
									info={tool.info}
									icon={tool.icon}
								/>
							)
						})
					})}
				</TabsContent>
				<TabsContent value="hardware">
					{hardware.map((tool, index) => (
						<Tool
							key={index}
							tool={tool.tool}
							info={tool.info}
							icon={tool.icon}
						/>
					))}
				</TabsContent>
				<TabsContent value="software">
					{software.map((tool, index) => (
						<Tool
							key={index}
							tool={tool.tool}
							info={tool.info}
							icon={tool.icon}
						/>
					))}
				</TabsContent>
				<TabsContent value="other">
					{other.map((tool, index) => (
						<Tool
							key={index}
							tool={tool.tool}
							info={tool.info}
							icon={tool.icon}
						/>
					))}
				</TabsContent>
			</Tabs>
		</section>
	)
}

function Tool({
	tool,
	info,
	icon,
}: {
	tool: string
	info: string
	icon?: React.ReactNode
}) {
	return (
		<div className="w-full flex bg-zinc-100 p-4 py-6 gap-2 shadow-sm  rounded-lg dark:bg-zinc-900 flex-col items-start justify-start ">
			<>{icon}</>
			<h3 className="text-xl  font-medium">{tool}</h3>
			<p className="text-sm mt-2 text-zinc-500">{info}</p>
		</div>
	)
}

export default Tools
