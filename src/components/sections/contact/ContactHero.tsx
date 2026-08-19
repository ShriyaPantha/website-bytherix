import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="
        relative
        isolate
        h-[125px]
        overflow-hidden
        bg-[var(--bg-secondary)]

        sm:h-[140px]
        md:h-[150px]
        lg:h-[160px]
        xl:h-[168px]
      "
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Left Green Shape */}
        <div
          className="
            absolute
            -left-14
            top-6
            h-28
            w-28
            rotate-45
            border
            border-[var(--color-green)]/20
            bg-[var(--color-green)]/5

            sm:-left-16
            sm:top-7
            sm:h-36
            sm:w-36

            lg:h-40
            lg:w-40
          "
        />

        {/* Right Navy Shape */}
        <div
          className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rotate-45
            border
            border-[var(--color-navy)]/20
            bg-[var(--color-navy)]/5

            sm:-right-16
            sm:-top-16
            sm:h-48
            sm:w-48

            lg:h-56
            lg:w-56
          "
        />

        {/* Bottom Red Shape */}
        <div
          className="
            absolute
            -bottom-16
            left-[20%]
            h-44
            w-44
            rotate-45
            border
            border-[var(--color-red)]/10
            bg-[var(--color-red)]/5

            sm:-bottom-20
            sm:h-52
            sm:w-52
          "
        />

        {/* Small Green Shape */}
        <div
          className="
            absolute
            right-[15%]
            top-[25%]
            h-10
            w-10
            rotate-45
            border
            border-[var(--color-green)]/15

            sm:h-14
            sm:w-14

            lg:h-16
            lg:w-16
          "
        />

        {/* Small Green Square */}
        <div
          className="
            absolute
            left-[42%]
            top-[14%]
            h-5
            w-5
            rotate-45
            bg-[var(--color-green)]/10

            sm:h-7
            sm:w-7

            lg:h-8
            lg:w-8
          "
        />

        {/* Diagonal Lines */}
        <div
          className="
            absolute
            left-[-10%]
            top-[34%]
            h-px
            w-[120%]
            rotate-[12deg]
            bg-[var(--border-primary)]
            opacity-40
          "
        />

        <div
          className="
            absolute
            left-[-10%]
            top-[66%]
            h-px
            w-[120%]
            rotate-[-12deg]
            bg-[var(--border-primary)]
            opacity-40
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          justify-center
          px-5

          sm:px-8
          lg:px-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            id="contact-heading"
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.12,
              duration: 0.45,
            }}
            className="
              font-['Inter']
              text-[21px]
              font-bold
              leading-[0.88]
              tracking-tight
              text-[var(--text-primary)]

              sm:text-[25px]
              md:text-[29px]
              lg:text-[33px]
              xl:text-[37px]
            "
          >
            CONTACT

            <span className="block text-[var(--color-green)]">
              US
            </span>
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: "42px",
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.4,
            }}
            className="
              mx-auto
              mt-2
              h-[1.5px]
              rounded-full
              bg-[var(--color-red)]

              sm:mt-2
              sm:h-[2px]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;