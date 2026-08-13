/**
 * TechRobotLaptop3D
 * ------------------------------------------------------------------
 * A procedurally-built white/black robot holding a laptop, matching
 * the "friendly assistant robot" reference photo: round head with a
 * dark visor, two glowing cyan eyes + a small smile, chunky white
 * body with a glowing logo badge on the chest, and one arm resting
 * under the laptop's front edge.
 *
 * No external .glb, no HDRI fetch — everything is primitives + two
 * canvas-drawn textures (face + keyboard), so it renders immediately.
 *
 * SETUP:
 *
 * This file expects to live at:
 *   src/components/sections/hero/TechRobotLaptop3D.tsx
 * next to your existing Hero.tsx and HeroBackground.tsx — the asset
 * imports below are already relative to that location
 * (src/assets/hero.png and src/assets/logo.png). If you put this
 * file somewhere else, adjust the "../../../assets/" prefix.
 *
 * IMPORTANT: give this a parent container with NO fixed height and
 * NO `overflow-hidden` (that's what was cropping the robot before).
 * Use something like a plain `<div className="relative w-full">`
 * sized by aspect-ratio instead — see the Hero.tsx snippet below.
 *
 * Install (if not already installed):
 *   npm install three @react-three/fiber @react-three/drei
 * ------------------------------------------------------------------
 */

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

// Matches: src/components/sections/hero/TechRobotLaptop3D.tsx -> src/assets/
import heroImg from "../../../assets/hero.png";
import logoImg from "../../../assets/logo.png";

/* ================= CONFIG ================= */

// Laptop proportions (scene units).
const SCREEN_WIDTH = 1.3;
const SCREEN_HEIGHT = 0.82;
const SCREEN_THICKNESS = 0.035;
const BASE_DEPTH = 0.9;
const BASE_THICKNESS = 0.05;
const BEZEL = 0.075;
const HINGE_TILT = -0.32;

const KEY_ROWS = 5;
const KEY_COLS = 14;
const KEYBOARD_WIDTH = SCREEN_WIDTH - 0.22;
const KEYBOARD_DEPTH = 0.42;
const KEYBOARD_OFFSET_Z = -0.14;
const TRACKPAD_WIDTH = 0.34;
const TRACKPAD_DEPTH = 0.24;

// Robot proportions.
const HEAD_RADIUS = 0.46;
const TORSO_WIDTH = 0.62;
const TORSO_HEIGHT = 0.78;
const TORSO_DEPTH = 0.5;
const ROBOT_WHITE = "#f4f5f7";
const ROBOT_DARK = "#1b1c1f";
const EYE_CYAN = "#4fd8ff";

const CLOSED_ROT_X = Math.PI / 2.05;
const OPEN_DURATION = 1.3;
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ================= TEXTURES ================= */

