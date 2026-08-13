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
    setActiveIndex((current) => (current + 1) % totalMembers);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalMembers) % totalMembers);
  };

  /*
   * Automatic carousel
   */
  useEffect(() => {
    if (isPaused || totalMembers <= 1) return;

    const interval = window.setInterval(() => {
      goToNext();
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, totalMembers]);

  /*
   * Previous | Active | Next
   */
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

  if (!totalMembers) {
    return null;
  }

  return (
    <section
      id="team"
      className="
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div
          className="
    mb-10
    lg:mb-12
  "
        >
          {/* Section label */}
          <p
            className="
      mb-3
      text-[9px]
      font-semibold
      uppercase
      tracking-[0.2em]
      text-cyan-500
      sm:text-[10px]
    "
          >
            Our Team
          </p>

          {/* Main heading */}
          <h2
            className="
      max-w-xl
      font-display
      text-[2.25rem]
      font-bold
      leading-[0.95]
      tracking-[-0.035em]
      text-[var(--text-primary)]
      sm:text-5xl
      lg:text-[3.2rem]
    "
          >
            Meet the people
            <br />
            <span className="text-[#3157D5]">behind Bytherix.</span>
          </h2>

          {/* Description */}
          <p
            className="
      mt-5
      max-w-md
      text-[10px]
      leading-[1.7]
      text-[var(--text-secondary)]
      sm:text-xs
    "
          >
            The people behind the ideas, products and experiences we build at
            Bytherix.
          </p>
        </div>

        {/* =========================
            TEAM CAROUSEL
        ========================== */}
        <div
          className="
            relative
            w-full
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous team member"
            className="
              absolute
              left-1
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE3F2]
              bg-white
              text-[#132A57]
              shadow-sm
              transition-all
              duration-300
              hover:border-[#3157D5]
              hover:bg-[#3157D5]
              hover:text-white
              sm:left-3
              sm:h-11
              sm:w-11
              lg:-left-5
            "
          >
            <ChevronLeft size={18} strokeWidth={1.8} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next team member"
            className="
              absolute
              right-1
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE3F2]
              bg-white
              text-[#132A57]
              shadow-sm
              transition-all
              duration-300
              hover:border-[#3157D5]
              hover:bg-[#3157D5]
              hover:text-white
              sm:right-3
              sm:h-11
              sm:w-11
              lg:-right-5
            "
          >
            <ChevronRight size={18} strokeWidth={1.8} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-10 sm:px-14 lg:px-16">
            <motion.div
              layout
              className="
                flex
                h-[350px]
                items-center
                justify-center
                gap-3
                sm:h-[390px]
                sm:gap-4
                lg:h-[430px]
                lg:gap-5
              "
            >
              {visibleMembers.map(({ member, position }) => (
                <TeamCard
                  key={`${member.id}-${position}`}
                  member={member}
                  position={position}
                  active={position === "center"}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* =========================
            CAROUSEL DOTS
        ========================== */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              type="button"
              aria-label={`Show ${member.name}`}
              onClick={() => setActiveIndex(index)}
              className={`
                h-1
                rounded-full
                transition-all
                duration-500
                ${
                  index === activeIndex
                    ? "w-7 bg-[#132A57]"
                    : "w-1 bg-[#B9C3D5]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
