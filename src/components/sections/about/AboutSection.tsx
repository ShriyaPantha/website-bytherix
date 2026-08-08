import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutFeatures } from "../../../data/aboutData";

const storyImages = {
  first: "/images/bythrix-story-1.png",
  main: "/images/bytherix-story-2.jpg",
  third: "/images/bytherix-story-3.jpg",
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
  |--------------------------------------------------------------------------
  | INTRO
  |--------------------------------------------------------------------------
  */

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.22, 0.30],
    [1, 1, 0, 0],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.30],
    [0, -30, -90],
  );

  /*
  |--------------------------------------------------------------------------
  | IMAGE SHOWCASE
  |--------------------------------------------------------------------------
  */

  const showcaseOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.16, 0.36, 0.46],
    [0, 1, 1, 0],
  );

  const sideOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.24, 0.34, 0.42],
    [0, 1, 1, 0],
  );

  const leftX = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [0, -180],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [0, 180],
  );

  const leftScale = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [1, 0.72],
  );

  const rightScale = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [1, 0.72],
  );

  /*
  |--------------------------------------------------------------------------
  | MAIN IMAGE
  |--------------------------------------------------------------------------
  */

  const mainScale = useTransform(
    scrollYProgress,
    [0.14, 0.25, 0.38, 0.44],
    [1, 1.05, 1.55, 1.75],
  );

  const mainY = useTransform(
    scrollYProgress,
    [0.14, 0.38, 0.44],
    [0, 0, -10],
  );

  const mainRadius = useTransform(
    scrollYProgress,
    [0.14, 0.30, 0.40],
    [22, 16, 10],
  );

  /*
  |--------------------------------------------------------------------------
  | POPUP BACKGROUND
  |--------------------------------------------------------------------------
  */

  const popupBackgroundOpacity = useTransform(
    scrollYProgress,
    [0.36, 0.43, 0.78, 1],
    [0, 1, 1, 1],
  );

  const popupBackgroundY = useTransform(
    scrollYProgress,
    [0.36, 0.43, 1],
    [40, 0, 0],
  );

  /*
  |--------------------------------------------------------------------------
  | POPUP CONTENT
  |--------------------------------------------------------------------------
  */

  const popupContentOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.46, 0.76, 1],
    [0, 1, 1, 1],
  );

  const popupContentY = useTransform(
    scrollYProgress,
    [0.40, 0.46, 1],
    [30, 0, 0],
  );

  const popupContentScale = useTransform(
    scrollYProgress,
    [0.40, 0.46, 1],
    [0.97, 1, 1],
  );

  /*
  |--------------------------------------------------------------------------
  | WATERMARK CONTENT
  |--------------------------------------------------------------------------
  */

  const watermarkOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.47, 0.76, 1],
    [0, 0.16, 0.16, 0.16],
  );

  const watermarkScale = useTransform(
    scrollYProgress,
    [0.40, 0.47],
    [0.97, 1],
  );

  /*
  |--------------------------------------------------------------------------
  | INLINE IMAGE
  |--------------------------------------------------------------------------
  */

  const inlineImageScale = useTransform(
    scrollYProgress,
    [0, 0.14],
    [1, 0.92],
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white text-zinc-950"
    >
      <div className="relative h-[330vh]">

        <div className="sticky top-0 h-screen overflow-hidden bg-white">

          {/* =====================================================
              INTRO
          ====================================================== */}

          <motion.div
            style={{
              opacity: introOpacity,
              y: introY,
              pointerEvents: "none",
            }}
            className="
              absolute
              inset-0
              z-10
              flex
              items-center
              justify-center
              bg-white
              px-5
              sm:px-8
            "
          >
            <div className="w-full max-w-[1120px] text-center">

              <p
                className="
                  mb-8
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.42em]
                  text-zinc-400
                  sm:text-[10px]
                "
              >
                About Bytherix
              </p>

              <h1
                className="
                  text-[38px]
                  font-medium
                  leading-[1.03]
                  tracking-[-0.055em]
                  text-zinc-500
                  sm:text-[48px]
                  md:text-[60px]
                  lg:text-[72px]
                  xl:text-[78px]
                "
              >
                We build bold,

                <InlineImage
                  src={storyImages.first}
                  alt=""
                  style={{
                    scale: inlineImageScale,
                  }}
                />

                creative technology experiences that

                <InlineImage
                  src={storyImages.main}
                  alt=""
                  style={{
                    scale: inlineImageScale,
                  }}
                />

                connect people and technology through

                <InlineImage
                  src={storyImages.third}
                  alt=""
                  style={{
                    scale: inlineImageScale,
                  }}
                />

                practical, impactful solutions.
              </h1>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-[650px]
                  text-[11px]
                  leading-5
                  text-zinc-300
                  sm:text-xs
                  sm:leading-6
                "
              >
                Scroll to explore how Bytherix brings technology education,
                software development and emerging technologies together.
              </p>

              <div className="mt-9 flex flex-col items-center gap-2">

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-zinc-300
                  "
                >
                  Scroll
                </span>

                <div
                  className="
                    h-8
                    w-px
                    bg-gradient-to-b
                    from-zinc-300
                    to-transparent
                  "
                />

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              THREE IMAGE SHOWCASE
          ====================================================== */}

          <motion.div
            style={{
              opacity: showcaseOpacity,
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
            "
          >

            {/* LEFT IMAGE */}

            <motion.div
              style={{
                opacity: sideOpacity,
                x: leftX,
                scale: leftScale,
              }}
              className="
                absolute
                left-[5%]
                hidden
                h-[38vh]
                w-[22vw]
                max-w-[300px]
                overflow-hidden
                rounded-[18px]
                shadow-[0_20px_70px_rgba(0,0,0,0.15)]
                md:block
              "
            >
              <img
                src={storyImages.first}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* MAIN IMAGE */}

            <motion.div
              style={{
                scale: mainScale,
                y: mainY,
                borderRadius: mainRadius,
              }}
              className="
                relative
                z-30
                h-[42vh]
                w-[55vw]
                max-w-[720px]
                overflow-hidden
                shadow-[0_35px_100px_rgba(0,0,0,0.24)]
                sm:h-[46vh]
                sm:w-[52vw]
                lg:h-[50vh]
                lg:w-[50vw]
              "
            >
              <img
                src={storyImages.main}
                alt=""
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-3
                  py-1.5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  backdrop-blur-md
                  sm:left-7
                  sm:top-7
                "
              >
                Bytherix
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              style={{
                opacity: sideOpacity,
                x: rightX,
                scale: rightScale,
              }}
              className="
                absolute
                right-[5%]
                hidden
                h-[38vh]
                w-[22vw]
                max-w-[300px]
                overflow-hidden
                rounded-[18px]
                shadow-[0_20px_70px_rgba(0,0,0,0.15)]
                md:block
              "
            >
              <img
                src={storyImages.third}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>

          </motion.div>

          {/* =====================================================
              POPUP FULL-SCREEN IMAGE BACKGROUND
          ====================================================== */}

          <motion.div
            style={{
              opacity: popupBackgroundOpacity,
              y: popupBackgroundY,
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-40
              overflow-hidden
              bg-zinc-950
            "
          >

            <img
              src={storyImages.main}
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* =================================================
                CENTER WATERMARK
            ================================================== */}

            <motion.div
              style={{
                opacity: watermarkOpacity,
                scale: watermarkScale,
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-5
                sm:px-8
              "
            >
              <div className="max-w-[800px] text-center">

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.38em]
                    text-white/70
                    sm:text-xs
                  "
                >
                  Technology & Innovation
                </p>

                <h2
                  className="
                    mt-5
                    text-[52px]
                    font-bold
                    leading-[0.88]
                    tracking-[-0.07em]
                    text-white/20
                    sm:text-[68px]
                    md:text-[82px]
                    lg:text-[100px]
                  "
                >
                  Learn.
                  <br />
                  Build.
                  <br />
                  Innovate.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-7
                    max-w-[480px]
                    text-[12px]
                    leading-6
                    text-white/35
                    sm:text-[13px]
                    lg:text-[15px]
                  "
                >
                  Practical technology education and digital solutions for
                  learners, businesses and innovators.
                </p>

              </div>
            </motion.div>

          </motion.div>

          {/* =====================================================
              ABOUT BYTHERIX POPUP CONTENT
          ====================================================== */}

          <motion.div
            style={{
              opacity: popupContentOpacity,
              y: popupContentY,
              scale: popupContentScale,
              pointerEvents: "none",
            }}
            className="
              absolute
              inset-0
              z-50
            "
          >
            <div
              className="
                absolute

                left-4
                top-[clamp(64px,15vh,105px)]
                w-[calc(100%-2rem)]
                max-w-[390px]
                text-left

                min-[380px]:left-5
                min-[380px]:top-[clamp(68px,16vh,115px)]
                min-[380px]:w-[calc(100%-2.5rem)]

                sm:left-6
                sm:top-[clamp(75px,17vh,125px)]
                sm:w-[clamp(240px,36vw,410px)]

                md:left-1/2
                md:top-[16%]
                md:w-[min(88vw,560px)]
                md:-translate-x-1/2
                md:translate-y-0
                md:text-center

                lg:left-[5%]
                lg:top-1/2
                lg:w-[clamp(280px,30vw,390px)]
                lg:-translate-x-0
                lg:-translate-y-1/2
                lg:text-left

                xl:left-[7%]
                xl:w-[390px]
              "
            >

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-teal-400

                  min-[380px]:text-[9px]
                  min-[380px]:tracking-[0.30em]

                  sm:text-[10px]

                  md:text-[11px]
                  md:tracking-[0.32em]

                  lg:text-[13px]
                  lg:tracking-[0.34em]
                  lg:text-teal-700

                  xl:text-[16px]
                  xl:tracking-[0.35em]
                "
              >
                About Bytherix
              </p>

              <p
                className="
                  mt-2.5
                  w-full
                  max-w-[390px]
                  text-left
                  text-[10px]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.01em]
                  text-white

                  min-[380px]:mt-3
                  min-[380px]:text-[11px]
                  min-[380px]:leading-5

                  sm:mt-4
                  sm:max-w-[400px]
                  sm:text-[12px]
                  sm:leading-5

                  md:mx-auto
                  md:max-w-[560px]
                  md:text-center
                  md:text-[12px]
                  md:leading-5

                  lg:mx-0
                  lg:mt-5
                  lg:max-w-[390px]
                  lg:text-left
                  lg:text-[14px]
                  lg:leading-6

                  xl:max-w-[390px]
                  xl:text-[15px]
                  xl:leading-7
                "
              >
                Bytherix is a technology company built on a simple belief —
                that great technology and great education should grow together.
                We don't just build digital solutions; we teach the skills behind
                them, helping learners and businesses turn ideas into impact.
              </p>

            </div>
          </motion.div>

          {/* =====================================================
              DESKTOP POPUP CARDS
              2 COLUMNS × 3 ROWS
          ====================================================== */}

          <motion.div
            style={{
              opacity: popupContentOpacity,
              y: popupContentY,
              scale: popupContentScale,
              pointerEvents: "none",
            }}
            className="
              absolute
              inset-0
              z-50
              hidden
              lg:block
            "
          >
            <div
              className="
                absolute
                right-[4%]
                top-1/2
                w-[520px]
                -translate-y-1/2

                xl:right-[6%]
                xl:w-[600px]
              "
            >
              <div className="grid grid-cols-2 gap-3">

                <PopupCard feature={aboutFeatures[0]} />
                <PopupCard feature={aboutFeatures[1]} />
                <PopupCard feature={aboutFeatures[2]} />
                <PopupCard feature={aboutFeatures[3]} />
                <PopupCard feature={aboutFeatures[4]} />
                <PopupCard feature={aboutFeatures[5]} />

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              MOBILE POPUP CARDS
              2 COLUMNS × 3 ROWS
          ====================================================== */}

          <motion.div
            style={{
              opacity: popupContentOpacity,
              y: popupContentY,
              scale: popupContentScale,
              pointerEvents: "none",
            }}
            className="
              absolute
              inset-x-2.5
              bottom-[clamp(8px,2vh,18px)]
              z-50
              mx-auto
              grid
              grid-cols-2
              gap-[6px]

              min-[360px]:inset-x-3
              min-[360px]:gap-1.5

              min-[380px]:gap-2

              sm:inset-x-4
              sm:bottom-[clamp(10px,2.5vh,20px)]
              sm:gap-2.5

              md:inset-x-4
              md:bottom-4
              md:max-w-[820px]
              md:gap-2.5

              lg:hidden
            "
          >
            {aboutFeatures.map((feature) => (
              <MobilePopupCard
                key={feature.id}
                feature={feature}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   INLINE IMAGE
============================================================================= */

function InlineImage({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style?: {
    scale?: any;
  };
}) {
  return (
    <motion.span
      style={style}
      className="
        mx-2
        inline-block
        h-[38px]
        w-[68px]
        translate-y-[5px]
        overflow-hidden
        rounded-[9px]
        align-middle

        sm:mx-3
        sm:h-[48px]
        sm:w-[86px]

        md:h-[58px]
        md:w-[105px]

        lg:h-[68px]
        lg:w-[125px]
        lg:rounded-[14px]
      "
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </motion.span>
  );
}

/* ==========================================================================
   DESKTOP POPUP CARD
============================================================================= */

function PopupCard({
  feature,
}: {
  feature: (typeof aboutFeatures)[number];
}) {
  const Icon = feature.icon;

  return (
    <div
      className="
        flex
        w-full
        items-start
        gap-3
        rounded-[15px]
        border
        border-white/50
        bg-white/90
        p-3.5
        shadow-[0_18px_55px_rgba(0,0,0,0.14)]
        backdrop-blur-md
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-zinc-950
          text-teal-300
        "
      >
        <Icon
          size={14}
          strokeWidth={1.8}
        />
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-center gap-1.5">

          <span
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-zinc-400
            "
          >
            Bytherix
          </span>

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-zinc-300
            "
          />

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.14em]
              text-zinc-400
            "
          >
            Expertise
          </span>

        </div>

        <h3
          className="
            mt-1
            text-[10px]
            font-semibold
            leading-4
            text-zinc-950
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-1
            text-[8px]
            leading-[1.5]
            text-zinc-500
          "
        >
          {feature.description}
        </p>

      </div>
    </div>
  );
}

/* ==========================================================================
   MOBILE POPUP CARD
============================================================================= */

function MobilePopupCard({
  feature,
}: {
  feature: (typeof aboutFeatures)[number];
}) {
  const Icon = feature.icon;

  return (
    <div
      className="
        min-w-0
        overflow-hidden
        rounded-[11px]
        border
        border-white/50
        bg-white/90
        p-2
        shadow-[0_12px_35px_rgba(0,0,0,0.12)]
        backdrop-blur-md

        min-[360px]:p-2.5
        sm:p-2.5
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-1.5

          min-[380px]:gap-2
        "
      >
        <div
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-zinc-950
            text-teal-300

            min-[380px]:h-6
            min-[380px]:w-6
          "
        >
          <Icon
            size={10}
            strokeWidth={1.8}
          />
        </div>

        <h3
          className="
            min-w-0
            truncate
            text-[7px]
            font-semibold
            text-zinc-950

            min-[380px]:text-[8px]
          "
        >
          {feature.shortTitle}
        </h3>
      </div>

      <p
        className="
          mt-1
          line-clamp-2
          text-[6.5px]
          leading-[1.35]
          text-zinc-500

          min-[380px]:mt-1.5
          min-[380px]:text-[7px]
          min-[380px]:leading-3
        "
      >
        {feature.description}
      </p>
    </div>
  );
}