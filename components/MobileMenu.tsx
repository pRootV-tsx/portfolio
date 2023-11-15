import React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { navigation } from "@/constants/constants"
import Link from "next/link"
import { MenuIcon, X } from "lucide-react"

const MobileMenu = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<>
			<DropdownMenu
				onOpenChange={() => {
					if (isOpen) {
						setIsOpen(false)
					} else {
						setIsOpen(true)
					}
				}}>
				<DropdownMenuTrigger className="transition-all hover:rotate-90 duration-200 ease-linear">
					{isOpen ? <X size={24} /> : <MenuIcon size={24} />}
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{navigation.map((item, idx) => (
						<Link href={item.link}>
							<DropdownMenuItem key={idx}>{item.title}</DropdownMenuItem>
						</Link>
					))}
					<DropdownMenuSeparator />
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default MobileMenu
