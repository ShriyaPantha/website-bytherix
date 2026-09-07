import { motion } from "framer-motion";
import BlogBackground from "../blogs/BlogBackground";
import BlogGrid from "./ui/BlogGrid";

export default function Blog() {
  return (
    <main className="relative min-h-0 w-full overflow-hidden bg-white font-['Inter',sans-serif] text-slate-900 dark:bg-[#020817] dark:text-white md:min-h-screen">
      <BlogBackground />

      <section className="relative z-10 -mt-px px-5 pb-4 pt-0 sm:px-8 sm:pb-4 sm:pt-0 lg:px-[60px] lg:pb-4 lg:pt-0">
        <div className="w-full min-w-0">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-50 mb-7 max-w-[1250px] pt-7 sm:mb-12 sm:pt-0 lg:mb-14">
            <h1 className="font-bold tracking-[-0.035em] text-[#0E1F5A] text-[46px] leading-none dark:text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Blog Posts
            </h1>

            <p className="mt-3 max-w-[1100px] text-[15px] leading-6 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg sm:leading-8 lg:text-xl xl:text-[24px]">
              We integrate technology, design, and strategy to build digital solutions that scale your business.
            </p>
          </motion.div>

          <div className="relative z-10 min-w-0">
            <BlogGrid />
          </div>
        </div>
      </section>
    </main>
  );
}