import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import TeamCard from "./TeamCard";
import { teamMembers } from "../../../data/team";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalMembers = teamMembers.length;

  const goToNext = () => {
    if (totalMembers <= 1) return;

    setActiveIndex((current) => (current + 1) % totalMembers);
  };

  const goToPrevious = () => {
    if (totalMembers <= 1) return;

    setActiveIndex((current) => (current - 1 + totalMembers) % totalMembers);
  };

  useEffect(() => {
    if (isPaused || totalMembers <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalMembers);
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, totalMembers]);

  const visibleMembers = useMemo(() => {
    if (!totalMembers) return [];

    const previousIndex = (activeIndex - 1 + totalMembers) % totalMembers;
    const nextIndex = (activeIndex + 1) % totalMembers;

    return [
      {
        member: teamMembers[previousIndex],
        position: "left" as const,
      },
      {
        member: teamMembers[activeIndex],
        position: "center" as const,
      },
      {
        member: teamMembers[nextIndex],
        position: "right" as const,
      },
    ];
  }, [activeIndex, totalMembers]);

  if (!totalMembers) return null;

  return (
    <section id="team" className="relative overflow-hidden bg-[var(--bg-primary)] pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-16 xl:px-20">
        {/* SECTION HEADER */}

        <div className="mb-2 flex flex-col items-center text-center sm:mb-3 lg:mb-4">
          <h2 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)] sm:text-5xl lg:text-[3.2rem]">
            Meet the people
            <br />
            <span className="text-[#3157D5]">behind Bytherix.</span>
          </h2>

          <p className="mt-3 max-w-lg text-[10px] leading-[1.7] text-[var(--text-secondary)] sm:mt-4 sm:text-xs">
            The people behind the ideas, products and experiences we build at Bytherix.
          </p>
        </div>

        {/* TEAM CAROUSEL */}

        <div className="relative mx-auto w-full max-w-[1350px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* LEFT ARROW */}

          <button type="button" onClick={goToPrevious} aria-label="Previous team member" className="absolute left-0 top-[180px] z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE3F2] bg-white text-[#132A57] shadow-md transition-all duration-300 hover:border-[#3157D5] hover:bg-[#3157D5] hover:text-white active:scale-95 sm:left-1 sm:top-[200px] sm:h-11 sm:w-11 lg:left-2 lg:top-[225px] lg:h-12 lg:w-12 xl:left-4">
            <ChevronLeft size={19} strokeWidth={1.8} />
          </button>

          {/* RIGHT ARROW */}

          <button type="button" onClick={goToNext} aria-label="Next team member" className="absolute right-0 top-[180px] z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE3F2] bg-white text-[#132A57] shadow-md transition-all duration-300 hover:border-[#3157D5] hover:bg-[#3157D5] hover:text-white active:scale-95 sm:right-1 sm:top-[200px] sm:h-11 sm:w-11 lg:right-2 lg:top-[225px] lg:h-12 lg:w-12 xl:right-4">
            <ChevronRight size={19} strokeWidth={1.8} />
          </button>

          {/* CARDS */}

          <div className="relative mx-auto overflow-hidden px-6 pt-3 sm:px-9 sm:pt-4 lg:px-11 lg:pt-5 xl:px-12">
            <motion.div layout className="flex min-h-[360px] items-start justify-center gap-2 sm:min-h-[400px] sm:gap-3 lg:min-h-[450px] lg:gap-4 xl:min-h-[480px]">
              {visibleMembers.map(({ member, position }) => (
                <TeamCard key={`${member.id}-${position}`} member={member} position={position} active={position === "center"} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* CAROUSEL DOTS */}

        <div className="mt-3 flex items-center justify-center gap-1.5 sm:mt-4 lg:mt-5">
          {teamMembers.map((member, index) => (
            <button key={member.id} type="button" aria-label={`Show ${member.name}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => setActiveIndex(index)} className={`h-1 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3157D5]/40 ${index === activeIndex ? "w-7 bg-[#132A57]" : "w-1 bg-[#B9C3D5] hover:bg-[#3157D5]/60"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}