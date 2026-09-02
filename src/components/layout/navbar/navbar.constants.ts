import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import {
  Blocks,
  BookOpen,
  Bot,
  Box,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleHelp,
  CloudCog,
  Code2,
  Contact,
  Cpu,
  Gamepad2,
  GraduationCap,
  Headset,
  Layers3,
  Mail,
  Megaphone,
  MessageSquareQuote,
  Newspaper,
  Palette,
  PenTool,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  UserRoundCheck,
  Users,
  Wrench,
} from "lucide-react";

export const BRAND = "BYTHERIX";

export const TECHNOLOGY = "TECHNOLOGY";

export const NAV_ITEMS = [
  { label: "Company", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Products", hasDropdown: true },
  { label: "Portfolios", hasDropdown: false },
  { label: "Shop", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
] as const;

export type DropdownSection = {
  heading: string;
  sectionIcon: LucideIcon;
  items: {
    label: string;
    icon: LucideIcon;
    // Optional one-line description shown under the label in the mega menu.
    sub?: string;
  }[];
};

export const DROPDOWN_CONTENT: Record<string, DropdownSection[]> = {
  Company: [
    {
      heading: "Company",
      sectionIcon: Building2,
      items: [
        {
          label: "About Company",
          icon: Building2,
          sub: "Learn about Bytherix and our mission",
        },
        {
          label: "Our Team",
          icon: Users,
          sub: "Meet the people behind Bytherix",
        },
        {
          label: "Our Story",
          icon: CircleHelp,
          sub: "Learn about our journey and mission",
        },
      ],
    },

    {
      heading: "Explore",
      sectionIcon: Sparkles,
      items: [
        {
          label: "Blogs & Articles",
          icon: Newspaper,
          sub: "Insights, updates and news",
        },
        {
          label: "Testimonials",
          icon: MessageSquareQuote,
          sub: "Hear from our happy clients",
        },
        {
          label: "Contact Us",
          icon: Mail,
          sub: "Get in touch with us",
        },
      ],
    },
  ],

  Services: [
    {
      heading: "Technology",
      sectionIcon: Cpu,
      items: [
        { label: "AI & Machine Learning", icon: Bot },
        { label: "Cloud & DevOps", icon: CloudCog },
        { label: "Cyber Security", icon: ShieldCheck },
        { label: "IoT & Robotics", icon: Cpu },
        { label: "Blockchain & Web3", icon: Blocks },
        { label: "Data Analytics & BI", icon: ChartNoAxesCombined },
      ],
    },
    {
      heading: "Development",
      sectionIcon: Code2,
      items: [
        { label: "Web Development", icon: Code2 },
        { label: "App Development", icon: Contact },
        { label: "Game Development", icon: Gamepad2 },
        { label: "E-commerce Development", icon: ShoppingBag },
        { label: "Maintenance & AMC", icon: Wrench },
      ],
    },
    {
      heading: "Creative",
      sectionIcon: Palette,
      items: [
        { label: "UI/UX Design", icon: PenTool },
        { label: "Digital Marketing", icon: Megaphone },
        { label: "Graphic Design", icon: Palette },
        { label: "AR/VR & 3D", icon: Layers3 },
      ],
    },
  ],

  Products: [
    {
      heading: "Products",
      sectionIcon: Box,
      items: [
        { label: "Our Founder", icon: UserRoundCheck },
      ],
    },
    {
      heading: "Solutions",
      sectionIcon: BriefcaseBusiness,
      items: [
        {
          label: "One For All Management System",
          icon: BriefcaseBusiness,
        },
      ],
    },
  ],

  Shop: [
    {
      heading: "Shop",
      sectionIcon: Store,
      items: [
        { label: "All Products", icon: Store },
        { label: "Digital Products", icon: ShoppingBag },
        { label: "Software", icon: Code2 },
      ],
    },
    {
      heading: "Learning",
      sectionIcon: GraduationCap,
      items: [
        { label: "Courses", icon: BookOpen },
        { label: "Featured Courses", icon: Sparkles },
        { label: "Certifications", icon: ShieldCheck },
        { label: "Teach on Bytherix", icon: Headset },
      ],
    },
  ],
};

export const introLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(5px)",
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.035,
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const INTRO_LETTERS = BRAND.length + TECHNOLOGY.length;

export const INTRO_DURATION = 0.28;

export const INTRO_STAGGER = (INTRO_LETTERS - 1) * 0.035;

export const INTRO_FINISH = INTRO_STAGGER + INTRO_DURATION;

export const INTRO_TOTAL_MS = Math.ceil((INTRO_FINISH + 0.45) * 1000);

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -6,
    scale: 0.985,
    transition: {
      duration: 0.14,
    },
  },
};

export const dockTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const getBrandColor = (index: number) => {
  if (index <= 1) {
    return "text-[#00AEEF]";
  }

  if (index <= 4) {
    return "text-[#20C997]";
  }

  return "text-[#FF3B30]";
};