import { motion } from "framer-motion";

const AuthBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040a1d]">
      {/* =====================================================
          BASE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(18,48,105,0.20),transparent_45%),radial-gradient(circle_at_8%_15%,rgba(0,91,255,0.10),transparent_28%),radial-gradient(circle_at_92%_18%,rgba(0,255,170,0.055),transparent_27%),radial-gradient(circle_at_50%_100%,rgba(0,35,100,0.16),transparent_48%)]" />

      {/* Very subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(50,110,220,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50,110,220,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* =====================================================
          TOP LEFT BLUE LINE
      ====================================================== */}

      <svg
        className="absolute left-0 top-0 h-[440px] w-[800px]"
        viewBox="0 0 800 440"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="authBlueLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#087cff" />
            <stop offset="65%" stopColor="#006bff" />
            <stop
              offset="100%"
              stopColor="#006bff"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="authBlueGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <path
          d="M22 435V52C22 34 36 20 54 20H770"
          stroke="#0074ff"
          strokeWidth="7"
          opacity="0.12"
          filter="url(#authBlueGlow)"
        />

        <path
          d="M22 435V52C22 34 36 20 54 20H770"
          stroke="url(#authBlueLine)"
          strokeWidth="1.4"
        />

        <circle
          cx="22"
          cy="435"
          r="4"
          fill="#087cff"
        />

        <circle
          cx="22"
          cy="435"
          r="12"
          fill="#087cff"
          opacity="0.08"
        />
      </svg>

      {/* =====================================================
          TOP RIGHT GREEN LINE
      ====================================================== */}

      <svg
        className="absolute right-0 top-0 h-[470px] w-[800px]"
        viewBox="0 0 800 470"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="authGreenLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#00dca0"
              stopOpacity="0"
            />

            <stop
              offset="55%"
              stopColor="#00b894"
            />

            <stop
              offset="100%"
              stopColor="#00ffa2"
            />
          </linearGradient>

          <filter id="authGreenGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <path
          d="M20 0C43 23 56 34 79 34H600C624 34 637 43 653 59L748 155C760 167 766 181 766 198V422"
          stroke="#00efa1"
          strokeWidth="7"
          opacity="0.10"
          filter="url(#authGreenGlow)"
        />

        <path
          d="M20 0C43 23 56 34 79 34H600C624 34 637 43 653 59L748 155C760 167 766 181 766 198V422"
          stroke="url(#authGreenLine)"
          strokeWidth="1.4"
        />

        <circle
          cx="766"
          cy="422"
          r="4"
          fill="#00f4a0"
        />

        <circle
          cx="766"
          cy="422"
          r="13"
          fill="#00f4a0"
          opacity="0.08"
        />
      </svg>

      {/* =====================================================
          BOTTOM LEFT RED LINE
      ====================================================== */}

      <svg
        className="absolute bottom-0 left-0 h-[470px] w-[760px]"
        viewBox="0 0 760 470"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="authRedLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#ff2846"
              stopOpacity="0"
            />

            <stop
              offset="55%"
              stopColor="#ff304b"
            />

            <stop
              offset="100%"
              stopColor="#ff2727"
            />
          </linearGradient>
        </defs>

        <path
          d="M20 0V358C20 377 27 391 42 406L86 450C97 460 111 466 128 466H337"
          stroke="url(#authRedLine)"
          strokeWidth="1.4"
        />

        <circle
          cx="337"
          cy="466"
          r="4"
          fill="#ff3d43"
        />

        <circle
          cx="337"
          cy="466"
          r="12"
          fill="#ff3d43"
          opacity="0.08"
        />
      </svg>

      {/* =====================================================
          CENTER BLUE LINE
      ====================================================== */}

      <svg
        className="absolute bottom-0 left-1/2 h-[300px] w-[520px] -translate-x-1/2"
        viewBox="0 0 520 300"
        fill="none"
      >
        <defs>
          <linearGradient
            id="authCenterBlue"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#006dff"
              stopOpacity="0"
            />

            <stop
              offset="55%"
              stopColor="#006dff"
              stopOpacity="0.75"
            />

            <stop
              offset="100%"
              stopColor="#006dff"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M520 108C449 122 397 155 353 198L250 298"
          stroke="url(#authCenterBlue)"
          strokeWidth="1.2"
        />

        <circle
          cx="520"
          cy="108"
          r="3"
          fill="#087bff"
        />
      </svg>

      {/* =====================================================
          BOTTOM RIGHT RED LINE
      ====================================================== */}

      <svg
        className="absolute bottom-0 right-0 h-[470px] w-[720px]"
        viewBox="0 0 720 470"
        fill="none"
      >
        <defs>
          <linearGradient
            id="authRightRed"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#ff3232"
              stopOpacity="0"
            />

            <stop
              offset="80%"
              stopColor="#ff3030"
            />
          </linearGradient>
        </defs>

        <path
          d="M720 350C686 357 667 371 651 392L596 460"
          stroke="url(#authRightRed)"
          strokeWidth="1.2"
        />

        <circle
          cx="650"
          cy="392"
          r="4"
          fill="#ff3939"
        />

        <circle
          cx="650"
          cy="392"
          r="12"
          fill="#ff3939"
          opacity="0.08"
        />
      </svg>

      {/* =====================================================
          LEFT DOT PATTERN
      ====================================================== */}

      <div className="absolute left-[64px] top-[130px] grid grid-cols-5 gap-[11px] opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[3px] w-[3px] rounded-full bg-[#0b65ff]"
            style={{
              opacity:
                0.15 + ((index * 7) % 5) * 0.1,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          RIGHT DOT PATTERN
      ====================================================== */}

      <div className="absolute right-[78px] top-[78px] grid grid-cols-5 gap-[12px] opacity-30">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[3px] w-[3px] rounded-full bg-[#0b65ff]"
            style={{
              opacity:
                0.12 + ((index * 5) % 6) * 0.08,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          BOTTOM RIGHT DOT PATTERN
      ====================================================== */}

      <div className="absolute bottom-[45px] right-[70px] grid grid-cols-5 gap-[11px] opacity-25">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[3px] w-[3px] rounded-full bg-[#0b65ff]"
          />
        ))}
      </div>

      {/* =====================================================
          SUBTLE BLUE GLOW
      ====================================================== */}

      <motion.div
        className="absolute left-[15%] top-[35%] h-[300px] w-[300px] rounded-full bg-blue-600/[0.035] blur-[110px]"
        animate={{
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[12%] top-[40%] h-[280px] w-[280px] rounded-full bg-cyan-400/[0.025] blur-[110px]"
        animate={{
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Desktop center divider */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.035] lg:block" />
    </div>
  );
};

export default AuthBackground;