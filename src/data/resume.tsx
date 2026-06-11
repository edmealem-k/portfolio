import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Edmealem K. Alemayehu",
	initials: "EK",
	url: "https://dillion.io",
	location: "Bahir Dar, Ethiopia",
	locationLink: "https://www.google.com/maps/place/bahirdar",
	description:
		"FullStack Web Developer | JavaScript, TypeScript, MERN, Next.js, Nest.js",
	summary:
		"I am a Full Stack JavaScript web developer. I use  react and nextJs for crafting and building the front-end of my application and nodejs frameworks expressjs and nestjs for building the back-end api. For Database management I use both sql and no-sql database solutions for storing and managing data in my application. I am a highly skilled Full Stack developer bringing 2+ years of experience in designing and developing robust full-stack web applications. With my abilities and dedication, I have contributed to 30+ Open-source projects (repos). I have a passion for web development. I am a quick learner and always eager to expand my knowledge and skills in the field. Currently I am a 5th year software engineering student at Bahir dar university.",
	avatarUrl: "/me.png",
	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"mongoose",
		"Nest.js",
		"typeorm",
		"Postgres",
		"mysql",
		"TailwindCSS",
		"GraphQL",
		"Apollo",
		"Rest Api Design",
		"backend development",
		"frontend development",
		"Docker",
		"java",
		"C++",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		// { href: '/blog', icon: NotebookIcon, label: 'Blog' },
	],
	contact: {
		email: "edmealemkassahun@gmail.com",
		tel: "+251908005801",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/BaGorK",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/edmealem-k",
				icon: Icons.linkedin,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "edmealemkassahun@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
		},
	},
	work: [
		{
			company: "Atomic Finance",
			href: "https://atomic.finance",
			badges: [],
			location: "Remote",
			title: "Bitcoin Protocol Engineer",
			logoUrl: "/atomic.png",
			start: "May 2021",
			end: "Oct 2022",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
		{
			company: "Shopify",
			badges: [],
			href: "https://shopify.com",
			location: "Remote",
			title: "Software Engineer",
			logoUrl: "/shopify.svg",
			start: "January 2021",
			end: "April 2021",
			description:
				"Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
		},
		{
			company: "Nvidia",
			href: "https://nvidia.com/",
			badges: [],
			location: "Santa Clara, CA",
			title: "Software Engineer",
			logoUrl: "/nvidia.png",
			start: "January 2020",
			end: "April 2020",
			description:
				"Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
		},
		{
			company: "Splunk",
			href: "https://splunk.com",
			badges: [],
			location: "San Jose, CA",
			title: "Software Engineer",
			logoUrl: "/splunk.svg",
			start: "January 2019",
			end: "April 2019",
			description:
				"Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
		},
		{
			company: "Lime",
			href: "https://li.me/",
			badges: [],
			location: "San Francisco, CA",
			title: "Software Engineer",
			logoUrl: "/lime.svg",
			start: "January 2018",
			end: "April 2018",
			description:
				"Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
		},
		{
			company: "Mitre Media",
			href: "https://mitremedia.com/",
			badges: [],
			location: "Toronto, ON",
			title: "Software Engineer",
			logoUrl: "/mitremedia.png",
			start: "May 2017",
			end: "August 2017",
			description:
				"Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
		},
	],
	education: [
		{
			school: "Bahir Dar University",
			href: "https://www.bdu.edu.et/",
			degree:
				"Bachelor's Degree of Computer Science, Software Engineering (BCS)",
			logoUrl: "/university.png",
			start: "2021",
			end: "now",
		},
	],

	projects: [
		{
			title: "hotel booking app",
			href: "https://youtu.be/aL1ZA9-wQEo",
			dates: "Jun 2024 - now",
			active: true,
			description:
				"This is a full-stack web application that I am currently working on. It has a dashboard for the system admin and a dashboard for the hotel manager. The admin can create, update, and delete hotels, rooms, and bookings. The manager can view the bookings, check-in, and check-out guests. The app also has a user dashboard where users can sign up, log in, book hotels, view their bookings, and also cancel their bookings.",
			technologies: [
				"JavaScript",
				"TailwindCSS",
				"React.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"Mongoose",
				"Cloudinary",
			],
			links: [
				{
					type: "Website",
					href: "https://hotel-booking-app-intern.onrender.com",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "GitHub",
					href: "https://github.com/BaGorK/Hotel-Booking-App",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/projects/hotelbookingapp/vid.mp4",
		},
		{
			title: "booking app mern",
			href: "https://youtu.be/UZKCE-h0fVw",
			dates: "Jun 2024 - Sept 2024",
			active: true,
			description:
				"Booking app mern is a full stack web application using Typescript. It has authentication, file upload, and stripe payment implementation for booking hotels. This app allows users to sign up and log in, create hotels, book hotels, and view their bookings.",
			technologies: [
				"Typescript",
				"React.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"Mongoose",
				"TailwindCSS",
				"Stripe",
				"Cloudinary",
			],
			links: [
				{
					type: "Website",
					href: "https://bookingapp-mern.onrender.com/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "GitHub",
					href: "https://github.com/BaGorK/bookingApp-mern",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/projects/bookingappmern/vid.mp4",
		},
		{
			title: "the-wild-oasis",
			href: "https://youtu.be/b7LAIAYoFZQ",
			dates: "Feb 29, 2024 - May 4, 2024",
			active: true,
			description:
				"The Wild Oasis is an admin dashboard for an ideal hotel company that allows managers to create, update, and delete bookings, review checkin, checkout and unconfirmed bookings. On the dashboard the managers can see todays activities, summary of total sales, and also can perform checkin and checkout guests.",
			technologies: [
				"React.js",
				"JavaScript",
				"Supabase",
				"Styled Components",
				"react hook form",
				"tanstack-query",
			],
			links: [
				{
					type: "Website",
					href: "https://the-wild-oasis-pro.vercel.app",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "GitHub",
					href: "https://github.com/BaGorK/the-wild-oasis",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "/projects/thewildoasis/vid.mp4",
		},
	],
} as const;
