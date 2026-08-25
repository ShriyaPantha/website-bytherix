import { AnimatePresence, motion } from "framer-motion";
import type { MutableRefObject } from "react";

import logo from "../../../assets/logo.png";

import {
  BRAND,
  TECHNOLOGY,
  getBrandColor,
  introLetterVariants,
  INTRO_FINISH,
  dockTransition,
} from "./navbar.constants";

interface NavbarBrandProps {
  docked: boolean;
  introPlayedRef: MutableRefObject<boolean>;
  onLogoClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}

const NavbarBrand = ({
  docked,
  introPlayedRef,
  onLogoClick,
}: NavbarBrandProps) => {
  return (
    <motion.div
      layout
      transition={dockTransition}
      className={
        docked
          ? "relative z-20 flex shrink-0 items-center gap-2.5"
          : "fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#050814]"
      }
    >
      <AnimatePresence>
        {docked && (
          <motion.a
            href="/"
            onClick={onLogoClick}
            initial={false}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label="Go to Home"
            className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_7px_rgba(255,255,255,0.045)] sm:h-10 sm:w-10 lg:h-11 lg:w-11"
          >
            <img
              src={logo}
              alt="Bytherix Technology"
              className="block h-full w-full scale-125 object-cover"
            />
          </motion.a>
        )}
      </AnimatePresence>

      <motion.div
        layout
        transition={dockTransition}
        className={
          docked
            ? "flex flex-col items-start"
            : "flex flex-col items-center"
        }
      >
        <motion.div
          layout
          transition={dockTransition}
          className="flex font-['Inter'] font-bold leading-none tracking-wide"
          style={{
            fontSize: docked
              ? "1.08rem"
              : "clamp(2.8rem, 8vw, 5rem)",
          }}
        >
          {BRAND.split("").map((char, index) => (
            <motion.span
              key={`brand-${index}`}
              custom={index}
              variants={introLetterVariants}
              initial={
                introPlayedRef.current
                  ? false
                  : "hidden"
              }
              animate="visible"
              onAnimationComplete={
                index === BRAND.length - 1
                  ? () => {
                      if (!introPlayedRef.current) {
                        introPlayedRef.current = true;
                      }
                    }
                  : undefined
              }
              className={getBrandColor(index)}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          layout
          transition={dockTransition}
          className="relative flex flex-col items-center font-['Inter'] font-medium uppercase leading-none tracking-[0.14em] text-white"
          style={{
            marginTop: docked ? "3px" : "10px",
            fontSize: docked
              ? "0.46rem"
              : "clamp(0.85rem, 2vw, 1.3rem)",
          }}
        >
          <div className="flex">
            {TECHNOLOGY.split("").map((char, index) => (
              <motion.span
                key={`technology-${index}`}
                custom={BRAND.length + index}
                variants={introLetterVariants}
                initial={
                  introPlayedRef.current
                    ? false
                    : "hidden"
                }
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <AnimatePresence>
            {!docked && (
              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                exit={{
                  width: 0,
                  opacity: 0,
                }}
                transition={{
                  delay: INTRO_FINISH + 0.05,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 h-[2px] self-stretch rounded-full bg-[#FF3B30] shadow-[0_0_10px_rgba(255,59,48,0.45)]"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavbarBrand;