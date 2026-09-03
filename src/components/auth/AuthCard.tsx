import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerAction: string;
  footerHref: string;
  isRegister?: boolean;
}

const AuthCard = ({
  title,
  description,
  children,
  footerText,
  footerAction,
  footerHref,
}: AuthCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.985,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-[438px]"
    >
      {/* Outer card glow */}
      <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-b from-[#167eff]/30 via-[#1c4b8c]/10 to-[#31567e]/20 opacity-80 blur-[1px]" />

      {/* =====================================================
          CARD
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[21px] border border-[#31588f]/70 bg-[linear-gradient(145deg,rgba(10,22,50,0.95),rgba(5,14,34,0.97))] px-7 py-8 shadow-[0_25px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:px-8 sm:py-9">
        {/* Top-right glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0879ff]/[0.07] blur-[70px]" />

        {/* Bottom-left glow */}
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[#006eff]/[0.035] blur-[70px]" />

        {/* Card top highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#1687ff]/45 to-transparent" />

        <div className="relative">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mb-7 text-center">
            <h1 className="text-[26px] font-semibold tracking-[-0.025em] text-[#f5f7fb]">
              {title}
            </h1>

            <p className="mt-2 text-[14px] text-[#99a6bd]">
              {description}
            </p>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          {children}

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="mt-7 flex items-center justify-center gap-1.5 border-t border-white/[0.09] pt-5 text-[13px]">
            <span className="text-[#8c99b0]">
              {footerText}
            </span>

            <button
              type="button"
              onClick={() => navigate(footerHref)}
              className="group inline-flex items-center gap-1 font-medium text-[#00dca1] transition-colors hover:text-[#35ffc5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00dca1]/40"
            >
              {footerAction}

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AuthCard;