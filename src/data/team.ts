export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  slug: string;
  description?: string;
  journey?: string;
  whyBytherix?: string;
  vision?: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anish Parajuli",
    role: "Founder & CEO",
    image: "/team/founder.svg",
    slug: "anish-parajuli",

    description:
      "My vision is to create meaningful technology that inspires people and contributes to a smarter future.",

    journey:
      "My journey into technology has been driven by curiosity, experimentation, and a desire to turn ideas into meaningful solutions. I have explored programming, cybersecurity, and AI-based systems while continuously building projects and strengthening my technical skills. I believe that real learning comes from doing — creating projects, solving problems, experimenting with new ideas, and constantly pushing beyond my limits.",

    whyBytherix:
      "Bytherix was created from the belief that technology should have a purpose. It should not only look innovative but should also solve real problems, create opportunities, and provide meaningful experiences. This belief became one of the foundations behind Bytherix.",

    vision:
      "My vision for Bytherix is to build a technology-driven organization where creativity, innovation, and purpose come together. I want Bytherix to become a platform where ideas can grow into meaningful products, services, and experiences that create real value.",

    linkedin: "",
    github: "",
  },

  {
    id: 2,
    name: "Nikesh Munikar",
    role: "Managing Director",
    image: "/team/md.svg",
    slug: "nikesh-munikar",

    description: "Short description about the team member.",
    journey: "More details about Nikesh's journey will be shared soon.",
    whyBytherix:
      "More details about Nikesh's contribution to Bytherix will be shared soon.",
    vision: "More details about Nikesh's vision will be shared soon.",

    linkedin: "",
    github: "",
  },

  {
    id: 3,
    name: "Prabin Mahato",
    role: "Head of Human Resource",
    image: "/team/hr.svg",
    slug: "prabin-mahato",

    description: "Short description about the team member.",
    journey: "More details about Prabin's journey will be shared soon.",
    whyBytherix:
      "More details about Prabin's contribution to Bytherix will be shared soon.",
    vision: "More details about Prabin's vision will be shared soon.",

    linkedin: "",
    github: "",
  },

  {
    id: 4,
    name: "Shriya Pantha",
    role: "Project Head",
    image: "/team/shriya.jpeg",
    slug: "shriya-pantha",

    description: "Short description about the team member.",
    journey: "More details about Shriya's journey will be shared soon.",
    whyBytherix:
      "More details about Shriya's contribution to Bytherix will be shared soon.",
    vision: "More details about Shriya's vision will be shared soon.",

    linkedin: "",
    github: "",
  },
];