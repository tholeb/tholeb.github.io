import { HomeIcon, NotebookIcon } from "lucide-react";

import { Icons } from "@/components/icons";

export const DATA = {
  name: "Thomas LEBRETON",
  initials: "TL",
  url: "https://tholeb.fr",
  location: "France",
  locationLink: "",
  description:
    "Passionate student in systems administration and emerging technologies, currently in my fifth year at Polytech Nantes.",
  summary:
    "Self taught system administrator and software developer with a passion for emerging technologies. I have experience with a wide range of technologies and programming languages. I am a quick learner and I am always looking to improve my skills.",
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
      company: "Thales NL",
      href: "#",
      badges: [],
      location: "Engelo, Netherlands",
      title: "Research project on Kubernetes, OpenFeature and Helm",
      logoUrl: "https://pbs.twimg.com/profile_images/1609851367299874819/Jr479xkK_400x400.jpg",
      start: "May 2024",
      end: "Oct 2024",
      description:
        "Research project on Kubernetes, OpenFeature and Helm. I had to deploy a kuberntes cluster implementing OpenFeature in a Express application. I used Unleash as a provider.",
    },
    {
      company: "CNAM",
      badges: [],
      href: "#",
      location: "Angers, France",
      title: "Sysadmin intern",
      logoUrl: "	https://kamelecom.fr/wp-content/uploads/2023/03/cpam_300x3005979ee4fbd701.jpg",
      start: "",
      end: "",
      description:
        "",
    },
    {
      company: "CNAM",
      href: "#",
      badges: [],
      location: "Angers, France",
      title: "Sysadmin intern",
      logoUrl: "https://kamelecom.fr/wp-content/uploads/2023/03/cpam_300x3005979ee4fbd701.jpg",
      start: "",
      end: "",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Polytech Nantes",
      href: "#",
      degree: "Masters in Computer Science",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "University of Nantes",
      href: "#",
      degree: "Technical Degree in Computer Science",
      logoUrl: "",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Vision (FiveM server)",
      href: "https://visionrp.fr",
      dates: "April 2024 - Today",
      active: true,
      description: "Developper (mainly frontend) of a FiveM server for a roleplay community for more than 2000 players per day and 23000 discord members",
      technologies: [
        "React.js",
        "Lua",
      ],
      links: [
		{
          type: "Website",
          href: "https://visionrp.fr",
          icon: <Icons.globe className="size-3" />,
        },
		{
          type: "Discord",
          href: "https://visionrp.fr",
          icon: <Icons.globe className="size-3" />,
        }
	  ],
      image: "",
      video: "",
    },
	{
      title: "Raspberry Pi 4",
      href: "",
      dates: "2020 - Today",
      active: true,
      description:
        "",
      technologies: [
        "Ansible",
        "Linux",
        "podman",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
