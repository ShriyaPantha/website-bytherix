import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { BlogPost } from "../../data/blog.constants";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const ACCENT_COLORS = [
  {
    line: "from-[#3157D5] to-[#00AEEF]",
    soft: "bg-[#3157D5]/8 dark:bg-[#3157D5]/15",
    text: "text-[#3157D5]",
    hover: "group-hover:text-[#3157D5]",
    darkGlow: "dark:shadow-[0_18px_55px_rgba(0,174,239,0.10),0_0_28px_rgba(49,87,213,0.08)] dark:hover:shadow-[0_22px_65px_rgba(0,174,239,0.18),0_0_45px_rgba(49,87,213,0.14)]",
    lineGlow: "dark:shadow-[0_0_12px_rgba(0,174,239,0.35)]",
  },
  {
    line: "from-[#fd3b30] to-[#ff6b61]",
    soft: "bg-[#fd3b30]/8 dark:bg-[#fd3b30]/15",
    text: "text-[#fd3b30]",
    hover: "group-hover:text-[#fd3b30]",
    darkGlow: "dark:shadow-[0_18px_55px_rgba(253,59,48,0.10),0_0_28px_rgba(255,107,97,0.07)] dark:hover:shadow-[0_22px_65px_rgba(253,59,48,0.18),0_0_45px_rgba(255,107,97,0.12)]",
    lineGlow: "dark:shadow-[0_0_12px_rgba(253,59,48,0.35)]",
  },
  {
    line: "from-[#18a999] to-[#3157D5]",
    soft: "bg-[#18a999]/8 dark:bg-[#18a999]/15",
    text: "text-[#18a999]",
    hover: "group-hover:text-[#18a999]",
    darkGlow: "dark:shadow-[0_18px_55px_rgba(24,169,153,0.10),0_0_28px_rgba(49,87,213,0.08)] dark:hover:shadow-[0_22px_65px_rgba(24,169,153,0.18),0_0_45px_rgba(49,87,213,0.14)]",
    lineGlow: "dark:shadow-[0_0_12px_rgba(24,169,153,0.35)]",
  },
];

export default function BlogCard({ post, index }: BlogCardProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${post.slug}`);
  };

  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }} whileHover={{ y: -6 }} className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_22px_60px_rgba(49,87,213,0.13)] dark:border-white/10 dark:bg-[#07111f] ${accent.darkGlow} max-md:flex-row max-md:w-full max-md:rounded-[20px]`}>
      <div className={`absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r ${accent.line} ${accent.lineGlow} max-md:inset-y-0 max-md:left-0 max-md:right-auto max-md:h-auto max-md:w-[3px]`} />

      <div className="relative aspect-[1.5/1] w-full shrink-0 overflow-hidden bg-slate-100 dark:bg-[#0b1727] max-md:h-[118px] max-md:w-[120px] max-md:aspect-auto max-md:rounded-l-[20px]">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col p-6 sm:p-7 max-md:min-w-0 max-md:p-4 max-md:pl-4 max-md:pr-4">
        <button type="button" onClick={handleReadMore} aria-label={`Read ${post.title}`} className={`absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 ${accent.soft} bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:rotate-6 focus:outline-none focus:ring-2 focus:ring-[#3157D5] focus:ring-offset-2 dark:border-white/10 dark:bg-[#07111f]/90 dark:shadow-[0_0_18px_rgba(0,174,239,0.08)] dark:hover:shadow-[0_0_25px_rgba(0,174,239,0.16)] dark:focus:ring-offset-[#07111f] max-md:right-3 max-md:top-3 max-md:h-9 max-md:w-9`}>
          <ArrowUpRight size={23} strokeWidth={2.2} className={`${accent.text} max-md:size-[18px]`} />
        </button>

        <div className="min-w-0 pr-14 max-md:pr-9">
          <h2 className={`text-xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 ${accent.hover} dark:text-white max-md:line-clamp-2 max-md:text-[15px] max-md:leading-[1.25]`}>
            {post.title}
          </h2>
        </div>

        <p className="mt-4 line-clamp-5 text-[15px] leading-6 text-slate-600 dark:text-slate-400 sm:text-base max-md:mt-1.5 max-md:line-clamp-2 max-md:text-[12px] max-md:leading-[1.4]">
          {post.description}
        </p>

        <div className="mt-auto pt-7 max-md:mt-0 max-md:pt-0">
          <button type="button" onClick={handleReadMore} className={`inline-flex items-center gap-2 text-sm font-semibold ${accent.text} transition-all duration-300 hover:gap-3 max-md:gap-1 max-md:text-[11px]`}>
            Read Article
            <ArrowUpRight size={17} className="max-md:size-[14px]" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}