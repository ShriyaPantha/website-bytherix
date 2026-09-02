"use client";

import AboutOverviewStats from "./AboutOverviewStats";
import BYTHERIXlogo from "../../../assets/BYTHERIXlogo.png";

interface AboutOverviewProps {
  readonly backgroundImage?: string;
}

const AboutOverview = ({
  backgroundImage,
}: AboutOverviewProps) => {
  return (
    <section
      id="about-overview"
      aria-labelledby="about-overview-title"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      {/* ==================================================
          BACKGROUND
      =================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Existing background image */}
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            draggable={false}
            className="
              absolute
              left-1/2
              top-1/2
              w-full
              max-w-5xl
              -translate-x-1/2
              -translate-y-1/2
              select-none
              object-contain
              opacity-10
              sm:max-w-6xl
              lg:max-w-7xl
              dark:opacity-[0.12]
            "
          />
        )}

        {/* ==================================================
            BYTHERIX LOGO WATERMARK
        =================================================== */}
        <img
          src={BYTHERIXlogo}
          alt=""
          draggable={false}
          className="
            absolute
            left-1/2
            top-1/2
            w-[100%]
            -translate-x-1/2
            -translate-y-1/2
            select-none
            object-contain
            opacity-[0.18]
            sm:w-[95%]
            md:w-[90%]
            lg:w-[85%]
            xl:w-[80%]
            2xl:w-[75%]
            dark:opacity-[0.22]
          "
        />

        {/* Background overlay */}
        <div
          className="
            absolute
            inset-0
            bg-white/30
            dark:bg-slate-950/25
          "
        />
      </div>

      {/* ==================================================
          CONTENT
      =================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Heading */}
        <div className="max-w-3xl">
          <h2
  id="about-overview-title"
  className="
    font-inter
    text-4xl
    font-extrabold
    uppercase
    leading-[0.9]
    tracking-[-0.045em]
    text-[#14276B]
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
>
  <span className="dark:text-white/90">
    Your
  </span>{" "}
  <span className="dark:text-[#3157D5]">
    Imagination
  </span>
  <br />
  <span className="dark:text-white/90">
    Our Job
  </span>
</h2>
        </div>

        {/* Stats */}
        <div
          className="
            mt-12
            sm:mt-28
            lg:mt-32
          "
        >
          <AboutOverviewStats />
        </div>

        {/* Description */}
        <div
          className="
            mx-auto
            mt-10
            max-w-5xl
            lg:mt-12
          "
        >
          <p
            className="
  font-inter
  text-sm
  text-justify
  leading-[1.7]
  bg-gradient-to-r
  from-[#2F2F2F]
  via-[#795548]
  to-[#B48618]
  bg-clip-text
  text-transparent
  sm:text-base
  lg:text-lg
  dark:from-[#D6D6D6]
  dark:via-[#9A7B68]
  dark:to-[#C9A227]
"
          >
            Based in Kathmandu, Bytherix Technology is a
            full-service web design and development agency
            dedicated to shaping high-impact digital
            experiences since 2023. We partner with
            businesses, institutions, and organizations both
            across Nepal and internationally, delivering
            bespoke web solutions tailored precisely to their
            strategic goals. Combining creative vision with
            reliable engineering, our team bridges local
            expertise with global standards to build
            powerful, future-ready digital products that
            drive growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;