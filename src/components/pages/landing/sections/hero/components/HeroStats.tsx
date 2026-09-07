import { STATS } from "../constants/heroData";

const HeroStats = () => {
  return (
    <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 lg:mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1.5 sm:gap-2"
          >
            <span
              className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${stat.bg} text-white`}
            >
              {stat.icon}
            </span>

            <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">
              {stat.value}
            </p>

            <div>
              <p className="text-xs sm:text-sm font-semibold text-white/90">
                {stat.label}
              </p>

              <p className="text-[11px] sm:text-xs text-white/40 mt-0.5 leading-snug">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;