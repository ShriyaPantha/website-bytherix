import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SDLCCard from "./ui/SDLCCard";
import { sdlcSteps } from "./data/sdlcData";

const SDLCSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [horizontalDistance, setHorizontalDistance] = useState(0);

  useLayoutEffect(() => {
    const calculateDistance = () => {
      if (!trackRef.current) return;

      const viewportWidth = window.innerWidth;
      const gutter = viewportWidth < 768 ? 16 : viewportWidth * 0.04;
      const trackWidth = trackRef.current.scrollWidth;
      const availableWidth = viewportWidth - gutter * 2;
      const distance = Math.max(trackWidth - availableWidth, 0);

      setHorizontalDistance(distance);
    };

    calculateDistance();

    const resizeObserver = new ResizeObserver(calculateDistance);
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateDistance);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -horizontalDistance]);

  const x = useSpring(rawX, {
    stiffness: 110,
    damping: 28,
    mass: 0.6,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] w-full bg-white pb-6 text-[#172867] transition-colors duration-300 dark:bg-[#050A18] dark:text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="sticky top-0 flex flex-col justify-start overflow-hidden pt-[22px] md:pt-[32px] lg:pt-[38px]">
        <div className="mx-4 mb-4 md:mx-[4vw] md:mb-[26px] lg:mb-[30px]">
          <h2 className="m-0 text-[42px] font-bold leading-none tracking-[-0.05em] text-[#172867] dark:text-white md:text-[56px] lg:text-[clamp(48px,6vw,78px)] lg:leading-[0.95]">
            We Deliver Better
          </h2>

          <p className="mt-3 w-full text-[13px] font-normal leading-[1.5] text-[#333333] dark:text-[#D4DAE8] md:mt-4 md:text-[14px] lg:mt-[22px] lg:text-[15px] lg:leading-[1.55]">
            We Deliver Better isn't just a tagline, it's the standard behind every project we build. By pairing strategic discovery with modern, high-performance tech stacks, we create custom websites and mobile applications that excel in speed, security, and scalability. We treat your digital products as living assets, continuously refining user experiences, fortifying security, and optimizing performance to ensure your brand always stays ahead of market demands.
          </p>
        </div>

        <div className="relative z-10 w-full overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max shrink-0 gap-4 pl-4 pr-4 will-change-transform md:gap-6 md:pl-[4vw] md:pr-[4vw] lg:gap-7"
          >
            {sdlcSteps.map((step) => (
              <SDLCCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>

        <div className="relative z-30 mt-4 flex h-[30px] shrink-0 items-center justify-center gap-2 md:mt-5">
          <span
            aria-hidden="true"
            className="flex h-7 w-5 items-center justify-center text-[28px] font-semibold leading-none text-[#172867] dark:text-white md:text-[30px]"
          >
            ‹
          </span>

          <div className="flex h-4 items-center gap-[6px]">
            {sdlcSteps.map((step, index) => (
              <span
                key={step.number}
                aria-hidden="true"
                className={`block h-[7px] w-[7px] shrink-0 rounded-full ${index % 3 === 0 ? "bg-[#3157D5]" : index % 3 === 1 ? "bg-[#D83A3A]" : "bg-[#568D6C]"} md:h-[8px] md:w-[8px]`}
              />
            ))}
          </div>

          <span
            aria-hidden="true"
            className="flex h-7 w-5 items-center justify-center text-[28px] font-semibold leading-none text-[#172867] dark:text-white md:text-[30px]"
          >
            ›
          </span>
        </div>
      </div>
    </section>
  );
};

export default SDLCSection;
