/* 
This constants.js file contains
- navigation -- navigation links (title, link)
- views -- views on youtube, github, medium (title, icon, views)
- about -- about me (title, content)
- connect -- social media links (github, twitter, youtube, dribbble, instagram, linkedin)
- recentProjects -- recent projects (5)
- myTools -- my tools (hardware, software, other)
- hardware -- mytools - hardware (laptop, phone, tablet, headphones)
- software -- mytools - software (adobe, figma, jira, notion, spotify)
- other -- mytools - other (pen, paper, sleep, walk)
- aboutImages -- my images for about page (profile, laptop, friends, music)
*/

import {
	SiAdobe,
	SiFigma,
	SiJira,
	SiVisualstudiocode,
	SiNotion,
	SiSpotify,
} from "react-icons/si"

import {
	FaGithub,
	FaGlobe,
	FaMedium,
	FaWalking,
	FaYoutube,
} from "react-icons/fa"

import { CrumpledPaperIcon } from "@radix-ui/react-icons"

import dreamdream from "@/public/projectImages/dreamdream.png"
import ovrcode from "@/public/projectImages/ovrcode.jpg"
import gFinder from "@/public/projectImages/gfinder.png"
import designChallenge from "@/public/projectImages/dailydesign.png"
import typography from "@/public/projectImages/typographyposters.png"
import {
	CoffeeIcon,
	DribbbleIcon,
	GithubIcon,
	Headphones,
	InstagramIcon,
	Laptop2,
	Linkedin,
	Pen,
	Phone,
	Tablet,
	TwitterIcon,
	YoutubeIcon,
} from "lucide-react"

import profile from "@/public/profile.png"
import laptop from "@/public/laptop.jpeg"
import music from "@/public/music.png"
import friends from "@/public/friends.jpeg"

const navigation = [
	{
		id: 1,
		title: "Home",
		link: "/",
	},
	{
		id: 2,
		title: "About",
		link: "/about",
	},
	{
		id: 3,
		title: "Projects",
		link: "/projects",
	},
	{
		id: 4,
		title: "Contact",
		link: "/contact",
	},
]

const views = [
	{
		id: 1,
		icon: <FaGithub className="w-6 h-6 " />,
		title: "Github",
		views: "N/A",
	},
	{
		id: 2,
		icon: <FaYoutube className="w-6  h-6" />,
		title: "Youtube",
		views: "7.5k",
	},
	{
		id: 3,
		icon: <FaMedium className="w-6  h-6" />,
		title: "Blogs",
		views: "120",
	},
]

const designProjects = [
	{
		id: "des001",
		name: "OvrCode Branding",
		image: ovrcode,
		link: "https://www.behance.net/gallery/169601439/OVR_CODE-Branding",
		isUnderConstruction: false, //then no coming soon text
		simplebrief:
			"A simple branding project for my friends personal brand. I used a simple color palette and a simple logo.",
	},
	{
		id: "des002",
		name: "Dream Dream Web Design",
		image: dreamdream,
		link: "https://www.figma.com/file/zNMlVCOOy4vlZmnSGWZPuv/DreamDream-Website?type=design&mode=design&t=W7KqCyGuOoQUFPMe-1",
		isUnderConstruction: false,
		simplebrief:
			"Dream Dream is a web design for a team. I used a vibrant color palette and a bold logo.",
	},
	{
		id: "des003",
		name: "Github Target",
		image: gFinder,
		link: "https://www.figma.com/file/2926oi90eRqljkFnAyWLQI/Github-Finder?type=design&mode=design&t=W7KqCyGuOoQUFPMe-1",
		isUnderConstruction: false,
		simplebrief:
			"Github Target is a web app where you can search for github users and see their profile.",
	},
	{
		id: "des004",
		name: "Typography Posters",
		image: typography,
		link: "https://www.behance.net/gallery/151705513/Custom-Typography-Vol01",
		isUnderConstruction: false,
		simplebrief:
			"Typography posters made with Adobe Illustrator and Adobe Photoshop.",
	},
	{
		id: "des005",
		name: "365 Design Challenge",
		image: designChallenge,
		link: "https://www.behance.net/gallery/156534597/Poster-Project-02-Poster-Experiments",
		isUnderConstruction: false,
		simplebrief:
			"365 Design Challenge is a personal project where I design something everyday for 365 days.",
	},
	{
		id: "des006",
		name: "LogoFolio 2022-23",
		image: ovrcode,
		link: "",
		isUnderConstruction: true,
		simplebrief:
			"All of my logos in one place. I will be updating this project every year with new logos.",
	},
	{
		id: "des007",
		name: "Yuya Mei personal brand",
		image: ovrcode,
		link: "",
		isUnderConstruction: true,
		simplebrief:
			"Yuya Mei is a personal brand for a friend. I used a simple color palette and a simple logo.",
	},
	{
		id: "des008",

		name: "Learniverse Webdesign",
		image: gFinder,
		link: "",
		isUnderConstruction: true,
		simplebrief:
			"Learniverse is a learning platform where you can learn anything. This is a web design for the platform.",
	},
	{
		id: "des009",
		name: "Zapiya Web Design",
		image: ovrcode,
		link: "",
		isUnderConstruction: true,
		simplebrief: "Still talking with the client about the project",
	},
]

const recentProjects = designProjects.slice(0, 5)

const iconClassname = "w-8 h-8 text-2xl text-zinc-500 dark:text-zinc-400"

