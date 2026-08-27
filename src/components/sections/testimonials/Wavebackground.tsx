import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const GRID_X = 85;
const GRID_Y = 85;
const TOTAL_POINTS = GRID_X * GRID_Y;
const SEP = 0.085;

// Dark Mode Palette (Bright Cyan & Blue)
const DARK_PRIMARY = new THREE.Color("#00f0ff");
const DARK_SECONDARY = new THREE.Color("#1d4ed8");

// Light Mode Palette (High-contrast Indigo & Deep Cyan)
const LIGHT_PRIMARY = new THREE.Color("#0369a1");
const LIGHT_SECONDARY = new THREE.Color("#4338ca");

function ParticleWave({ isDark, paused }: { isDark: boolean; paused: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { viewport, invalidate } = useThree();

  useEffect(() => {
    invalidate();
  }, [isDark, invalidate]);

  const { positions, basePositions } = useMemo(() => {
    const posArr = new Float32Array(TOTAL_POINTS * 3);
    const baseArr = new Float32Array(TOTAL_POINTS * 3);

    let idx = 0;
    for (let x = 0; x < GRID_X; x++) {
      for (let y = 0; y < GRID_Y; y++) {
        const xPos = (x - GRID_X / 2) * SEP;
        const yPos = (y - GRID_Y / 2) * SEP;

        posArr[idx] = xPos;
        posArr[idx + 1] = yPos;
        posArr[idx + 2] = 0;

        baseArr[idx] = xPos;
        baseArr[idx + 1] = yPos;
        baseArr[idx + 2] = 0;

        idx += 3;
      }
    }

    return { positions: posArr, basePositions: baseArr };
  }, []);

  const colors = useMemo(() => {
    const colArr = new Float32Array(TOTAL_POINTS * 3);
    const primary = isDark ? DARK_PRIMARY : LIGHT_PRIMARY;
    const secondary = isDark ? DARK_SECONDARY : LIGHT_SECONDARY;

    let idx = 0;
    for (let x = 0; x < GRID_X; x++) {
      for (let y = 0; y < GRID_Y; y++) {
        const xPos = (x - GRID_X / 2) * SEP;
        const yPos = (y - GRID_Y / 2) * SEP;

        const distFromCenter = Math.sqrt(xPos * xPos + yPos * yPos) / 3.5;
        const mixRatio = Math.max(0, Math.min(1, 1 - distFromCenter));
        const pointColor = secondary.clone().lerp(primary, mixRatio);

        colArr[idx] = pointColor.r;
        colArr[idx + 1] = pointColor.g;
        colArr[idx + 2] = pointColor.b;

        idx += 3;
      }
    }
    return colArr;
  }, [isDark]);

  useFrame((state) => {
    if (paused || !pointsRef.current) return;

    const time = state.clock.getElapsedTime() * 1.1;
    const posAttribute = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const array = posAttribute.array as Float32Array;

    let idx = 0;
    for (let x = 0; x < GRID_X; x++) {
      for (let y = 0; y < GRID_Y; y++) {
        const baseX = basePositions[idx];
        const baseY = basePositions[idx + 1];

        const waveZ =
          Math.sin(baseX * 1.8 + time + baseY * 0.8) * 0.45 +
          Math.cos(baseY * 1.5 + time * 0.8) * 0.35;

        const waveX = baseX + Math.sin(baseY * 0.8 + time * 0.5) * 0.3;

        array[idx] = waveX;
        array[idx + 1] = baseY;
        array[idx + 2] = waveZ;

        idx += 3;
      }
    }

    posAttribute.needsUpdate = true;
  });

  const scale = Math.max(viewport.width / 7.5, viewport.height / 7.5, 0.85);

  return (
    <points
      ref={pointsRef}
      scale={[scale, scale, scale]}
      // Rotated to angle the entire mesh from lower-left up towards top-right
      rotation={[-Math.PI / 3.5, -Math.PI / 4, Math.PI / 6]}
      // Shifted left and down so the wave originates near the bottom-left text/cards
      position={[-0.2, -0.6, 0]}
    >
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute
          key={isDark ? "dark-colors" : "light-colors"}
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        key={isDark ? "dark-mat" : "light-mat"}
        size={isDark ? 0.032 : 0.05}
        vertexColors
        transparent
        opacity={isDark ? 0.75 : 0.9}
        sizeAttenuation
        depthWrite={false}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  );
}

const WaveBackground = ({
  className = "",
  paused = false,
}: {
  className?: string;
  paused?: boolean;
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        inset-y-0
        right-0
        left-auto
        w-full
        overflow-hidden
        md:w-4/5
        xl:w-3/4
        ${className}
      `}
      style={{
        maskImage:
          "radial-gradient(ellipse at 65% 55%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at 65% 55%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 85%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <ParticleWave isDark={isDark} paused={paused} />
      </Canvas>
    </div>
  );
};







export default WaveBackground;