import {
  BookOpen,
  Code2,
  ShieldCheck,
  Cpu,
  Bot,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface AboutFeature {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  icon: LucideIcon;
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: 1,
    title: "Tech Courses & Training",
    shortTitle: "Tech Courses",
    description:
      "Structured, hands-on courses in programming and emerging technologies.",
    details:
      "Learn by building real projects with practical guidance in modern programming, software development and emerging technologies.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Web Development",
    shortTitle: "Web Development",
    description:
      "Custom websites and web applications, built fast and built to scale.",
    details:
      "From responsive landing pages to full web applications, we design and build fast, scalable digital experiences.",
    icon: Code2,
  },
  {
    id: 3,
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    description:
      "Security assessments and ethical hacking training to stay protected.",
    details:
      "Build stronger security awareness through practical security concepts, ethical hacking and application-focused learning.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "IoT Solutions",
    shortTitle: "IoT Solutions",
    description:
      "Smart, connected systems from prototype to full deployment.",
    details:
      "Connect devices, sensors and software into useful systems that turn real-world signals into actionable data.",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Robotics & Automation",
    shortTitle: "Robotics",
    description:
      "Engineering concepts brought to life through hands-on robotics.",
    details:
      "Explore robotics and automation through practical prototypes, control logic and connected intelligent systems.",
    icon: Bot,
  },
  {
    id: 6,
    title: "Data Science",
    shortTitle: "Data Science",
    description:
      "Analytics and machine learning that turn raw data into decisions.",
    details:
      "Use data analysis and machine learning concepts to transform raw information into useful insights and decisions.",
    icon: BarChart3,
  },
];
