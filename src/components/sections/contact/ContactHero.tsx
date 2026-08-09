import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[var(--bg-secondary)]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-20 top-10 h-48 w-48 rotate-45 border border-[var(--color-green)]/20 bg-[var(--color-green)]/5 sm:h-64 sm:w-64" />

        <div className="absolute -right-20 -top-20 h-64 w-64 rotate-45 border border-[var(--color-navy)]/20 bg-[var(--color-navy)]/5 sm:h-80 sm:w-80" />

        <div className="absolute -bottom-24 left-[20%] h-72 w-72 rotate-45 border border-[var(--color-red)]/10 bg-[var(--color-red)]/5" />

        <div className="absolute right-[15%] top-[25%] h-20 w-20 rotate-45 border border-[var(--color-green)]/15 sm:h-28 sm:w-28" />

        <div className="absolute left-[42%] top-[15%] h-10 w-10 rotate-45 bg-[var(--color-green)]/10 sm:h-16 sm:w-16" />

        {/* Diagonal lines */}
        <div className="absolute left-[-10%] top-[35%] h-px w-[120%] rotate-[12deg] bg-[var(--border-primary)] opacity-40" />

        <div className="absolute left-[-10%] top-[65%] h-px w-[120%] rotate-[-12deg] bg-[var(--border-primary)] opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-[320px] max-w-7xl items-center justify-center px-5 py-20 sm:min-h-[380px] sm:px-8 sm:py-24 lg:min-h-[430px] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 text-xs font-medium tracking-[0.18em] text-[var(--color-green)] uppercase sm:text-sm md:text-base"
          >
            Let's get in touch!
          </motion.p>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.18,
              duration: 0.65,
            }}
            className="
              font-['Chakra_Petch']
              text-5xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-[var(--text-primary)]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            CONTACT
            <span className="block text-[var(--color-green)]">
              US
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{
              width: "90px",
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="mx-auto mt-7 h-1 rounded-full bg-[var(--color-red)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;