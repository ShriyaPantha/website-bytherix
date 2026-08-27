import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import SocialProof from "./SocialProof";

interface HeroContentProps {
  docked: boolean;
}

const ROTATING_WORDS = [
  "Web Applications",
  "AI Solutions",
  "Cybersecurity",
  "IoT Systems",
  "Robotics",
  "PCB Design",
  "Mobile Apps",
  "Smart Tools",
];

const HeroContent = ({ docked }: HeroContentProps) => {
  const rotatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rotator = rotatorRef.current;

    if (!rotator) return;

    const words = gsap.utils.toArray<HTMLElement>(
      ".hero-rotating-word",
      rotator
    );

    if (!words.length) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(words, {
        opacity: 0,
        y: 28,
        filter: "blur(6px)",
      });

      // First word
      gsap.set(words[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      // Rotating words timeline
      const timeline = gsap.timeline({
        repeat: -1,
        paused: true,
      });

      words.forEach((word, index) => {
        const nextWord = words[(index + 1) % words.length];

        timeline
          // Hold current word
          .to({}, {
            duration: 1,
          })

          // Exit current word
          .to(word, {
            opacity: 0,
            y: -24,
            filter: "blur(5px)",
            duration: 0.9,
            ease: "power2.inOut",
          })

          // Prepare next word
          .set(nextWord, {
            opacity: 0,
            y: 26,
            filter: "blur(6px)",
          })

          // Enter next word
          .to(nextWord, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          });
      });

      timeline.play();

      return () => {
        timeline.kill();
      };
    }, rotator);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="
        relative
        z-20
        w-full
        max-w-[620px]
        mx-auto
        lg:mx-0
        text-center
        lg:text-left
      "
      style={{
        opacity: docked ? 1 : 0,
        transform: docked ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Heading */}
      <div>
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[4.25rem]
            xl:text-[4.65rem]
            font-extrabold
            leading-[0.98]
            tracking-[-0.045em]
            text-white
          "
        >
          We Build
        </h1>

        {/* Rotating Words */}
        <div
          ref={rotatorRef}
          className="
            relative

            /* Responsive right shift */
            ml-7
            sm:ml-10
            md:ml-12
            lg:ml-15
            xl:ml-20

            mt-3

            h-[3.2rem]
            sm:h-[3.7rem]
            md:h-[4.2rem]
            lg:h-[4.7rem]
            xl:h-[5rem]

            overflow-hidden
          "
        >
          {ROTATING_WORDS.map((word) => (
            <span
              key={word}
              className="
                hero-rotating-word
                absolute
                inset-x-0
                top-0
                whitespace-nowrap

                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[3.7rem]
                xl:text-[4.1rem]

                font-extrabold
                leading-none
                tracking-[-0.04em]

                bg-linear-to-r
                from-cyan-300
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent

                will-change-transform
              "
              style={{
                textShadow: "0 0 35px rgba(56,189,248,0.10)",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-[540px]
          mx-auto
          lg:mx-0
          px-2
          sm:px-0
          text-sm
          sm:text-base
          leading-[1.7]
          text-white/55
        "
      >
        We design and engineer modern digital products,
        intelligent systems, and connected experiences —
        from web and mobile platforms to AI, IoT, robotics,
        and custom hardware.
      </p>

      {/* Social Proof */}
      <div className="mt-5">
        <SocialProof />
      </div>

      {/* Reserved spacing for future content */}
      <div
        className="
          mt-7
          hidden
          lg:flex
          items-center
          gap-3
          text-[9px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-white/20
        "
      />
    </div>
  );
};

export default HeroContent;