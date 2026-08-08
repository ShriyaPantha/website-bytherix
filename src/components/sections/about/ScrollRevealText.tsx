import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
}

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "end 28%"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="mx-auto max-w-5xl text-center text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-[72px]"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = Math.min(start + 0.18, 1);

        return (
          <Word
            key={`${word}-${index}`}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);
  const blur = useTransform(progress, [start, end], [5, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="mr-[0.22em] inline-block will-change-transform"
    >
      {word}
    </motion.span>
  );
}
