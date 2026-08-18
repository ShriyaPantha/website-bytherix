// Solid color mapping aligned with your theme variables
const SOLID_AVATARS = [
  { initials: "JD", bg: "bg-[#920202]", ring: "ring-[#920202]/50" },
  { initials: "AK", bg: "bg-[#00258d]", ring: "ring-[#00258d]/50" },
  { initials: "SN", bg: "bg-[#029947]", ring: "ring-[#029947]/50" },
];

const Star = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.85L10 14.91l-5.25 2.76 1-5.85L1.5 7.68l5.87-.85L10 1.5z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M8 7h9v9"
    />
  </svg>
);

const Play = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="ml-0.5 h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M8.5 5.25a1 1 0 011.52-.86l8.5 6.75a1 1 0 010 1.72l-8.5 6.75A1 1 0 018.5 18.75V5.25z" />
  </svg>
);

const SocialProof = () => {
  return (
    <div className="mt-7 w-full max-w-xl">

      <div className="flex items-center justify-center gap-4 lg:justify-start">

        {/* Avatars */}
        <div className="flex shrink-0 items-center">
          {SOLID_AVATARS.map((avatar, index) => (
            <span
              key={avatar.initials}
              className={`
                relative
                inline-flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                ${avatar.bg}
                text-white
                ring-2
                ${avatar.ring}
                text-[9px]
                font-bold
                tracking-tight
                shadow-md
                transition-all
                duration-300
                hover:z-10
                hover:-translate-y-1
              `}
              style={{
                marginLeft: index === 0 ? 0 : "-7px",
              }}
            >
              {avatar.initials}
            </span>
          ))}

          {/* Count */}
          <span
            className="
              relative
              ml-[-7px]
              inline-flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-[color-mix(in_srgb,var(--color-blue)_40%,transparent)]
              bg-[var(--color-blue)]
              text-[8px]
              font-bold
              tracking-tight
              text-white
              ring-2
              ring-[#05070b]
              shadow-md
            "
          >
            2.4K+
          </span>
        </div>

        {/* Rating */}
        <div className="h-8 w-px bg-white/[0.08]" />

        <div className="min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>

            <span className="text-[11px] font-semibold text-white/70">
              4.8
            </span>
          </div>

          <p className="mt-0.5 text-[11px] text-white/40">
            Trusted by <span className="text-white/60">1K+</span> clients
          </p>
        </div>
      </div>

      {/* ============================================================
          CTA AREA
          ============================================================ */}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">

        {/* Primary */}
        <a
          href="#services"
          className="
            group
            inline-flex
            h-11
            items-center
            justify-center
            gap-2.5
            rounded-full
            bg-white
            px-5
            text-sm
            font-semibold
            text-[#080b12]
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-white/90
            hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]
            active:translate-y-0
          "
        >
          <span>Explore Services</span>
          <ArrowUpRight />
        </a>

        {/* Secondary */}
        <a
          href="#video"
          className="
            group
            inline-flex
            h-11
            items-center
            gap-2.5
            rounded-full
            px-3
            text-sm
            font-medium
            text-white/70
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[color-mix(in_srgb,var(--color-blue)_30%,transparent)]
              bg-[color-mix(in_srgb,var(--color-blue)_12%,transparent)]
              text-blue-200
              shadow-[0_0_24px_rgba(0,37,141,0.2)]
              transition-all
              duration-300
              group-hover:border-[color-mix(in_srgb,var(--color-blue)_50%,transparent)]
              group-hover:bg-[color-mix(in_srgb,var(--color-blue)_20%,transparent)]
              group-hover:shadow-[0_0_28px_rgba(0,37,141,0.35)]
            "
          >
            <Play />
          </span>

          <span className="text-left">
            <span className="block text-[13px] font-medium text-white/80 transition-colors group-hover:text-white">
              Watch our video
            </span>

            <span className="block text-[10px] text-white/35">
              See how we work
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialProof;