import {
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered: boolean;
  isSelected: boolean;

  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  onLeave: () => void;
}

const accentStyles = {
  blue: {
    color: "#1e3a8a",
    darkColor: "#60a5fa",
    soft: "#eef3ff",
    darkSoft: "rgba(96,165,250,0.10)",
    border: "rgba(30,58,138,0.20)",
    darkBorder: "rgba(96,165,250,0.24)",
  },

  green: {
    color: "#16a34a",
    darkColor: "#34d399",
    soft: "#edf9f1",
    darkSoft: "rgba(52,211,153,0.10)",
    border: "rgba(22,163,74,0.20)",
    darkBorder: "rgba(52,211,153,0.24)",
  },

  red: {
    color: "#dc2626",
    darkColor: "#f87171",
    soft: "#fff0f0",
    darkSoft: "rgba(248,113,113,0.10)",
    border: "rgba(220,38,38,0.20)",
    darkBorder: "rgba(248,113,113,0.24)",
  },
};

export default function ServiceCard({
  service,
  index,
  isHovered,
  isSelected,
  onHover,
  onSelect,
  onLeave,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  /*
   * Desktop:
   * DRAG follows the mouse.
   *
   * Mobile:
   * DRAG follows the touch position while touching,
   * and remains visible on the selected card.
   */
  const [showDrag, setShowDrag] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 320,
    damping: 26,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 320,
    damping: 26,
    mass: 0.35,
  });

  const accent = accentStyles[service.accent];

  /* -------------------------------------------------
     Get pointer position inside card
  ------------------------------------------------- */
  const updatePointerPosition = (
    clientX: number,
    clientY: number,
  ) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  };

  /* -------------------------------------------------
     Desktop mouse movement
  ------------------------------------------------- */
  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    updatePointerPosition(
      event.clientX,
      event.clientY,
    );

    /*
     * Touch devices also get pointermove.
     * This makes DRAG follow the finger.
     */
    if (event.pointerType === "touch") {
      setIsTouchDevice(true);
      setShowDrag(true);
    }
  };

  /* -------------------------------------------------
     Pointer enters card
  ------------------------------------------------- */
  const handlePointerEnter = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "mouse") {
      setIsTouchDevice(false);
      setShowDrag(true);

      onHover(index);
      onSelect(index);
    }
  };

  /* -------------------------------------------------
     Touch starts
  ------------------------------------------------- */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "touch") return;

    setIsTouchDevice(true);

    updatePointerPosition(
      event.clientX,
      event.clientY,
    );

    /*
     * Mobile tap = select.
     */
    onSelect(index);
    onHover(index);

    setShowDrag(true);
  };

  /* -------------------------------------------------
     Pointer leaves
  ------------------------------------------------- */
  const handlePointerLeave = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "mouse") {
      setShowDrag(false);
      onLeave();
    }
  };

  /* -------------------------------------------------
     Touch ends
  ------------------------------------------------- */
  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "touch") return;

    /*
     * Keep DRAG visible on the selected mobile card.
     * It disappears automatically when another card
     * becomes selected.
     */
    setShowDrag(isSelected);
  };

  /* -------------------------------------------------
     Click / tap
  ------------------------------------------------- */
  const handleSelect = () => {
    onSelect(index);

    /*
     * Mobile:
     * selected card keeps DRAG visible.
     */
    if (isTouchDevice) {
      setShowDrag(true);
    }
  };

  /*
   * Arrow should appear only on the currently
   * hovered/selected card.
   */
  const showArrow =
    isHovered || isSelected;

  /*
   * On mobile, selected card keeps DRAG visible.
   * On desktop, normal hover controls it.
   */
  const shouldShowDrag =
    showDrag && (isTouchDevice || isHovered || isSelected);

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleSelect}
      className="
        group
        relative
        h-[390px]
        cursor-pointer
        touch-pan-y
      "
    >
      <div
        className={`
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[22px]
          border
          bg-[var(--surface-primary)]
          px-6
          pb-5
          pt-6
          transition-all
          duration-500

          ${
            isSelected
              ? "shadow-[0_22px_60px_rgba(15,23,42,0.12)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
              : "shadow-[0_8px_30px_rgba(15,23,42,0.055)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          }
        `}
        style={{
          borderColor: isSelected
            ? `var(--service-border)`
            : "var(--border-primary)",

          /*
           * Dynamic CSS variables.
           * This keeps the actual accent color tied
           * to the current service.
           */
          ["--service-color" as string]:
            accent.color,

          ["--service-dark-color" as string]:
            accent.darkColor,

          ["--service-border" as string]:
            accent.border,
        }}
      >
        {/* -------------------------------------------------
            Brand color top line
        ------------------------------------------------- */}
        <motion.div
          className="
            absolute
            left-6
            right-6
            top-0
            h-[3px]
            rounded-b-full
          "
          style={{
            backgroundColor: accent.color,
          }}
          animate={{
            opacity: isSelected ? 1 : 0.6,
            scaleX: isSelected ? 1 : 0.75,
          }}
          transition={{
            duration: 0.4,
          }}
        />

        {/* -------------------------------------------------
            Corner glow
        ------------------------------------------------- */}
        <motion.div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-28
            w-28
            rounded-full
            blur-2xl
          "
          style={{
            backgroundColor: accent.color,
          }}
          animate={{
            opacity: isSelected ? 0.12 : 0.06,
            scale: isSelected ? 1.15 : 1,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* -------------------------------------------------
            Icon
        ------------------------------------------------- */}
        <motion.div
          animate={{
            scale: isHovered || isSelected ? 1.07 : 1,
            rotate:
              isHovered || isSelected
                ? 2
                : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
          "
          style={{
            backgroundColor: `var(--service-soft)`,
            borderColor: `var(--service-border)`,
            color: `var(--service-color)`,
          }}
        >
          <service.icon
            size={21}
            strokeWidth={1.8}
          />
        </motion.div>

        {/* -------------------------------------------------
            Number
        ------------------------------------------------- */}
        <span
          className="
            absolute
            right-6
            top-7
            text-[10px]
            font-semibold
            tracking-[0.16em]
          "
          style={{
            color: accent.color,
            opacity: 0.28,
          }}
        >
          {String(service.id).padStart(2, "0")}
        </span>

        {/* -------------------------------------------------
            Content
        ------------------------------------------------- */}
        <div className="relative z-10 mt-7">
          <h3
            className="
              text-[19px]
              font-semibold
              tracking-[-0.02em]
              text-[var(--text-primary)]
              transition-colors duration-500
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-3
              text-[13px]
              leading-[1.75]
              text-[var(--text-secondary)]
              transition-colors duration-500
            "
          >
            {service.description}
          </p>
        </div>

        {/* -------------------------------------------------
            Tags
        ------------------------------------------------- */}
        <div
          className="
            relative
            z-10
            mt-auto
            flex
            flex-wrap
            gap-2
            pt-6
          "
        >
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[var(--border-primary)]
                bg-[var(--bg-secondary)]
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-[var(--text-secondary)]
                transition-all
                duration-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* -------------------------------------------------
            Bottom action
        ------------------------------------------------- */}
        <div
          className="
            relative
            z-10
            mt-5
            border-t
            border-[var(--border-secondary)]
            pt-4
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-[var(--text-secondary)]
              "
            >
              View Services
            </span>

            {/* -------------------------------------------------
                Selected card arrow
            ------------------------------------------------- */}
            <AnimatePresence mode="wait">
              {showArrow ? (
                <motion.span
                  key={`arrow-${service.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.55,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.55,
                    x: -10,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    shadow-sm
                  "
                  style={{
                    backgroundColor:
                      accent.color,
                  }}
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                  />
                </motion.span>
              ) : (
                <span
                  key={`empty-${service.id}`}
                  className="h-8 w-8"
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =================================================
            WEBTECH STYLE DRAG CURSOR
            ================================================= */}
        <AnimatePresence>
          {shouldShowDrag && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.45,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                left: smoothX,
                top: smoothY,

                /*
                 * IMPORTANT:
                 * The DRAG circle always uses the
                 * current service accent color.
                 */
                backgroundColor:
                  accent.color,
              }}
              className="
                pointer-events-none
                absolute
                z-30
                flex
                h-[72px]
                w-[72px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                text-white
                shadow-[0_12px_35px_rgba(15,23,42,0.22)]
              "
            >
              <div className="flex flex-col items-center leading-none">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.14em]
                  "
                >
                  DRAG
                </span>

                <motion.span
                  animate={{
                    x: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mt-1
                    text-[12px]
                    text-white/75
                  "
                >
                  ↗
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}