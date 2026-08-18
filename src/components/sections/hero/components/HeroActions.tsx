const HeroActions = () => {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
      <a
        href="#services"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-[#0a0f1e] bg-white hover:bg-white/90 transition-all duration-200 text-sm shadow-lg shadow-black/20"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        Explore Services

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

    </div>
  );
};

export default HeroActions;