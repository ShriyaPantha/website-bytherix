import { motion } from "framer-motion";
import BlogBackground from "../blogs/BlogBackground";
import BlogGrid from "../../ui/BlogGrid";

export default function Blog() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
       <BlogBackground />
      <section className="relative z-10 px-5 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32 xl:px-16">
        <BlogBackground />
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 max-w-[1250px] lg:mb-16"
          >
            <h1 className="text-5xl font-bold tracking-tight text-[#0E1F5A] sm:text-6xl lg:text-7xl xl:text-[86px]">
              Blog Posts
            </h1>

            <p className="mt-3 max-w-[1200px] text-lg leading-relaxed text-black sm:text-xl lg:text-2xl xl:text-[30px]">
              We integrate technology, design, and strategy to build digital
              solutions that scale your business.
            </p>
          </motion.div>

          <BlogGrid />
        </div>
      </section>
    </main>
  );
}