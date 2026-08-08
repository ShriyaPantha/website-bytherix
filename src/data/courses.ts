import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Gamepad2,
  ShieldCheck,
  BrainCircuit,
  Boxes,
  Terminal,
  Network,
} from "lucide-react";

export type CourseAccent = "navy" | "green" | "red";

export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  accent: CourseAccent;
  category: string;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications from scratch.",
    price: "Rs. 5,000",
    icon: Code2,
    accent: "navy",
    category: "Web Development",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Create powerful mobile apps for Android and iOS using Flutter.",
    price: "Rs. 12,000",
    icon: Smartphone,
    accent: "green",
    category: "Mobile Development",
    duration: "3 Months",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Game Development",
    description:
      "Design and develop engaging 2D & 3D games for multiple platforms.",
    price: "Rs. 20,000",
    icon: Gamepad2,
    accent: "red",
    category: "Game Development",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Learn ethical hacking, penetration testing and secure your future.",
    price: "Rs. 12,000",
    icon: ShieldCheck,
    accent: "navy",
    category: "Cyber Security",
    duration: "3 Months",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "AI / ML Fundamentals",
    description:
      "Understand AI & ML concepts and build intelligent real-world applications.",
    price: "Rs. 15,000",
    icon: BrainCircuit,
    accent: "green",
    category: "Artificial Intelligence",
    duration: "3 Months",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "ML Model Development",
    description:
      "Build, train and deploy machine learning models that solve problems.",
    price: "Rs. 10,000",
    icon: Boxes,
    accent: "red",
    category: "Machine Learning",
    duration: "3 Months",
    level: "Advanced",
  },
  {
    id: 7,
    title: "Python Programming",
    description:
      "Master Python programming from basics to advanced concepts.",
    price: "Rs. 8,000",
    icon: Terminal,
    accent: "navy",
    category: "Programming",
    duration: "2 Months",
    level: "Beginner",
  },
  {
    id: 8,
    title: "Networking Essentials",
    description:
      "Learn computer networks, TCP/IP, routing, switching and more.",
    price: "Rs. 7,000",
    icon: Network,
    accent: "green",
    category: "Networking",
    duration: "2 Months",
    level: "Beginner",
  },
];