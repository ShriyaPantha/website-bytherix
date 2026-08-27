import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ServiceCard from "../../ui/ServiceCard";
import { services } from "../../../data/services";

const GAP = 20;

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const [activeIndex, setActiveIndex] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  /* -------------------------------------------------
      Responsive card count
  ------------------------------------------------- */

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  /* -------------------------------------------------
      Measure carousel width
  ------------------------------------------------- */

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setContainerWidth(width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------
      Carousel calculations
  ------------------------------------------------- */

  const maxIndex = Math.max(
    services.length - visibleCards,
    0,
  );

  const cardWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (visibleCards - 1)) /
        visibleCards
      : 0;

  /* -------------------------------------------------
      Keep active index valid after resize
  ------------------------------------------------- */

  useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, maxIndex),
    );
  }, [maxIndex]);

  /* -------------------------------------------------
      Auto carousel
  ------------------------------------------------- */

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1,
      );
    }, 4200);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, maxIndex]);

  /* -------------------------------------------------
      Navigation
  ------------------------------------------------- */

  const goNext = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1,
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1,
    );
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  /* -------------------------------------------------
      Card interaction
  ------------------------------------------------- */

  const handleCardSelect = (index: number) => {
    setSelectedIndex(index);
    setHoveredIndex(index);
  };

  const handleCardHover = (index: number | null) => {
    setHoveredIndex(index);

    if (index !== null) {
      setSelectedIndex(index);
    }
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section 
      id="services" 
      className="relative isolate overflow-hidden bg-[var(--bg-primary)] pt-0 pb-0 transition-colors duration-500"
    >
      {/* -------------------------------------------------
          Subtle brand background
      ------------------------------------------------- */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--brand-blue-soft)] blur-[110px] opacity-70" />

      <div className="pointer-events-none absolute -right-40 top-[35%] h-80 w-80 rounded-full bg-[var(--brand-green-soft)] blur-[110px] opacity-70" />

      <div className="pointer-events-none absolute bottom-[-160px] left-[35%] h-80 w-80 rounded-full bg-[var(--brand-red-soft)] blur-[110px] opacity-60" />

      {/* -------------------------------------------------
          MAIN CONTAINER
          
          Matching inspect layout: relative z-10 w-full px-6 sm:px-12 lg:px-20
      ------------------------------------------------- */}

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
        {/* -------------------------------------------------
            Heading
        ------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-2xl lg:mb-12"
        >
          <h2 className="text-[32px] lg:text-[46px] xl:text-[52px] font-semibold tracking-[-0.04em] leading-tight text-[var(--text-primary)] transition-colors duration-500">
            Our{" "}
            <span className="text-[var(--color-navy)] ">
              Services
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)] transition-colors duration-500">
            From digital products and cloud infrastructure to AI, security and creative solutions, we build technology that helps businesses grow.
          </p>
        </motion.div>

        {/* -------------------------------------------------
            Carousel
        ------------------------------------------------- */}

        <div 
          ref={containerRef} 
          className="relative" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragMomentum={false}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                const threshold = 60;

                if (info.offset.x < -threshold) {
                  goNext();
                } else if (info.offset.x > threshold) {
                  goPrevious();
                }
              }}
              animate={{ x: -activeIndex * (cardWidth + GAP) }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="flex cursor-grab active:cursor-grabbing"
              style={{ gap: GAP }}
            >
              {services.map((service, index) => (
                <div key={service.id} className="shrink-0" style={{ width: cardWidth || "100%" }}>
                  <ServiceCard
                    service={service}
                    index={index}
                    isHovered={hoveredIndex === index}
                    isSelected={selectedIndex === index}
                    onHover={handleCardHover}
                    onSelect={handleCardSelect}
                    onLeave={handleCardLeave}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* -------------------------------------------------
            Bottom navigation
        ------------------------------------------------- */}

        <div className="mt-8 flex items-center justify-between border-t border-[var(--border-secondary)] pt-5 transition-colors duration-500">
          {/* Progress */}

          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to service ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeIndex === index 
                    ? "w-8 bg-[var(--color-green)]" 
                    : "w-2 bg-[var(--border-primary)]"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous services"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--surface-primary)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next services"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-navy)] text-white transition-all duration-300 hover:bg-[var(--color-green)]"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}