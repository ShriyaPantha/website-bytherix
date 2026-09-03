import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emblemAsset from "../../assets/BYTHERIXlogo.png";

interface BrandEmblemProps {
  className?: string;
}

const BrandEmblem = ({
  className = "",
}: BrandEmblemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center text-center ${className}`}
    >
      {/* =====================================================
          LOGO
      ====================================================== */}

      <motion.button
        type="button"
        onClick={() => navigate("/")}
        aria-label="Go to Bytherix homepage"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group relative mb-3 flex h-[76px] w-[76px] items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087cff]/60"
      >
        <motion.div
          className="absolute inset-[-10px] rounded-full bg-[#087cff]/10 blur-xl"
          animate={{
            opacity: [0.45, 0.75, 0.45],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <img
          src={emblemAsset}
          alt="BYTHERIX"
          className="relative h-[76px] w-[76px] rounded-full object-contain drop-shadow-[0_0_15px_rgba(35,139,255,0.30)]"
        />
      </motion.button>

      {/* =====================================================
          BYTHERIX
      ====================================================== */}

      <button
        type="button"
        onClick={() => navigate("/")}
        aria-label="Go to Bytherix homepage"
        className="mb-1 text-[36px] font-bold leading-none tracking-[-0.045em] focus-visible:outline-none"
      >
        <span className="text-[#0879ff]">BY</span>
        <span className="text-[#00b98b]">THE</span>
        <span className="text-[#f12f45]">RIX</span>
      </button>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <div className="text-[13px] font-semibold tracking-[0.30em] text-white/80">
        TECHNOLOGY
      </div>
    </div>
  );
};

export default BrandEmblem;