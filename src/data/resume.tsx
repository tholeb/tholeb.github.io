import { HomeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
	name: "Thomas L.",
	initials: "( ͡° ͜ʖ ͡°)",
	url: "https://tholeb.fr",
	location: "France",
	locationLink: "",
	description: "Recent graduate in IT. Focusing on systems administration and emerging technologies",
	summary: "Self taught system administrator and software developer with a passion for emerging technologies. I have experience with a wide range of technologies and programming languages. I am a quick learner and I am always looking to improve my skills.",
	avatarUrl: "",
	skills: [
		"Ansible",
		"Docker/podman",
		"Linux (ubuntu, almalinux)",
		"Kubernetes",
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"SQL",
		"Git"
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		// { href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
	email: "contact@tholeb.fr",
	tel: "",
	social: {
		GitHub: {
			name: "GitHub",
			url: "https://github.com/tholeb",
			icon: Icons.github,

			navbar: true,
		},
		LinkedIn: {
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/lebreton-thomas/?locale=en_US",
			icon: Icons.linkedin,

			navbar: true,
		},
		email: {
			name: "Send Email",
			url: "mailto:contact@tholeb.fr",
			icon: Icons.email,

			navbar: true,
		},
	},
	},

	work: [
		{
			company: "Sopra Steria Infrastructure and Security Services",
			href: "#",
			badges: [
				"Linux",
				"Windows",
				"Docker",
				"sysprep",
				"Zabbix",
				"WAF"
			],
			location: "Nantes, Pays de la Loire, France",
			title: "Sysadmin",
			logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRCNeQJckbt_BzYSbVnoCqe_V6RUc1JqISA&s",
			start: "October 2024",
			end: "today",
			description: "Multiple subjects, evolving around linux tooling such as rundeck, syspreping Windows 11, and Web Application Firewall",
		},
		{
			company: "Thales NL",
			href: "#",
			badges: [
				"Linux",
				"Ansible",
				"Ansible Tower",
				"Helm",
				"Kubernetes",
				"OpenFeature",
			],
			location: "Engelo, Netherlands",
			title: "Research project on Kubernetes, OpenFeature and Helm",
			logoUrl: "https://lh3.googleusercontent.com/LNLrNcfMYAkpQX7tfGmjuUmWwEQip5qOYEWUm29pqNgQQDGIo0usds54TZzN_ZIfzseax4CHqu2VB5t5vPa-",
			start: "May 2024",
			end: "Oct 2024",
			description: "Research project on Kubernetes, OpenFeature and Helm. I had to deploy a kubernetes cluster implementing OpenFeature in a Express application. I used Unleash as a provider.",
		},
		{
			company: "Caisse Nationale de l'Assurance Maladie",
			badges: [
				"linux",
				"Ansible",
				"PostgreSQL",
				"Rundeck",
			],
			href: "#",
			location: "Angers, France",
			title: "Sysadmin intern",
			logoUrl: "https://kamelecom.fr/wp-content/uploads/2023/03/cpam_300x3005979ee4fbd701.jpg",
			start: "June 2023",
			end: "August 2023",
			description: "Project management, production launch and management of the manufacturer's recipe by a service provider.\
			Created a playbook to migrate a rundeck to another server with a PSQL database.\
			Migrated servers from CentOS7 to AlmaLinux8 with a kickstart, while keeping some critical data using LVM.\
			Discovered and used Ansible Automation Platform. I had to automate my rundeck migration playbook as a Proof Of Concept.\
			Updated a GitLab using a playbook.",
		},
		{
			company: "Caisse Nationale de l'Assurance Maladie",
			href: "#",
			badges: [
				"Linux",
				"Ansible",
				"Cockpit",
				"redfish",
			],
			location: "Angers, France",
			title: "Sysadmin intern",
			logoUrl: "https://kamelecom.fr/wp-content/uploads/2023/03/cpam_300x3005979ee4fbd701.jpg",
			start: "April 2022",
			end: "June 2022",
			description: "Automated hardware configuration (BIOS) using Ansible for a CentOS 7 server using redfish standard and iDRAC boards for Dell (Tower and Rack) server.\
			Installed and configured an IT HMI (Red Hat’s Cockpit) to help manage and debug the system for technicians in data centres.",
		},
	],
	education: [
		{
			school: "Polytech Nantes",
			href: "#",
			degree: "Master in Computer Science",
			logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNaH8YhcBS1C6wPhDB_tK47tvgnPX0dF0Q&s",
			description: 'Studied computer science, networks, systems administration, software development, and more. I participated in various projects, such as the Google Hashcode 2022 (Polytech\'s instance), or the creation of a batman adhoc network using Ansible.',
			badges: ["Git", "UML", "SQL", "C/C++", "Python", "Node.JS"],
			links: [
				{ url: 'https://github.com/tholeb/batman_adhoc_network', text: 'Batman adhoc network using Ansible' },
				{ url: 'https://gitlab.univ-nantes.fr/E202864E/polyhash-2022', text: 'Google Hashcode 2022' },
			],
			start: "2022",
			end: "2025",
		},
		{
			school: "University of Nantes",
			href: "#",
			degree: "Technical Degree in Computer Science",
			logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9b5X1NY6umcesefcL3o89t1Qm9xNBjBxaNA&s",
			description: 'Studied Git, OOP, Java, SQL, HTML/CSS/JS. In my last year, I participated in a long lasting project where, in teams of 5 we had to create a website (React.JS, Express) for future students of the university where they could find and grade CS exercises. Students where able to log in using there university credentials.',
			badges: ["Git", "Java", "SQL", "HTML/CSS/JS", "OOP", "UML", "Design Patterns"],
			links: [],
			start: "2020",
			end: "2022",
		},
	],
	projects: [
	{
		title: "FiveM",
		dates: "April 2024 - Today",
		active: true,
		href: "#!",
		description: "Developper for FiveM servers, serving more than 3000 players per day for 30k+ discord members. I am mainly doing frontend work (tsx, scss) and managing windows/linux servers (monitoring). ",
		technologies: [
			"React.js",
			"Lua",
			"SQL",
			"PromQL",
			"Grafana"
		],
		links: [
			/* {
				type: "NoFace",
				href: "https://discord.gg/dAczvDSUb9",
				icon: <Icons.globe className="size-3" />,
			}, */
			/* {
				type: "Discord",
				href: "https://discord.com/invite/visionrp",
				icon: <Icons.discord className="size-3" />,
			} */
		],
		image: "https://img.utdstc.com/icon/bcb/fc5/bcbfc5ae3d074d8734b9f51e64f7e95d4325485e0c51661dcf3167e45d768a8d:200",
		video: "",
	},
	{
		title: "Selfhosted cloud",
		href: "#",
		dates: "2020 - Today",
		active: true,
		description: "Home server used for various purposes, such as containers, Nextcloud, a VPN server, and more.",
		technologies: [
			"Ansible",
			"Linux",
			"podman",
		],
		links: [],
		image: "https://download.logo.wine/logo/Raspberry_Pi/Raspberry_Pi-Logo.wine.png",
		video: "",
	},
	],
	hackathons: [],
} as const;