const myTools = [
	{
		category: "hardware",
		tools: [
			{
				tool: "Apple Macbook Pro 2020 16inch",
				icon: <Laptop2 width={8} height={8} className={iconClassname} />,
				info: "Where sleek design meets coding dreams, powering creativity with every keystroke. Unleash my code in style!",
			},
			{
				tool: "Redmi Note 9 Pro",
				icon: <Phone width={8} height={8} className={iconClassname} />,
				info: `My pocket powerhouse, capturing moments with flair and running my apps at the speed of my dynamic life. It's not just a phone; it's my creative companion on the go!`,
			},
			{
				tool: "iPad Air",
				icon: <Tablet width={8} height={8} className={iconClassname} />,
				info: `Meet my creativity wingman, rocking sleek vibes and packing the mojo to turn my ideas into pure awesome.`,
			},
			{
				tool: "Boat Airdopes 148",
				icon: <Headphones width={8} height={8} className={iconClassname} />,
				info: ` My audio sidekick, grooving to the beats of my day and cutting the cords on boring moments. `,
			},
		],
	},
	{
		category: "Software",
		tools: [
			{
				tool: "Adobe CC",
				icon: <SiAdobe width={8} height={8} className={iconClassname} />,
				info: "Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom",
			},
			{
				tool: "Figma & FigJam",
				icon: <SiFigma width={8} height={8} className={iconClassname} />,
				info: "Figma for UI/UX Design, FigJam for Brainstorming",
			},
			{
				tool: "Jira",
				icon: <SiJira width={8} height={8} className={iconClassname} />,
				info: "Jira for project management",
			},
			{
				tool: "Procreate",
				icon: <Pen width={8} height={8} className={iconClassname} />,
				info: "Procreate for logo sketches and random doodles",
			},
			{
				tool: "VS Code",
				icon: (
					<SiVisualstudiocode width={8} height={8} className={iconClassname} />
				),
				info: "VS Code for coding and for my life :) ",
			},
			{
				tool: "Arc Browser",
				icon: <FaGlobe width={8} height={8} className={iconClassname} />,
				info: " My digital maestro, orchestrating a symphony of seamless web journeys with style. It's not just a browser; ",
			},
			{
				tool: "Notion",
				icon: <SiNotion width={8} height={8} className={iconClassname} />,
				info: "Notion for note taking and planning",
			},
			{
				tool: "Spotify",
				icon: <SiSpotify width={8} height={8} className={iconClassname} />,
				info: `It's my daily dose of sonic delight! Spinning tracks that match my vibe and transforming routines into a musical realm`,
			},
		],
	},

	{
		category: "Other",
		tools: [
			{
				tool: "Pen & Paper",
				icon: <CrumpledPaperIcon className={iconClassname} />,
				info: "Pen & Paper for sketching and writing down ideas",
			},
			{
				tool: "Coffee or Tea",
				icon: <CoffeeIcon className={iconClassname} />,
				info: "Coffee & Tea for energy and continuous work",
			},
			{
				tool: "Sleep & Walk",
				icon: <FaWalking className={iconClassname} />,
				info: "Sleep & Walk for fixing bugs",
			},
		],
	},
]

const about = [
	{
		title: "About",
		content: [
			"I'm Pruthviraj Chauhan!",
			"As a self-taught designer and developer, I have a deep passion for UI, graphics, technology, software, and programming languages. I am always learning new things and expanding my skills in these areas. I also enjoy writing and reading. Thank you for visiting my portfolio. I hope you enjoy my work. And can't wait to work with you",
			"Hey sometimes I contribute for open-source projects, make content for youtube, share memes on twitter, and post my designs on behance. So feel free to check them out below.",
		],
	},
]

const connect = [
	{
		id: 1,
		icon: <GithubIcon className="text-2xl" />,
		title: "Github",
		link: "https://github.com/pRootV-tsx",
	},
	{
		id: 3,
		icon: <TwitterIcon className="text-2xl" />,
		title: "Twitter",
		link: "https://twitter.com/pruthvi_tsx",
	},
	{
		id: 4,
		icon: <YoutubeIcon className="text-2xl" />,
		title: "Youtube",
		link: "https://www.youtube.com/channel/UC_LElXTjJOspxx8C_y-kTtg",
	},

	{
		id: 7,
		icon: <DribbbleIcon className="text-2xl" />,
		title: "Dribbble",
		link: "https://dribbble.com/yourisedribbbles",
	},
	{
		id: 8,
		icon: <InstagramIcon className="text-2xl" />,
		title: "Instagram",
		link: "https://www.instagram.com/yourise.design/",
	},
	{
		id: 9,
		icon: <Linkedin className="text-2xl" />,
		title: "LinkedIn",
		link: "https://www.linkedin.com/in/makeitreal/",
	},
]

// separating tools hardware, software, other
const hardware = myTools[0].tools

const software = myTools[1].tools
const other = myTools[2].tools

const aboutImages = [
	{
		image: profile,
		alt: "profile",
		left: "left-0",
		rotate: "rotate-[10deg]",
	},
	{
		image: laptop,
		alt: "laptop",
		left: "left-10",
		rotate: "rotate-[20deg]",
	},
	{
		image: friends,
		alt: "pruthvi",
		left: "left-20",
		rotate: "rotate-[-10deg]",
	},
	{
		image: music,
		alt: "music",
		left: "left-30",
		rotate: "rotate-[-20deg]",
	},
]

export {
	navigation,
	views,
	about,
	connect,
	recentProjects,
	myTools,
	hardware,
	software,
	other,
	aboutImages,
}
