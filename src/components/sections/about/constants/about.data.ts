import BYTHERIXlogo from "../../../../assets/BYTHERIXlogo.png";
import hero from "../../../../assets/hero.png";
import react from "../../../../assets/react.svg";
import vite from "../../../../assets/vite.svg";

/* =========================================================
   COLORS
========================================================= */

export const AZURE_BLUE = "#3157d5";

export const VIVID_RED = "#fd3b30";

export const SOFT_TEAL = "#29bcae";

export const FEATURE_GREEN = "#188670";

/* =========================================================
   TYPES
========================================================= */

export type FeatureIconType =
  | "code"
  | "shield"
  | "globe";

export interface BuilderFeature {
  num: string;
  title: string;
  body: string;
  icon: FeatureIconType;
}

export interface BuilderSlide {
  image: string;
  label: string;
  title: string;
  body: string;
  features: BuilderFeature[];
  
}

/* =========================================================
   SLIDES
========================================================= */

export const BUILDER_SLIDES: BuilderSlide[] = [
  {
    image: BYTHERIXlogo,
    label: "Motion System",
    title:
      "Make every interaction feel alive.",
    body: `Create smooth interactions,
scroll effects, transitions and
micro animations that make
your interface feel polished
and responsive.`,
    features: [
      {
        num: "01",
        title: "Interactive Experiences",
        body:
          "We create smooth interfaces with meaningful motion, transitions and interactive experiences.",
        icon: "code",
      },
      {
        num: "02",
        title: "Responsive Motion",
        body:
          "Every animation is carefully designed to feel natural across desktop, tablet and mobile.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Modern Interfaces",
        body:
          "Clean visual systems combine modern UI, motion and technology to create memorable products.",
        icon: "globe",
      },
    ],
  },

  {
    image: hero,
    label: "Smart Workflow",
    title:
      "Design. Animate. Ship.",
    body: `Build the experience visually,
adjust the timing and interaction,
and turn your ideas into
production-ready experiences.`,
    features: [
      {
        num: "01",
        title: "Design Faster",
        body:
          "Turn ideas into interactive prototypes and real digital experiences without unnecessary complexity.",
        icon: "code",
      },
      {
        num: "02",
        title: "Build Securely",
        body:
          "Security and reliability remain part of the system from the first design decision to deployment.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Ready to Scale",
        body:
          "Our systems are designed to evolve with your business, users and future technology.",
        icon: "globe",
      },
    ],
  },

  {
    image: react,
    label: "AI & Intelligent Systems",
    title:
      "Build smarter digital systems.",
    body: `Develop intelligent solutions,
combine automation with modern
technology, and turn complex
ideas into practical systems.`,
    features: [
      {
        num: "01",
        title: "AI Solutions",
        body:
          "Intelligent systems are designed around real business and user needs.",
        icon: "code",
      },
      {
        num: "02",
        title: "Smart Automation",
        body:
          "Automate repetitive workflows and improve efficiency with reliable technology.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Future Ready",
        body:
          "Scalable systems are built to evolve with users, products and technology.",
        icon: "globe",
      },
    ],
    
  },

  {
    image: vite,
    label: "Digital Products & Innovation",
    title:
      "Turn ideas into real products.",
    body: `Design, develop and launch
scalable digital products that
solve real problems and create
measurable user value.`,
    features: [
      {
        num: "01",
        title: "Product Engineering",
        body:
          "From concept to deployment, every product is engineered with usability, performance and reliability in mind.",
        icon: "code",
      },
      {
        num: "02",
        title: "Scalable Architecture",
        body:
          "Flexible and maintainable architectures help products grow smoothly as users and requirements increase.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Digital Innovation",
        body:
          "Modern technologies are combined to transform ideas into practical and future-ready digital solutions.",
        icon: "globe",
      },
    ],
  } 
];