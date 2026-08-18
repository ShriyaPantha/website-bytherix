import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import robotLaptopGif from "../../../assets/robot_blink_full.gif";

const MAX_TILT_DEG = 5;
const MAX_LIFT_PX = 6;

const RobotLaptopHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    stiffness: 100,
    damping: 18,
    mass: 0.8,
  });

  const springY = useSpring(pointerY, {
    stiffness: 100,
    damping: 18,
    mass: 0.8,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [MAX_TILT_DEG, -MAX_TILT_DEG]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-MAX_TILT_DEG, MAX_TILT_DEG]
  );

  const liftX = useTransform(
    springX,
    [-0.5, 0.5],
    [-MAX_LIFT_PX, MAX_LIFT_PX]
  );

  const liftY = useTransform(
    springY,
    [-0.5, 0.5],
    [-MAX_LIFT_PX, MAX_LIFT_PX]
  );

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    const rect =
      containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="
        relative
        flex
        w-full
        items-center
        justify-center
      "
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        className="
          relative
          w-full
          max-w-[760px]
          will-change-transform
        "
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          rotateX,
          rotateY,
          x: liftX,
          y: liftY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* =====================================================
            ROBOT
            ===================================================== */}

        <img
          src={robotLaptopGif}
          alt="Bytherix robot presenting a laptop"
          className="
            block
            w-full
            h-auto
            select-none
            pointer-events-none
            object-contain
            drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]
          "
          draggable={false}
        />

        {/* =====================================================
            CONTACT SHADOW
            ===================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            pointer-events-none
          "
          style={{
            bottom: "2%",
            width: "58%",
            height: "18px",
          }}
          animate={{
            scaleX: [1, 0.94, 1],
            scaleY: [1, 0.9, 1],
            opacity: [0.55, 0.4, 0.55],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Soft shadow */}
          <div
            className="
              absolute
              inset-0
              rounded-[50%]
            "
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.16) 52%, transparent 75%)",
              filter: "blur(12px)",
              transform: "scaleY(0.7)",
            }}
          />

          {/* Core shadow */}
          <div
            className="
              absolute
              left-1/2
              top-1
              -translate-x-1/2
              w-[78%]
              h-3
              rounded-[50%]
            "
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RobotLaptopHero;