// Black keyboard, keys drawn as a canvas texture (cheap vs. 70+ meshes).
function useKeyboardTexture() {
  return useMemo(() => {
    const px = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = px;
    canvas.height = Math.round(px * (KEYBOARD_DEPTH / KEYBOARD_WIDTH));
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#0b0b0c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const margin = px * 0.02;
    const gap = px * 0.008;
    const usableW = canvas.width - margin * 2;
    const usableH = canvas.height - margin * 2;
    const keyW = (usableW - gap * (KEY_COLS - 1)) / KEY_COLS;
    const keyH = (usableH - gap * (KEY_ROWS - 1)) / KEY_ROWS;
    const radius = keyW * 0.16;

    const drawRoundedRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    for (let row = 0; row < KEY_ROWS; row++) {
      for (let col = 0; col < KEY_COLS; col++) {
        const x = margin + col * (keyW + gap);
        const y = margin + row * (keyH + gap);
        drawRoundedRect(x, y, keyW, keyH, radius);
        ctx.fillStyle = "#1c1c1f";
        ctx.fill();
        drawRoundedRect(x, y, keyW, keyH * 0.4, radius);
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

// Dark visor with two glowing cyan eyes + a small smile, drawn once.
function useFaceTexture() {
  return useMemo(() => {
    const px = 512;
    const canvas = document.createElement("canvas");
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext("2d")!;

    // transparent background — this plane sits on top of the head sphere
    ctx.clearRect(0, 0, px, px);

    // visor panel
    ctx.fillStyle = "#101114";
    const vx = px * 0.12,
      vy = px * 0.22,
      vw = px * 0.76,
      vh = px * 0.5,
      vr = px * 0.16;
    ctx.beginPath();
    ctx.moveTo(vx + vr, vy);
    ctx.arcTo(vx + vw, vy, vx + vw, vy + vh, vr);
    ctx.arcTo(vx + vw, vy + vh, vx, vy + vh, vr);
    ctx.arcTo(vx, vy + vh, vx, vy, vr);
    ctx.arcTo(vx, vy, vx + vw, vy, vr);
    ctx.closePath();
    ctx.fill();

    // glowing eyes (soft radial glow + solid core)
    const eyeY = vy + vh * 0.4;
    const eyeXs = [vx + vw * 0.28, vx + vw * 0.72];
    eyeXs.forEach((ex) => {
      const glow = ctx.createRadialGradient(ex, eyeY, 2, ex, eyeY, px * 0.09);
      glow.addColorStop(0, "rgba(79,216,255,0.9)");
      glow.addColorStop(1, "rgba(79,216,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(ex, eyeY, px * 0.09, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = EYE_CYAN;
      ctx.beginPath();
      ctx.roundRect(ex - px * 0.045, eyeY - px * 0.055, px * 0.09, px * 0.11, px * 0.03);
      ctx.fill();
    });

    // small smile
    ctx.strokeStyle = "rgba(79,216,255,0.85)";
    ctx.lineWidth = px * 0.012;
    ctx.beginPath();
    ctx.arc(px * 0.5, eyeY + px * 0.12, px * 0.09, Math.PI * 0.15, Math.PI * 0.85);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

/* ================= LAPTOP ================= */

function Laptop({ openProgress }: { openProgress: React.MutableRefObject<number> }) {
  const heroTexture = useTexture(heroImg);
  heroTexture.colorSpace = THREE.SRGBColorSpace;
  const keyboardTexture = useKeyboardTexture();
  const screenGroupRef = useRef<THREE.Group>(null);
  const startTime = useRef<number | null>(null);

  useFrame((state) => {
    if (!screenGroupRef.current) return;
    if (startTime.current === null) startTime.current = state.clock.elapsedTime;
    const t = Math.min((state.clock.elapsedTime - startTime.current) / OPEN_DURATION, 1);
    const eased = easeInOutCubic(t);
    screenGroupRef.current.rotation.x = THREE.MathUtils.lerp(CLOSED_ROT_X, HINGE_TILT, eased);
    openProgress.current = eased;
  });

  return (
    <group>
      {/* Base / keyboard deck */}
      <RoundedBox
        args={[SCREEN_WIDTH + 0.08, BASE_THICKNESS, BASE_DEPTH]}
        radius={0.025}
        smoothness={4}
        position={[0, -BASE_THICKNESS / 2, BASE_DEPTH / 2 - 0.08]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#0a0a0a" metalness={0.35} roughness={0.55} />
      </RoundedBox>

      {/* Keyboard */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.0011, BASE_DEPTH / 2 - 0.08 + KEYBOARD_OFFSET_Z]}
      >
        <planeGeometry args={[KEYBOARD_WIDTH, KEYBOARD_DEPTH]} />
        <meshStandardMaterial map={keyboardTexture} roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Trackpad */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[
          0,
          0.0011,
          BASE_DEPTH / 2 - 0.08 + KEYBOARD_OFFSET_Z + KEYBOARD_DEPTH / 2 + TRACKPAD_DEPTH / 2 + 0.05,
        ]}
      >
        <planeGeometry args={[TRACKPAD_WIDTH, TRACKPAD_DEPTH]} />
        <meshStandardMaterial color="#141416" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Screen assembly */}
      <group ref={screenGroupRef} position={[0, 0, -0.08]} rotation={[CLOSED_ROT_X, 0, 0]}>
        <RoundedBox
          args={[SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_THICKNESS]}
          radius={0.025}
          smoothness={4}
          position={[0, SCREEN_HEIGHT / 2, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#0a0a0a" metalness={0.35} roughness={0.55} />
        </RoundedBox>

        {/* Your hero.png, inset inside the frame */}
        <mesh position={[0, SCREEN_HEIGHT / 2, SCREEN_THICKNESS / 2 + 0.001]}>
          <planeGeometry args={[SCREEN_WIDTH - BEZEL * 2, SCREEN_HEIGHT - BEZEL * 2]} />
          <meshBasicMaterial map={heroTexture} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

/* ================= ROBOT ================= */

function Robot() {
  const faceTexture = useFaceTexture();
  const logoTexture = useTexture(logoImg);
  logoTexture.colorSpace = THREE.SRGBColorSpace;

  const bodyMat = (
    <meshStandardMaterial color={ROBOT_WHITE} metalness={0.15} roughness={0.35} />
  );
  const jointMat = (
    <meshStandardMaterial color={ROBOT_DARK} metalness={0.4} roughness={0.4} />
  );

  return (
    <group position={[-0.95, 0, -0.05]}>
      {/* ---- Head ---- */}
      <group position={[0, 1.28, 0]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[HEAD_RADIUS, 48, 48]} />
          {bodyMat}
        </mesh>
        {/* ears */}
        {[-1, 1].map((side) => (
          <mesh
            key={side}
            position={[side * (HEAD_RADIUS + 0.03), 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
            castShadow
          >
            <cylinderGeometry args={[0.09, 0.09, 0.06, 24]} />
            {jointMat}
          </mesh>
        ))}
        {/* face plate (visor + glowing eyes + smile) */}
        <mesh position={[0, 0.02, HEAD_RADIUS * 0.92]}>
          <planeGeometry args={[HEAD_RADIUS * 1.5, HEAD_RADIUS * 1.5]} />
          <meshBasicMaterial map={faceTexture} transparent toneMapped={false} />
        </mesh>
      </group>

      {/* neck joint */}
      <mesh position={[0, 0.98, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.12, 24]} />
        {jointMat}
      </mesh>

      {/* ---- Torso ---- */}
      <RoundedBox
        args={[TORSO_WIDTH, TORSO_HEIGHT, TORSO_DEPTH]}
        radius={0.14}
        smoothness={4}
        position={[0, 0.55, 0]}
        castShadow
        receiveShadow
      >
        {bodyMat}
      </RoundedBox>

      {/* chest logo badge (your logo.png), glowing outline ring behind it */}
      <mesh position={[0, 0.62, TORSO_DEPTH / 2 + 0.001]}>
        <circleGeometry args={[0.16, 32]} />
        <meshBasicMaterial color="#0d0d0f" />
      </mesh>
      <mesh position={[0, 0.62, TORSO_DEPTH / 2 + 0.003]}>
        <planeGeometry args={[0.24, 0.24]} />
        <meshBasicMaterial map={logoTexture} transparent toneMapped={false} />
      </mesh>

      {/* waist joint */}
      <mesh position={[0, 0.16, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.22, 0.1, 24]} />
        {jointMat}
      </mesh>
      {/* base / feet stub */}
      <RoundedBox
        args={[0.4, 0.14, 0.3]}
        radius={0.05}
        position={[0, 0.03, 0]}
        castShadow
        receiveShadow
      >
        {jointMat}
      </RoundedBox>

      {/* ---- Left arm: relaxed at the side ---- */}
      <group position={[-TORSO_WIDTH / 2 - 0.05, 0.85, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.11, 24, 24]} />
          {jointMat}
        </mesh>
        <mesh position={[-0.03, -0.22, 0]} rotation={[0, 0, 0.15]} castShadow>
          <capsuleGeometry args={[0.075, 0.32, 8, 16]} />
          {bodyMat}
        </mesh>
        <mesh position={[-0.06, -0.44, 0.02]} castShadow>
          <sphereGeometry args={[0.085, 24, 24]} />
          {jointMat}
        </mesh>
        <mesh position={[-0.03, -0.65, 0.08]} rotation={[0.25, 0, 0.05]} castShadow>
          <capsuleGeometry args={[0.07, 0.28, 8, 16]} />
          {bodyMat}
        </mesh>
        <RoundedBox
          args={[0.14, 0.14, 0.14]}
          radius={0.03}
          position={[-0.02, -0.85, 0.16]}
          castShadow
        >
          {bodyMat}
        </RoundedBox>
      </group>

      {/* ---- Right arm: reaches forward and down, cradling the laptop
            from underneath at roughly hand/waist height, like it's
            presenting the laptop to camera ---- */}
      <group position={[TORSO_WIDTH / 2 + 0.05, 0.85, 0]}>
        {/* shoulder */}
        <mesh castShadow>
          <sphereGeometry args={[0.11, 24, 24]} />
          {jointMat}
        </mesh>
        {/* upper arm */}
        <mesh position={[0.05, -0.18, 0.02]} rotation={[0.1, 0, -0.35]} castShadow>
          <capsuleGeometry args={[0.075, 0.28, 8, 16]} />
          {bodyMat}
        </mesh>
        {/* elbow */}
        <mesh position={[0.13, -0.35, 0.05]} castShadow>
          <sphereGeometry args={[0.085, 24, 24]} />
          {jointMat}
        </mesh>
        {/* forearm, reaching further forward + down to meet the
            laptop's lowered, tilted resting height */}
        <mesh position={[0.3, -0.42, 0.35]} rotation={[1.05, 0, -0.55]} castShadow>
          <capsuleGeometry args={[0.07, 0.44, 8, 16]} />
          {bodyMat}
        </mesh>
        {/* hand, flat, cupping the laptop's underside */}
        <RoundedBox
          args={[0.18, 0.05, 0.22]}
          radius={0.02}
          position={[0.5, -0.62, 0.62]}
          rotation={[0, -0.15, 0]}
          castShadow
        >
          {bodyMat}
        </RoundedBox>
      </group>
    </group>
  );
}

/* ================= SCENE ================= */

function IdleFloat({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
  });
  return <group ref={groupRef}>{children}</group>;
}

const TechRobotLaptop3D = () => {
  const openProgress = useRef(0);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [1.5, 1.05, 3.9], fov: 30 }}
        shadows
      >
        <ambientLight intensity={0.75} />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#a7c7ff" />
        <directionalLight position={[0, -2, 3]} intensity={0.3} color="#ffffff" />

        <Suspense fallback={null}>
          <IdleFloat>
            <group position={[0.78, 0.32, -0.05]} rotation={[-0.18, -0.12, 0]}>
              <Laptop openProgress={openProgress} />
            </group>
            <Robot />
          </IdleFloat>
        </Suspense>

        <ContactShadows position={[0, -0.02, 0]} opacity={0.5} scale={6} blur={2.2} far={2} />

        <OrbitControls
          target={[0.1, 0.75, 0]}
          enablePan={false}
          minDistance={3.2}
          maxDistance={5.2}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>
    </div>
  );
};

export default TechRobotLaptop3D;