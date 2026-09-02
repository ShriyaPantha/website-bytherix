import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import bytherixLogo from "../../assets/BYTHERIXlogo.png";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerAction: string;
  onFooterAction: () => void;
  isRegister?: boolean;
}

const AuthCard = ({
  title,
  description,
  children,
  footerText,
  footerAction,
  onFooterAction,
  isRegister = false,
}: AuthCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-[470px]"
    >
      {/* =========================================
          MOBILE PHONE FRAME
          (unchanged here — re-skinned in a later step)
      ========================================= */}
      <div className="relative mx-auto block w-[min(88vw,360px)] md:hidden">
        {/* Outer phone glow */}
        <div className="absolute -inset-3 rounded-[46px] bg-blue-500/[0.08] blur-2xl" />

        {/* Phone body */}
        <div className="relative rounded-[42px] border border-white/15 bg-gradient-to-b from-[#1a2030] via-[#080b14] to-[#03050a] p-[7px] shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-[125px] h-12 w-[3px] rounded-l-full bg-white/15" />
          <div className="absolute -left-[3px] top-[185px] h-20 w-[3px] rounded-l-full bg-white/10" />

          <div className="absolute -right-[3px] top-[155px] h-16 w-[3px] rounded-r-full bg-white/15" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#050814]">
            {/* Top camera / speaker */}
            <div className="absolute left-1/2 top-2 z-30 flex h-6 w-[88px] -translate-x-1/2 items-center justify-center rounded-full bg-black">
              <div className="h-1.5 w-7 rounded-full bg-white/10" />
              <div className="ml-2 h-1.5 w-1.5 rounded-full bg-blue-400/30" />
            </div>

            {/* Screen glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-h-[calc(100vh-42px)] min-h-[650px] overflow-y-auto px-5 pb-7 pt-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {/* Mobile status-like branding */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10">
                    <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.22em] text-white">
                    BYTHERIX
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                  {isRegister ? "REGISTER" : "LOGIN"}
                </span>
              </div>

              {/* Mobile heading */}
              <div className="mb-7">
                <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-300/60">
                  {isRegister ? "Create Access" : "Secure Access"}
                </div>

                <h1 className="text-[28px] font-semibold tracking-[-0.035em] text-white">
                  {title}
                </h1>

                <p className="mt-2 text-[11px] leading-5 text-white/35">
                  {description}
                </p>
              </div>

              {/* Form */}
              {children}

              {/* Footer */}
              <div className="mt-6 border-t border-white/[0.07] pt-5 text-center">
                <div className="flex items-center justify-center gap-1 text-[11px]">
                  <span className="text-white/30">{footerText}</span>

                  <button
                    type="button"
                    onClick={onFooterAction}
                    className="group inline-flex items-center gap-0.5 font-medium text-blue-300"
                  >
                    {footerAction}

                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/10" />
                  <span className="h-1 w-1 rounded-full bg-blue-400/30" />
                  <span className="h-1 w-1 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Bottom home indicator */}
            <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP CARD
      ========================================= */}
      <div className="relative hidden md:block">
        {/* Cyan bloom border ring */}
        <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-logo-cyan/40 via-logo-blue/15 to-transparent opacity-90 blur-[1px]" />

        {/* Outer ambient glow */}
        <div className="absolute -inset-6 -z-10 rounded-[40px] bg-logo-cyan/[0.06] blur-3xl" />

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#080d1d]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-logo-cyan/10 blur-3xl" />

          <div className="relative mb-7 flex flex-col items-center text-center">
            {/* Logo badge */}
            <div className="relative mb-5">
              <div className="absolute inset-0 scale-150 rounded-full bg-logo-cyan/20 blur-2xl" />

              <img
                src={bytherixLogo}
                alt="BYTHERIX"
                className="relative h-16 w-16 rounded-full object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]"
              />
            </div>

            <div className="mb-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-logo-cyan shadow-[0_0_10px_rgba(56,189,248,0.9)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-logo-cyan/70">
                {isRegister ? "Create Access" : "Secure Access"}
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
              {title}
            </h1>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
              {description}
            </p>
          </div>

          <div className="relative">{children}</div>

          <div className="relative mt-7 flex items-center justify-center gap-1.5 border-t border-white/[0.07] pt-6 text-sm">
            <span className="text-white/35">{footerText}</span>

            <button
              type="button"
              onClick={onFooterAction}
              className="group inline-flex items-center gap-1 font-medium text-logo-cyan transition-colors hover:text-white"
            >
              {footerAction}

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthCard;