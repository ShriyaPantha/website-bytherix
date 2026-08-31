export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "why-nepal-needs-ai-ml-model",
    title: "Why nepal need Ai/ML model",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are no longer technologies limited to large technology companies or developed countries. They are becoming essential tools for building smarter, more inclusive, and sustainable solutions in Nepal.",
    image: "/blog/ai-ml.jpeg",
  },
  {
    id: 2,
    slug: "nepal-cybersecurity-level",
    title: "Why nepal need Ai/ML model",
    description:
      "Cybersecurity is no longer a problem that belongs only to banks, technology companies, or governments. Today, almost every part of modern society depends on digital infrastructure.",
    image: "/blog/cybersecurity.jpeg",
  },
  {
    id: 3,
    slug: "why-robotics-companies-are-not-growing-in-nepal",
    title: "why are robotics companies not growing in nepal",
    description:
      "Robotics is no longer a technology limited to science-fiction movies or research laboratories. Around the world, robots are being used in factories, agriculture, healthcare, logistics, warehouses, construction, defense, and even restaurants.",
    image: "/blog/robotics.jpeg",
  },
];