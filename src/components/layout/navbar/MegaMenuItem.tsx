import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface MegaMenuItemProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  compact?: boolean;
}

const MegaMenuItem = ({
  label,
  icon: Icon,
  onClick,
  compact = false,
}: MegaMenuItemProps) => {
  return (
    <motion.button 
      type="button"
      onClick={onClick}
      whileTap={{
        scale: 0.985,
      }}
      className={`group grid w-full grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-white/[0.09] bg-white/[0.035] text-left font-['Inter'] text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-all duration-200 hover:border-[#00AEEF]/35 hover:bg-white/[0.065] hover:text-white hover:shadow-[0_0_18px_rgba(0,174,239,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:border-[#00AEEF]/55 focus-visible:outline-none ${
        compact
          ? "min-h-[48px] px-3 py-2.5 text-[11px]"
          : "min-h-[46px] px-3 py-2 text-xs"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.10] bg-[#00AEEF]/[0.055] text-white/62 transition-all duration-200 group-hover:border-[#00AEEF]/35 group-hover:bg-[#00AEEF]/10 group-hover:text-[#20C997] group-hover:shadow-[0_0_12px_rgba(32,201,151,0.12)]">
        <Icon
          size={15}
          strokeWidth={1.8}
        />
      </span>

      <span className="min-w-0 truncate font-medium leading-none transition-colors duration-200 group-hover:text-white">
        {label}
      </span>

      <ArrowUpRight
        size={14}
        strokeWidth={1.8}
        className="mr-0.5 shrink-0 text-white/34 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00AEEF] group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default MegaMenuItem;
