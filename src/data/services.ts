import type { LucideIcon } from "lucide-react";

import {
  Code2,
  Smartphone,
  Gamepad2,
  ShieldCheck,
  Cpu,
  Palette,
  Megaphone,
  CloudCog,
  Bot,
  Blocks,
  PanelsTopLeft,
  ShoppingCart,
  BarChart3,
  Headphones,
  Box,
} from "lucide-react";

export type ServiceAccent = "blue" | "green" | "red";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites and web applications built around your business goals.",
    icon: Code2,
    tags: ["React", "Node.js", "Web Apps"],
    accent: "blue",
  },

  {
    id: 2,
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications designed for seamless user experiences and scalable growth.",
    icon: Smartphone,
    tags: ["Android", "iOS", "Cross-platform"],
    accent: "green",
  },

  {
    id: 3,
    title: "Game Development",
    description:
      "Interactive 2D and 3D games with engaging gameplay, optimized graphics and immersive experiences.",
    icon: Gamepad2,
    tags: ["2D / 3D", "Unity", "Interactive"],
    accent: "red",
  },

  {
    id: 4,
    title: "Cyber Security",
    description:
      "Security testing and vulnerability assessment designed to protect your applications, systems and digital infrastructure.",
    icon: ShieldCheck,
    tags: ["Security Testing", "Pentesting", "Auditing"],
    accent: "blue",
  },

  {
    id: 5,
    title: "IoT & Robotics",
    description:
      "Connected devices and intelligent robotic solutions that bring software, hardware and automation together.",
    icon: Cpu,
    tags: ["IoT", "Robotics", "Automation"],
    accent: "green",
  },

  {
    id: 6,
    title: "Graphic Design",
    description:
      "Creative visual designs, branding assets and digital graphics that communicate your brand clearly.",
    icon: Palette,
    tags: ["Branding", "Visual Design", "Social Media"],
    accent: "red",
  },

  {
    id: 7,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions that help your business reach the right audience and grow online.",
    icon: Megaphone,
    tags: ["SEO", "Social Media", "Campaigns"],
    accent: "blue",
  },

  {
    id: 8,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, deployment and CI/CD automation using modern cloud platforms and DevOps practices.",
    icon: CloudCog,
    tags: ["AWS", "Azure", "GCP"],
    accent: "green",
  },

  {
    id: 9,
    title: "AI/ML & Chatbots",
    description:
      "Intelligent AI solutions, machine learning systems and conversational chatbots for real-world business needs.",
    icon: Bot,
    tags: ["AI/ML", "Chatbots", "Automation"],
    accent: "red",
  },

  {
    id: 10,
    title: "Blockchain & Web3",
    description:
      "Decentralized applications and blockchain-powered solutions built for emerging digital ecosystems.",
    icon: Blocks,
    tags: ["Web3", "Smart Contracts", "dApps"],
    accent: "blue",
  },

  {
    id: 11,
    title: "UI/UX Design",
    description:
      "User-centered interfaces, wireframes and prototypes that turn ideas into intuitive digital experiences.",
    icon: PanelsTopLeft,
    tags: ["Wireframes", "Prototypes", "Figma"],
    accent: "green",
  },

  {
    id: 12,
    title: "E-commerce Development",
    description:
      "Conversion-focused online stores using Shopify, WooCommerce and custom e-commerce solutions.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Custom"],
    accent: "red",
  },

  {
    id: 13,
    title: "Data Analytics & BI",
    description:
      "Interactive dashboards and business intelligence solutions that turn data into meaningful insights.",
    icon: BarChart3,
    tags: ["Analytics", "BI", "Dashboards"],
    accent: "blue",
  },

  {
    id: 14,
    title: "Maintenance & AMC",
    description:
      "Reliable maintenance, technical support and annual contracts to keep your digital products performing smoothly.",
    icon: Headphones,
    tags: ["Maintenance", "Support", "AMC"],
    accent: "green",
  },

  {
    id: 15,
    title: "AR/VR & 3D",
    description:
      "Immersive augmented reality, virtual reality and 3D experiences for modern digital products.",
    icon: Box,
    tags: ["AR", "VR", "3D"],
    accent: "red",
  },
];