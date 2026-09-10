import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ServiceCard from './ui/ServiceCard';
import { serviceData } from "./data/ServiceData";

const CARDS_PER_PAGE = 3;

const AllInOne: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const totalPages = Math.ceil(serviceData.length / CARDS_PER_PAGE);

  const nextPage = () => {
    setActivePage((current) => (current === totalPages - 1 ? 0 : current + 1));
  };

  const previousPage = () => {
    setActivePage((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  const nextMobileSlide = () => {
    setActiveMobileIndex((current) =>
      current === serviceData.length - 1 ? 0 : current + 1
    );
  };

  const previousMobileSlide = () => {
    setActiveMobileIndex((current) =>
      current === 0 ? serviceData.length - 1 : current - 1
    );
  };

  const startIndex = activePage * CARDS_PER_PAGE;
  const visibleServices = serviceData.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  return (
    <section
      className="relative w-full overflow-hidden bg-white px-4 pt-[clamp(22px,3vw,38px)] pb-6 text-[#172867] transition-colors duration-300 dark:bg-[#050A18] dark:text-white md:px-[4vw]"
    >

      {/* Top watermark decorations */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-4 z-0 h-80 w-80 sm:h-[420px] sm:w-[420px] lg:-left-14 lg:top-6 lg:h-[520px] lg:w-[520px] "
        viewBox="0 0 450 450" fill="none"
      >
        <path
          d="M -30 200 C 100 200 200 100 200 -30"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M -30 230 C 125 230 230 125 230 -30"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M -30 260 C 150 260 260 150 260 -30"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M -30 290 C 175 290 290 175 290 -30"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
      </svg>

      {/* Bottom watermark decorations */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 z-0 h-80 w-80 sm:h-[420px] sm:w-[420px] lg:-bottom-14 lg:-right-14 lg:h-[520px] lg:w-[520px]"
        viewBox="0 0 450 450"
        fill="none"
      >
        <path
          d="M 250 480 C 250 350 350 250 480 250"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M 220 480 C 220 325 325 220 480 220"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M 190 480 C 190 300 300 190 480 190"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
        <path
          d="M 160 480 C 160 275 275 160 480 160"
          className="stroke-[#dce8f5] dark:stroke-[#1b3158]"
          strokeWidth="3"
        />
      </svg>

      <div className="relative z-10 w-full">

        {/* Header */}
        <header className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="font-sans text-[clamp(38px,5.5vw,78px)] font-bold leading-none tracking-[-0.05em] text-[#172867] dark:text-white">
            All In One Digital Solution
          </h2>

          <p className="mx-auto mt-[clamp(10px,1.5vw,18px)] w-full max-w-[850px] text-[clamp(13px,1.2vw,17px)] font-normal leading-[1.5] text-[#333333] dark:text-[#D4DAE8]">
            From your very first launch to ongoing growth—
            <span className="text-[#d69a16]">{" "}everything your brand needs</span>{" "}
            <span className="block text-[#15945e]">under one roof.</span>
          </p>
        </header>

        {/* Cards Section */}
        <div className="mt-[clamp(22px,3vw,30px)] w-full">
          <div className="hidden w-full grid-cols-2 gap-[clamp(16px,2vw,28px)] md:grid lg:grid-cols-3">
            {visibleServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="md:hidden">
            <div className="mx-auto w-full max-w-[430px]">
              <ServiceCard service={serviceData[activeMobileIndex]} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-[clamp(16px,2vw,22px)] flex items-center justify-center gap-[clamp(8px,1vw,12px)]">

          <button
            type="button"
            onClick={() => {
              previousPage();
              previousMobileSlide();
            }}
            aria-label="Previous service"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#172867] transition-all duration-200 hover:-translate-x-1 hover:bg-[#172867]/10 focus:outline-none focus:ring-2 focus:ring-[#172867]/30 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/30"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <div className="hidden items-center gap-[clamp(6px,0.7vw,10px)] md:flex">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActivePage(index)}
                aria-label={`Go to service group ${index + 1}`}
                aria-current={activePage === index ? "true" : undefined}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "scale-125 bg-[#172867] dark:bg-white"
                    : "bg-[#172867]/30 hover:bg-[#172867]/60 dark:bg-white/30 dark:hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="flex max-w-[220px] items-center gap-1.5 overflow-hidden md:hidden">
            {serviceData.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveMobileIndex(index)}
                aria-label={`Go to ${service.title}`}
                aria-current={activeMobileIndex === index ? "true" : undefined}
                className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                  activeMobileIndex === index
                    ? "scale-125 bg-[#172867] dark:bg-white"
                    : "bg-[#172867]/30 hover:bg-[#172867]/60 dark:bg-white/30 dark:hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              nextPage();
              nextMobileSlide();
            }}
            aria-label="Next service"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#172867] transition-all duration-200 hover:translate-x-1 hover:bg-[#172867]/10 focus:outline-none focus:ring-2 focus:ring-[#172867]/30 dark:text-white dark:hover:bg-white/10 dark:focus:ring-white/30"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default AllInOne;