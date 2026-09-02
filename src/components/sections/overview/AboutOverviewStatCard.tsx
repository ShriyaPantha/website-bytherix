"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface AboutOverviewStat {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly description: string;
  readonly accentWords?: readonly string[];
}

interface AboutOverviewStatCardProps {
  readonly stat: AboutOverviewStat;
  readonly index?: number;
  readonly className?: string;
  readonly footer?: ReactNode;
}

const STAT_GRADIENT = `
  bg-gradient-to-r
  from-[#2F2F2F]
  via-[#6F5A2A]
  to-[#B48618]
  bg-clip-text
   dark:from-[#E8D7A8]
  dark:via-[#6F5A2A]
  dark:to-[#B48618]
  text-transparent
`;

const renderValue = (value: string) => {
  return (
    <span className={STAT_GRADIENT}>
      {value}
    </span>
  );
};

const renderDescription = (description: string) => {
  return (
    <span className={STAT_GRADIENT}>
      {description}
    </span>
  );
};

const AboutOverviewStatCard = ({
  stat,
  index = 0,
  className = "",
  footer,
}: AboutOverviewStatCardProps) => {
  return (
    <motion.article
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
      whileHover={{
        y: -3,
      }}
      className={`
  group
  relative
  mx-auto
  flex
  min-h-45
  w-full
  sm:w-[92%]
  md:w-[88%]
  lg:w-[85%]
  xl:w-[85%]
  2xl:w-[75%]
  flex-col
  overflow-hidden
  rounded-2xl
  border-[2.5px]
  border-[#777777]
  bg-transparent
  px-5
  py-4
  font-inter
  shadow-none
  transition-transform
  duration-300
  ${className}
`}
    >
      {/* Top highlight */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-[#2F2F2F]/20
        "
      />

      {/* Stat title */}
      <div className="relative z-10 flex justify-end">
        <span
          className={`
            ${STAT_GRADIENT}
            font-inter
            text-base
            font-medium
            leading-none
            tracking-tight
            sm:text-lg
          `}
        >
          [{stat.label}]
        </span>
      </div>

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mt-5
          flex
          flex-1
          flex-col
          justify-end
        "
      >
        {/* Stat value */}
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.08 + 0.1,
            ease: "easeOut",
          }}
          className="
            block
            font-inter
            text-4xl
            font-bold
            leading-none
            tracking-[-0.04em]
            sm:text-5xl
          "
        >
          {renderValue(stat.value)}
        </motion.span>

        {/* Description */}
        <p
          className="
  font-inter
  text-sm
  leading-[1.7]
  bg-gradient-to-r
  from-[#2F2F2F]
  via-[#795548]
  to-[#B48618]
  bg-clip-text
  text-transparent
  sm:text-base
  dark:from-[#F1F1F1]
  dark:via-[#A88B70]
  dark:to-[#D4AF37]
"
        >
          {renderDescription(stat.description)}
        </p>
      </div>

      {/* Footer */}
      {footer && (
        <div
          className={`
            relative
            z-10
            mt-4
            font-inter
            ${STAT_GRADIENT}
          `}
        >
          {footer}
        </div>
      )}

      {/* Very subtle hover light */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          h-full
          w-1/3
          rotate-12
          bg-white/10
          opacity-0
          blur-xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
};

export default AboutOverviewStatCard;