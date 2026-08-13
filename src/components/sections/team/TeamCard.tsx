import { motion } from "framer-motion";
import type { TeamMember } from "../../../data/team";

interface TeamCardProps {
  member: TeamMember;
  active?: boolean;
  position: "left" | "center" | "right";
}

export default function TeamCard({
  member,
  active = false,
  position,
}: TeamCardProps) {
  const isCenter = position === "center";

  const openProfile = () => {
    window.open(
      `/team/${member.slug}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfile();
    }
  };

  return (
    <motion.article
      layout
      initial={false}
      animate={{
        width: isCenter ? "48%" : "19%",
        height: isCenter ? 360 : 305,
        scale: isCenter ? 1 : 0.96,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={openProfile}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`View ${member.name}'s profile`}
      className={`
        group
        relative
        shrink-0
        cursor-pointer
        overflow-hidden
        rounded-[18px]
        bg-[#F3F5F8]
        outline-none
        transition-shadow
        duration-300
        hover:shadow-xl
        focus-visible:ring-2
        focus-visible:ring-[#3157D5]
        focus-visible:ring-offset-2
        ${active ? "z-20" : "z-10"}
      `}
    >
      {/* Image */}
      <motion.img
        src={member.image}
        alt={member.name}
        animate={{
          scale: isCenter ? 1 : 1.03,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-500
          group-hover:scale-[1.025]
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-black/85
          via-black/25
          to-transparent
        "
      />

      {/* Click indicator */}
      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-4
          z-20
          flex
          h-9
          w-9
          translate-y-1
          items-center
          justify-center
          rounded-full
          bg-white/90
          text-[#132A57]
          opacity-0
          shadow-md
          backdrop-blur-sm
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
        aria-hidden="true"
      >
        <span className="text-base leading-none">↗</span>
      </div>

      {/* Side cards */}
      {!isCenter && (
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            flex
            justify-center
            pb-5
          "
        >
          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white
              [writing-mode:vertical-rl]
            "
          >
            {member.role}
          </span>
        </div>
      )}

      {/* Active card */}
      {isCenter && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.12,
          }}
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-5
            sm:p-6
          "
        >
          <p
            className="
              mb-1.5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-white/70
            "
          >
            {member.role}
          </p>

          <h3
            className="
              font-display
              text-xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-2xl
            "
          >
            {member.name}
          </h3>

          {member.description && (
            <p
              className="
                mt-1.5
                max-w-sm
                text-[9px]
                leading-relaxed
                text-white/70
                sm:text-[10px]
              "
            >
              {member.description}
            </p>
          )}

          {/* Small hint */}
          <p
            className="
              mt-3
              text-[8px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-white/50
              transition-colors
              duration-300
              group-hover:text-white/80
            "
          >
            View profile ↗
          </p>
        </motion.div>
      )}
    </motion.article>
  );
}