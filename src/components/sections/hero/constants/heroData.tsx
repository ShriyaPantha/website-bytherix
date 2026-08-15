import type { ReactNode } from "react";

export interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
  desc: string;
  bg: string;
}

export interface Avatar {
  initials: string;
  ring: string;
  bg: string;
  text: string;
}

export interface Dot {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  delay: number;
}

export const ROTATING_WORDS = [
  "Web Applications",
  "AI Solutions",
  "Cybersecurity",
  "IoT Systems",
  "Robotics",
  "PCB Design",
  "Mobile Apps",
  "Smart Tools",
];

export const AVATARS: Avatar[] = [
  {
    initials: "JD",
    ring: "ring-red-400/60",
    bg: "bg-red-500/20",
    text: "text-red-300",
  },
  {
    initials: "AK",
    ring: "ring-blue-400/60",
    bg: "bg-blue-500/20",
    text: "text-blue-300",
  },
  {
    initials: "SN",
    ring: "ring-purple-400/60",
    bg: "bg-purple-500/20",
    text: "text-purple-300",
  },
];

export const STATS: Stat[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    value: "10+",
    label: "Years of Experience",
    desc: "A decade of delivering innovative solutions.",
    bg: "bg-blue-500",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients",
    desc: "Businesses trust us to bring their ideas to life.",
    bg: "bg-emerald-500",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16M6 8l-4 4 4 4M18 8l4 4-4 4"
        />
      </svg>
    ),
    value: "1000+",
    label: "Projects Delivered",
    desc: "Successful projects across diverse industries.",
    bg: "bg-purple-500",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    value: "99%",
    label: "Client Satisfaction",
    desc: "Our commitment to quality drives client success.",
    bg: "bg-orange-500",
  },
];

export const DOTS: Dot[] = [
  { startX: 35, startY: 15, endX: 38, endY: 55, size: 2, duration: 18, delay: 0 },
  { startX: 45, startY: 8, endX: 42, endY: 45, size: 1, duration: 24, delay: 1.2 },
  { startX: 52, startY: 25, endX: 48, endY: 65, size: 1, duration: 22, delay: 2 },
  { startX: 62, startY: 12, endX: 65, endY: 50, size: 2, duration: 20, delay: 0.8 },
  { startX: 72, startY: 18, endX: 69, endY: 60, size: 1, duration: 26, delay: 3.1 },
  { startX: 80, startY: 8, endX: 77, endY: 48, size: 2, duration: 19, delay: 1.5 },
  { startX: 88, startY: 22, endX: 85, endY: 62, size: 1, duration: 23, delay: 2.4 },
  { startX: 95, startY: 12, endX: 92, endY: 52, size: 2, duration: 21, delay: 0.3 },

  { startX: 15, startY: 40, endX: 18, endY: 80, size: 2, duration: 17, delay: 1.9 },
  { startX: 28, startY: 65, endX: 25, endY: 25, size: 1, duration: 21, delay: 4.2 },
  { startX: 55, startY: 60, endX: 60, endY: 20, size: 1, duration: 25, delay: 4 },
  { startX: 68, startY: 35, endX: 64, endY: 75, size: 2, duration: 19, delay: 3 },
  { startX: 82, startY: 50, endX: 78, endY: 12, size: 1, duration: 23, delay: 0.5 },
  { startX: 48, startY: 82, endX: 44, endY: 35, size: 1, duration: 17, delay: 2.5 },
  { startX: 90, startY: 45, endX: 85, endY: 85, size: 2, duration: 24, delay: 1.5 },
  { startX: 62, startY: 40, endX: 58, endY: 5, size: 2, duration: 22, delay: 3.5 },
  { startX: 75, startY: 68, endX: 70, endY: 22, size: 1, duration: 19, delay: 1 },
  { startX: 35, startY: 75, endX: 39, endY: 30, size: 2, duration: 20, delay: 2.8 },

  { startX: 22, startY: 28, endX: 26, endY: 58, size: 1, duration: 27, delay: 0.6 },
  { startX: 38, startY: 42, endX: 33, endY: 72, size: 2, duration: 21, delay: 1.8 },
  { startX: 58, startY: 12, endX: 61, endY: 42, size: 1, duration: 25, delay: 3.8 },
  { startX: 70, startY: 48, endX: 74, endY: 78, size: 1, duration: 18, delay: 2.1 },
  { startX: 12, startY: 55, endX: 16, endY: 88, size: 2, duration: 23, delay: 0.9 },
  { startX: 85, startY: 70, endX: 80, endY: 35, size: 1, duration: 20, delay: 4.5 },
  { startX: 42, startY: 55, endX: 46, endY: 22, size: 2, duration: 26, delay: 1.4 },
];