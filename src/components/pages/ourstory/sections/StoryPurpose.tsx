"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Book, Lightbulb, Award } from "lucide-react";

const BELIEFS = [
  { icon: Users, title: "Talented People", description: "People with incredible technical skills who were not being paid fairly or given real opportunities." },
  { icon: Book, title: "Learning Barriers", description: "Students and professionals struggling because learning resources were expensive and hard to access." },
  { icon: Lightbulb, title: "Real Experience", description: "People being rejected simply because nobody had given them a chance to gain experience." },
  { icon: Award, title: "Growth Together", description: "Creating a place where people could learn, build, and grow — not just as individuals, but as a community." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StoryPurpose = () => {
  return (
    <section className="relative bg-[var(--bg-secondary)] px-5 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-20 ">
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-10 sm:space-y-16">
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 02</span>
              <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">More than a company</h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              But as they learned more, they realized something important. There was a lot of talent around them that wasn't getting the opportunities it deserved.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 border-l-4 border-[var(--accent-red)] bg-[var(--surface-secondary)] px-5 py-6 sm:space-y-4 sm:px-8 sm:py-8">
            <p className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">We didn't just want to build a company.</p>
            <p className="text-lg leading-tight text-[var(--text-secondary)] sm:text-xl">We wanted to build a place where people could learn, build, and grow together.</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {BELIEFS.map((belief) => {
              const Icon = belief.icon;
              return (
                <motion.div key={belief.title} variants={itemVariants} whileHover={{ y: -8 }} className="group relative rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-6 transition-all duration-300 hover:border-[var(--accent-green)]/40 hover:shadow-lg sm:p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-green)]/20 to-[var(--accent-blue)]/10 text-[var(--accent-green)] transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mb-2.5 text-base font-bold sm:mb-3 sm:text-lg">{belief.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{belief.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 rounded-r-full bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] transition-all duration-500 group-hover:w-12" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryPurpose;