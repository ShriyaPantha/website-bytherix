"use client";

import { motion } from "framer-motion";

import AboutOverviewStatCard, {
  type AboutOverviewStat,
} from "./AboutOverviewStatCard";

const ABOUT_OVERVIEW_STATS: readonly AboutOverviewStat[] = [
  {
    id: "projects",
    label: "Project",
    value: "70+",
    description:
      "Cross-industry expertise driving innovation at every stage of growth.",
  },
  {
    id: "experience",
    label: "Experience",
    value: "3+",
    description:
      "Shaping the future of brands through intentional product design.",
  },
  {
    id: "satisfaction",
    label: "Satisfaction",
    value: "97%",
    description:
      "High-performing websites, delivered on time, every time.",
  },
];

const AboutOverviewStats = () => {
  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-3
          sm:gap-4
          lg:gap-6
        "
      >
        {ABOUT_OVERVIEW_STATS.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <AboutOverviewStatCard
              stat={stat}
              index={index}
              className="
                w-full
                sm:w-full
              "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutOverviewStats;