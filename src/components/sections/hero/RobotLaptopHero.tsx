import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import robotLaptopGif from "../../../assets/robot_blink_full.gif";

const MAX_TILT_DEG = 8;
const MAX_LIFT_PX = 8;

const RobotLaptopHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 120, damping: 14 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 14 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT_DEG, -MAX_TILT_DEG]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT_DEG, MAX_TILT_DEG]);
  const liftX = useTransform(springX, [-0.5, 0.5], [-MAX_LIFT_PX, MAX_LIFT_PX]);
  const liftY = useTransform(springY, [-0.5, 0.5], [-MAX_LIFT_PX, MAX_LIFT_PX]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
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
      // Added -mt-24 (adjust this value like -mt-16, -mt-32 if needed) to shift it higher up
      className="relative w-full h-full flex flex-col items-center justify-center -mt-32"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="relative w-full max-w-[760px]"
        style={{
          rotateX,
          rotateY,
          x: liftX,
          y: liftY,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={robotLaptopGif}
          alt="Bytherix robot presenting a laptop"
          className="w-full h-auto select-none pointer-events-none drop-shadow-2xl"
          draggable={false}
        />

        {/* Contact shadow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ bottom: "2%", width: "58%", height: "18px" }}
        >
          <div
            className="absolute inset-0 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.18) 55%, transparent 75%)",
              filter: "blur(12px)",
              transform: "scaleY(0.7)",
            }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1 w-[78%] h-3 rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RobotLaptopHero;