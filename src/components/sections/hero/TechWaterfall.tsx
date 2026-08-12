import { useRef, useMemo, useState } from "react";
// import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox, Html } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";

/* ------------------------------------------------------------------ */
/*  Tech logos                                                         */
/* ------------------------------------------------------------------ */

const TECH = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.6" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    icon: (
      <div style={{
        width: "78%", height: "78%", borderRadius: "50%",
        border: "3px solid #fff", display: "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: 36, fontWeight: 800, color: "#fff"
      }}>N</div>
    ),
  },
  {
    name: "Vercel",
    color: "#ffffff",
    icon: (
      <svg width="75%" height="75%" viewBox="0 0 76 65" fill="#fff">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "Vue",
    color: "#42b883",
    icon: (
      <svg width="80%" height="80%" viewBox="0 0 256 221">
        <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#42b883"/>
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#35495e"/>
      </svg>
    ),
  },
  {
    name: "Angular",
    color: "#dd0031",
    icon: (
      <svg width="78%" height="78%" viewBox="0 0 24 24" fill="#dd0031">
        <path d="M12 2.5L3.5 5.5l1.4 12.5L12 21.5l7.1-3.5 1.4-12.5L12 2.5z"/>
      </svg>
    ),
  },
  {
    name: "Svelte",
    color: "#ff3e00",
    icon: (
      <svg width="78%" height="78%" viewBox="0 0 32 32" fill="#ff3e00">
        <path d="M26.4 6.2c-2.6-3.7-7.7-4.8-11.5-2.5L9.2 7.2C7.5 8.2 6.4 9.8 6.1 11.7c-.3 1.5.1 3 .9 4.2-.6 1-1 2.1-.9 3.3.3 2.1 1.7 3.9 3.6 4.8l5.7 3.5c3.8 2.3 8.9 1.2 11.5-2.5 1.5-2.1 1.9-4.7 1.1-7.1.8-1.2 1.2-2.6 1-4.1-.3-1.9-1.4-3.5-3.1-4.5z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#38bdf8",
    icon: (
      <svg width="88%" height="55%" viewBox="0 0 54 33" fill="#38bdf8">
        <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2 5.14 3.64C31.2 13.6 34.5 17 41 17c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2-5.14-3.64C36.8 3.4 33.5 0 27 0zM13.5 17C6.3 17 1.8 20.6 0 27.8c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 2 5.14 3.64C17.7 30.6 21 34 27.5 34c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-2-5.14-3.64C23.3 20.4 20 17 13.5 17z"/>
      </svg>
    ),
  },
  {
    name: "Node",
    color: "#68a063",
    icon: (
      <svg width="70%" height="80%" viewBox="0 0 256 289" fill="#68a063">
        <path d="M128 0L0 72.5v144.1l128 72.4 128-72.4V72.5L128 0zm0 23.3l105.4 59.6v119.2L128 261.7 22.6 202.1V82.9L128 23.3z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    icon: (
      <div style={{
        width: "80%", height: "80%", background: "#3178c6",
        borderRadius: 14, display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 32, fontWeight: 800, color: "#fff"
      }}>TS</div>
    ),
  },
  {
    name: "Astro",
    color: "#ff5d01",
    icon: (
      <svg width="78%" height="78%" viewBox="0 0 24 24" fill="#ff5d01">
        <path d="M12 1.5l1.4 6.1 5.9-2.4-2.4 5.9 6.1 1.4-6.1 1.4 2.4 5.9-5.9-2.4L12 22.5l-1.4-6.1-5.9 2.4 2.4-5.9-6.1-1.4 6.1-1.4-2.4-5.9 5.9 2.4L12 1.5z"/>
      </svg>
    ),
  },
  {
    name: "Vite",
    color: "#646cff",
    icon: (
      <svg width="78%" height="78%" viewBox="0 0 32 32">
        <path d="M16 2L3 28h6l7-16 7 16h6L16 2z" fill="#646cff"/>
        <path d="M16 12l-4 10h8l-4-10z" fill="#ffd62e"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ed",
    icon: (
      <svg width="85%" height="70%" viewBox="0 0 24 24" fill="#2496ed">
        <path d="M4 15h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zM4 12h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM7 9h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2z"/>
      </svg>
    ),
  },
];

const CUBE_COLORS = [
  "#ef4444", "#3b82f6", "#22c55e",
  "#f87171", "#60a5fa", "#4ade80",
  "#dc2626", "#2563eb", "#16a34a",
];

const CUBE_SIZE = 1.25;

/* ------------------------------------------------------------------ */
/*  Falling cube – slow + infinite + draggable                         */
/* ------------------------------------------------------------------ */

function FallingCube({
  tech,
  color,
  initial,
}: {
  tech: (typeof TECH)[0];
  color: string;
  initial: { x: number; y: number; z: number };
}) {
  const bodyRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef(new THREE.Vector3());

  // Slow continuous fall + respawn
  useFrame((state) => {
    if (!bodyRef.current || dragging) return;

    const pos = bodyRef.current.translation();

    // Soft downward force (much slower than real gravity)
    bodyRef.current.applyImpulse({ x: 0, y: -0.018, z: 0 }, true);

    // Very light horizontal sway
    const sway = Math.sin(state.clock.elapsedTime * 0.45 + initial.x) * 0.012;
    bodyRef.current.applyImpulse({ x: sway, y: 0, z: 0 }, true);

    // Infinite loop – reset when too low
    if (pos.y < -10) {
      bodyRef.current.setTranslation(
        {
          x: (Math.random() - 0.5) * 9,
          y: 11 + Math.random() * 4,
          z: (Math.random() - 0.5) * 3,
        },
        true
      );
      bodyRef.current.setLinvel({ x: 0, y: -0.4, z: 0 }, true);
      bodyRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
  });

  // Drag handlers
  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const pos = bodyRef.current.translation();
    dragOffset.current.set(
      e.point.x - pos.x,
      e.point.y - pos.y,
      e.point.z - pos.z
    );
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragging || !bodyRef.current) return;
    e.stopPropagation();

    bodyRef.current.setNextKinematicTranslation({
      x: e.point.x - dragOffset.current.x,
      y: e.point.y - dragOffset.current.y,
      z: e.point.z - dragOffset.current.z,
    });
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    // Give a small velocity when released so it feels natural
    if (bodyRef.current) {
      bodyRef.current.setLinvel({ x: 0, y: -0.6, z: 0 }, true);
    }
  };

  return (
    <RigidBody
      ref={bodyRef}
      position={[initial.x, initial.y, initial.z]}
      colliders={false}
      type={dragging ? "kinematicPosition" : "dynamic"}
      restitution={0.35}
      friction={0.5}
      linearDamping={1.8}        // slows them down a lot
      angularDamping={2.5}
      mass={1.2}
    >
      <CuboidCollider args={[CUBE_SIZE / 2, CUBE_SIZE / 2, CUBE_SIZE / 2]} />

      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "grab";
        }}
        onPointerOut={() => {
          setHovered(false);
          if (!dragging) document.body.style.cursor = "auto";
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <RoundedBox args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} radius={0.16} smoothness={4}>
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={hovered || dragging ? 0.65 : 0.32}
            metalness={0.08}
            roughness={0.28}
            transmission={0.28}
            thickness={0.5}
            emissive={color}
            emissiveIntensity={hovered || dragging ? 0.35 : 0.08}
          />
        </RoundedBox>

        {/* Logo */}
        <Html
          transform
          occlude
          position={[0, 0, CUBE_SIZE / 2 + 0.03]}
          distanceFactor={1.55}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <motion.div
            animate={{ scale: hovered || dragging ? 1.07 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            style={{
              width: 165,
              height: 165,
              borderRadius: 22,
              background: "rgba(12, 8, 24, 0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${color}50`,
              boxShadow: hovered || dragging
                ? `0 0 28px ${color}60`
                : `0 0 12px ${color}28`,
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "78%",
                height: "78%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {tech.icon}
            </motion.div>
          </motion.div>
        </Html>
      </group>
    </RigidBody>
  );
}

/* ------------------------------------------------------------------ */
/*  Waterfall                                                          */
/* ------------------------------------------------------------------ */

function Waterfall() {
  const cubes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      tech: TECH[i % TECH.length],
      color: CUBE_COLORS[i % CUBE_COLORS.length],
      initial: {
        x: (Math.random() - 0.5) * 9,
        y: Math.random() * 14 - 2,
        z: (Math.random() - 0.5) * 3,
      },
    }));
  }, []);

  return (
    <>
      {cubes.map((c, i) => (
        <FallingCube key={i} {...c} />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */

const TechWaterfall = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 920,
        height: 480,
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <Canvas
        dpr={[1, 1.6]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          premultipliedAlpha: false,
        }}
        camera={{ position: [0, 0, 13], fov: 42 }}
        onCreated={({ camera, gl }) => {
          camera.lookAt(0, 0, 0);
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 8, 5]} intensity={1.15} />
        <directionalLight position={[-4, 3, -2]} intensity={0.35} />
        <pointLight position={[0, -4, 4]} intensity={0.4} color="#a78bfa" />

        <Environment preset="city" />

        {/* Very low gravity so falling feels gentle */}
        <Physics gravity={[0, -1.8, 0]} colliders={false}>
          <Waterfall />
        </Physics>

        <ContactShadows
          position={[0, -9.8, 0]}
          opacity={0.35}
          scale={22}
          blur={2.8}
          far={14}
        />
      </Canvas>
    </div>
  );
};

export default TechWaterfall;