export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  slug: string;
  description?: string;
  journeying?: string;
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

    journeying: `Who am I? It sounds like a simple question, but working across AI, IoT, robotics, software, cybersecurity, and engineering, I've found it's not always easy to answer. Some days I say I'm an AI engineer, an app developer, a game developer, or someone who works in IoT and robotics. Sometimes I avoid saying I'm an ethical hacker — not because I'm ashamed of cybersecurity, but because the word 'hacker' is so often misunderstood. In Nepal especially, people hear it and think of crime, stolen data, or fraud. I understand why. But a hacker isn't automatically a criminal. A hacker can simply be someone who asks: How does this system work? Where can it fail? How can we make it safer? That curiosity is what drew me in, and it's the same curiosity that eventually became Bytherix.

I don't like to present myself as someone who has mastered everything — I'm a learner who loves learning. There's always another system to understand, another problem to solve, another language to pick up. The more I learn, the more I realize how much I don't know, and I've come to like that feeling. It keeps me curious. This mindset shapes how I think even outside of code. Sit me on a local bus where people are casually discussing bank details or family matters in public, and I'm not thinking about how to exploit that information — I'm thinking about how we protect people from exposing it without realizing it. Sometimes the answer isn't sophisticated technology at all; it's just awareness. That's cybersecurity too — not only breaking or defending systems, but understanding human behavior, privacy, and responsibility.

Bytherix grew out of that same belief: that technology should have a purpose. It shouldn't just look innovative — it should solve real problems, create real opportunities, and offer meaningful experiences. My vision for Bytherix is to build a technology-driven organization where creativity, innovation, and purpose come together — a place where ideas can grow into products, services, and experiences that create real value.

Maybe I don't need one label. I'm an engineer, a developer, a tech enthusiast — someone who builds, teaches, and researches technology, and yes, someone who is deeply curious about cybersecurity and ethical hacking. Technology can be used for good or bad; the responsibility was never in the technology itself, but in the person using it. And maybe that's the real challenge of being a technologist today — not just knowing what you can do, but understanding what you should do.`,

    linkedin: "https://www.linkedin.com/in/anish-parajuli-9a9333398/",
    github: "https://github.com/AnishParajuli1/AnishParajuli1",
  },

  {
    id: 2,
    name: "Nikesh Munikar",
    role: "Managing Director",
    image: "/team/md.svg",
    slug: "nikesh-munikar",

    description: "Short description about the team member.",
    journeying: "More details about Nikesh's journey will be shared soon.",

    linkedin: "",
    github: "",
  },

  {
    id: 3,
    name: "Prabin Mahato",
    role: "Head of HR",
    image: "/team/hr.svg",
    slug: "prabin-mahato",

    description: "Short description about the team member.",
    journeying: "More details about Prabin's journey will be shared soon.",

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
    journeying: "More details about Shriya's journey will be shared soon.",

    linkedin: "",
    github: "",
  },
];