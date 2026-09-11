export interface PortfolioProject {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl: string;
  technologies: string[];
  features: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

import vitalGymImage from "../../../../assets/portfolio/vital-gym.png";
import pokharaResortImage from "../../../../assets/portfolio/pokhara-resort.png";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    number: "01",
    title: "Vital Gym",
    category: "Fitness & Wellness",
    description:
      "A modern fitness experience designed to help users discover programs, trainers, pricing plans and personalized workout opportunities.",
    longDescription:
      "Vital Gym is a modern fitness-focused web experience built with a strong visual hierarchy and an engaging user journey. The interface brings workout programs, fitness plans, trainers and membership information together in a clean and energetic digital experience.",
    image: vitalGymImage,
    liveUrl: "https://vitalgym1.netlify.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    features: [
      "Modern fitness-focused landing experience",
      "Workout and training program showcase",
      "Membership and pricing presentation",
      "Responsive design across devices",
      "Interactive navigation and CTA sections",
      "Clean visual hierarchy for better conversion",
    ],
    stats: [
      {
        label: "Category",
        value: "Fitness",
      },
      {
        label: "Platform",
        value: "Web",
      },
      {
        label: "Focus",
        value: "User Experience",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Himāla Cove",
    category: "Hospitality & Resort",
    description:
      "A premium resort experience that brings rooms, mountain views, experiences, amenities and guest stories into one immersive platform.",
    longDescription:
      "Himāla Cove is a hospitality-focused website created around the experience of staying beside Phewa Lake. The platform presents rooms and suites, resort experiences, amenities, guest stories and location information through an elegant, editorial-style interface.",
    image: pokharaResortImage,
    liveUrl: "https://pokhara-resort-xi.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    features: [
      "Premium resort and hospitality presentation",
      "Room and suite showcase",
      "Experiences and activities section",
      "Amenities and service highlights",
      "Guest testimonials and stories",
      "Responsive gallery and visual storytelling",
    ],
    stats: [
      {
        label: "Category",
        value: "Hospitality",
      },
      {
        label: "Platform",
        value: "Web",
      },
      {
        label: "Focus",
        value: "Experience",
      },
    ],
  },
];