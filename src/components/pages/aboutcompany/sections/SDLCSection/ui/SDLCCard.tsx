import type { SDLCStep } from "../data/sdlcData";

interface SDLCCardProps {
  step: SDLCStep;
}

const SDLCCard = ({ step }: SDLCCardProps) => {
  const colorIndex = Number(step.number) % 3;

  const accentColor =
    colorIndex === 1 ? "#3157D5" : colorIndex === 2 ? "#D83A3A" : "#568D6C";

  return (
    <article className="relative flex h-[410px] w-[390px] shrink-0 flex-col overflow-hidden rounded-[26px] border border-[#D9DFEA] bg-[#F3F5F8] shadow-[0_8px_24px_rgba(23,40,103,0.08)] transition-all duration-300 dark:border-[#263451] dark:bg-[#10192D] dark:shadow-[0_12px_32px_rgba(0,0,0,0.3)] max-lg:h-[390px] max-lg:w-[350px] max-md:h-[375px] max-md:w-[calc(100vw-32px)] max-md:rounded-[22px]">
      <div className="relative h-[150px] shrink-0 bg-[#172867] dark:bg-[#101B3D] max-lg:h-[140px] max-md:h-[125px]">
        <div className="absolute left-0 top-0 h-[4px] w-full" style={{ backgroundColor: accentColor }} />

        <span className="absolute bottom-[-9px] left-0 text-[78px] font-normal leading-none tracking-[-0.06em] text-white max-lg:text-[70px] max-md:text-[64px]">
          {step.number}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-7 pb-[26px] max-md:px-[22px] max-md:pb-5">
        <div className="flex min-h-[78px] flex-col items-end justify-end max-md:min-h-[68px]">
          <h3 className="w-full text-right text-[25px] font-extrabold leading-none text-[#172867] dark:text-white max-md:text-[21px]">
            {step.title}
          </h3>

          <span className="mt-2 h-[3px] w-[58px]" style={{ backgroundColor: accentColor }} />
        </div>

        <p className="my-[15px] mb-5 text-[15px] font-normal leading-[1.5] text-[#3F4654] dark:text-[#C4CCDC] max-md:text-[13px]">
          {step.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-[5px] gap-y-2">
          {step.processes.map((process, index) => (
            <div key={process} className="flex items-center gap-[5px]">
              <span className="inline-flex min-h-7 items-center justify-center whitespace-nowrap rounded-full border border-[#D8DEE8] bg-white px-[13px] py-[5px] text-[12px] font-semibold text-[#172867] transition-colors duration-300 dark:border-[#33405A] dark:bg-[#1B2740] dark:text-[#E4E8F0] max-md:px-[10px] max-md:text-[11px]">
                {process}
              </span>

              {index !== step.processes.length - 1 && (
                <span className="text-[17px] leading-none" style={{ color: accentColor }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SDLCCard;