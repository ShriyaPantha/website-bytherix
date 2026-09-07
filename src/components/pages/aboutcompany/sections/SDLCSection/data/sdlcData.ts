export interface SDLCStep {
  number: string;
  title: string;
  description: string;
  processes: string[];
}

export const sdlcSteps: SDLCStep[] = [
  {
    number: "01",
    title: "PLANNING",
    description: "We understand your goals, define project requirements, and create a clear roadmap before development begins.",
    processes: ["Understand", "Research", "Define", "Plan"],
  },
  {
    number: "02",
    title: "ANALYSIS",
    description: "We analyze business needs, users, technical requirements, and project constraints to build the right solution.",
    processes: ["Gather", "Analyze", "Validate", "Document"],
  },
  {
    number: "03",
    title: "DESIGN",
    description: "We transform requirements into intuitive interfaces, scalable architecture, and seamless user experiences.",
    processes: ["Wireframe", "Prototype", "Design", "Review"],
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description: "Our developers turn approved designs into clean, scalable, secure, and high-performance digital products.",
    processes: ["Code", "Integrate", "Develop", "Refine"],
  },
  {
    number: "05",
    title: "TESTING",
    description: "We thoroughly test functionality, performance, security, responsiveness, and usability before launch.",
    processes: ["Test", "Validate", "Fix", "Approve"],
  },
  {
    number: "06",
    title: "DEPLOYMENT",
    description: "We deploy the product to the production environment and make sure everything works smoothly for real users.",
    processes: ["Deploy", "Configure", "Monitor", "Release"],
  },
  {
    number: "07",
    title: "MAINTENANCE",
    description: "We continuously monitor, improve, optimize, and maintain the product as your business and users evolve.",
    processes: ["Monitor", "Improve", "Optimize", "Maintain"],
  },
];