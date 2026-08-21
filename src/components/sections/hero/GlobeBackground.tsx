// /**
//  * GlobeBackground
//  * ------------------------------------------------------------------
//  * A transparent, auto-rotating wireframe globe (icosahedron + glowing
//  * accent nodes + a faint outer shell), positioned on the right side
//  * of the viewport — same idea as the reference SIGNAL template, but
//  * built with @react-three/fiber to slot straight into your React app
//  * instead of raw three.js + a <script> tag.
//  *
//  * It's purely decorative background: pointer-events are disabled and
//  * it sits behind your content (z-index 0) with a transparent canvas,
//  * so drop it as the FIRST child of a `position: relative` section and
//  * everything else just layers on top of it.
//  *
//  * COLORS — tuned to Bytherix's theme from your screenshot:
//  *   accentSignal (default #FF5A4E) -> matches your red "B" / "Smart Tools"
//  *   accentCyan   (default #5EEAD4) -> matches the teal/green in your icons
//  * Pass different hex values as props if these aren't quite right.
//  *
//  * SETUP:
//  *   npm install three @react-three/fiber   (you already have these)
//  *
//  * USAGE (e.g. in Hero.tsx, as the first child inside your
//  * `<section className="relative ...">`):
//  *
//  *   <GlobeBackground />
//  *
//  * ------------------------------------------------------------------
//  */

// import { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// interface GlobeBackgroundProps {
//   accentSignal?: string; // warm accent — orbit nodes
//   accentCyan?: string; // cool accent — wireframe lines
//   opacity?: number; // overall canvas opacity (0-1)
//   className?: string;
// }

// function Globe({
//   accentSignal,
//   accentCyan,
// }: {
//   accentSignal: string;
//   accentCyan: string;
// }) {
//   const groupRef = useRef<THREE.Group>(null);

//   const nodePositions = useMemo(() => {
//     const geo = new THREE.IcosahedronGeometry(2.1, 3);
//     const pos = geo.attributes.position;
//     const points: [number, number, number][] = [];
//     for (let i = 0; i < pos.count; i += 9) {
//       points.push([pos.getX(i), pos.getY(i), pos.getZ(i)]);
//     }
//     geo.dispose();
//     return points;
//   }, []);

//   useFrame((_, delta) => {
//     if (!groupRef.current) return;
//     groupRef.current.rotation.y += delta * 0.11;
//     groupRef.current.rotation.x += delta * 0.03;
//   });

//   return (
//     <group ref={groupRef}>
//       {/* main wireframe sphere */}
//       <mesh>
//         <icosahedronGeometry args={[2.1, 3]} />
//         <meshBasicMaterial color={accentCyan} wireframe transparent opacity={0.35} />
//       </mesh>

//       {/* glowing accent nodes at a subset of vertices */}
//       {nodePositions.map((p, i) => (
//         <mesh key={i} position={p}>
//           <sphereGeometry args={[0.028, 8, 8]} />
//           <meshBasicMaterial color={accentSignal} />
//         </mesh>
//       ))}

//       {/* faint outer shell for depth */}
//       <mesh>
//         <sphereGeometry args={[2.6, 32, 32]} />
//         <meshBasicMaterial color={accentCyan} wireframe transparent opacity={0.06} />
//       </mesh>
//     </group>
//   );
// }

// const GlobeBackground = ({
//   accentSignal = "#FF5A4E",
//   accentCyan = "#5EEAD4",
//   opacity = 0.9,
//   className = "",
// }: GlobeBackgroundProps) => {
//   return (
//     <div
//       className={`pointer-events-none absolute top-0 right-0 h-full w-full lg:w-[60vw] z-0 ${className}`}
//       style={{ opacity }}
//       aria-hidden="true"
//     >
//       <Canvas
//         gl={{ alpha: true, antialias: true }}
//         camera={{ position: [0, 0, 6.5], fov: 45 }}
//         dpr={[1, 2]}
//       >
//         <Globe accentSignal={accentSignal} accentCyan={accentCyan} />
//       </Canvas>
//     </div>
//   );
// };

// export default GlobeBackground;