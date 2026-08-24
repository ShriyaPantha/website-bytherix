import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import * as THREE from "three";

import BYTHERIXlogo from "../../../assets/BYTHERIXlogo.png";
import hero from "../../../assets/hero.png";
import react from "../../../assets/react.svg";
import vite from "../../../assets/vite.svg";

/* =========================================================
   COLORS
========================================================= */

const AZURE_BLUE = "#3157d5";
const VIVID_RED = "#fd3b30";
const SOFT_TEAL = "#29bcae";
const FEATURE_GREEN = "#188670";

/* =========================================================
   SLIDES
========================================================= */

const BUILDER_SLIDES = [
  {
    image: BYTHERIXlogo,
    label: "Motion System",
    title: "Make every interaction feel alive.",
    body: `Create smooth interactions,
scroll effects, transitions and
micro animations that make
your interface feel polished
and responsive.`,
    features: [
      {
        num: "01",
        title: "Interactive Experiences",
        body:
          "We create smooth interfaces with meaningful motion, transitions and interactive experiences.",
        icon: "code",
      },
      {
        num: "02",
        title: "Responsive Motion",
        body:
          "Every animation is carefully designed to feel natural across desktop, tablet and mobile.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Modern Interfaces",
        body:
          "Clean visual systems combine modern UI, motion and technology to create memorable products.",
        icon: "globe",
      },
    ],
    tagline:
      "Every interaction has a purpose — every motion tells a story.",
  },

  {
    image: hero,
    label: "Smart Workflow",
    title: "Design. Animate. Ship.",
    body: `Build the experience visually,
adjust the timing and interaction,
and turn your ideas into
production-ready experiences.`,
    features: [
      {
        num: "01",
        title: "Design Faster",
        body:
          "Turn ideas into interactive prototypes and real digital experiences without unnecessary complexity.",
        icon: "code",
      },
      {
        num: "02",
        title: "Build Securely",
        body:
          "Security and reliability remain part of the system from the first design decision to deployment.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Ready to Scale",
        body:
          "Our systems are designed to evolve with your business, users and future technology.",
        icon: "globe",
      },
    ],
    tagline:
      "From idea to production — one system, built to evolve.",
  },

  {
    image: react,
    label: "AI & Intelligent Systems",
    title: "Build smarter digital systems.",
    body: `Develop intelligent solutions,
combine automation with modern
technology, and turn complex
ideas into practical systems.`,
    features: [
      {
        num: "01",
        title: "AI Solutions",
        body:
          "Intelligent systems are designed around real business and user needs.",
        icon: "code",
      },
      {
        num: "02",
        title: "Smart Automation",
        body:
          "Automate repetitive workflows and improve efficiency with reliable technology.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Future Ready",
        body:
          "Scalable systems are built to evolve with users, products and technology.",
        icon: "globe",
      },
    ],
    tagline:
      "Intelligence that turns ideas into smarter solutions.",
  },

  {
    image: vite,
    label: "Digital Products & Innovation",
    title: "Turn ideas into real products.",
    body: `Design, develop and launch
scalable digital products that
solve real problems and create
measurable user value.`,
    features: [
      {
        num: "01",
        title: "Product Engineering",
        body:
          "From concept to deployment, every product is engineered with usability, performance and reliability in mind.",
        icon: "code",
      },
      {
        num: "02",
        title: "Scalable Architecture",
        body:
          "Flexible and maintainable architectures help products grow smoothly as users and requirements increase.",
        icon: "shield",
      },
      {
        num: "03",
        title: "Digital Innovation",
        body:
          "Modern technologies are combined to transform ideas into practical and future-ready digital solutions.",
        icon: "globe",
      },
    ],
    tagline:
      "Ideas become products when technology is engineered with purpose.",
  },
];

/* =========================================================
   FEATURE ICON
========================================================= */

function FeatureIcon({ type, color }) {
  if (type === "code") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 sm:h-5 sm:w-5"
        style={{ color }}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />

        <path
          d="m9 9-3 3 3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="m15 9 3 3-3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 8.5 10 15.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 sm:h-5 sm:w-5"
        style={{ color }}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 20 6v5c0 5.2-3.3 8.6-8 10-4.7-1.4-8-4.8-8-10V6l8-3Z" />

        <path
          d="m8.5 12 2.2 2.2 4.8-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 sm:h-5 sm:w-5"
      style={{ color }}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="8.5" />

      <path d="M3.8 9h16.4" />

      <path d="M3.8 15h16.4" />

      <path d="M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2 3.4-3.3 6.2-3.3 8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

/* =========================================================
   THREE JS GLOBE
========================================================= */

function GlobeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 1.8)
    );

    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      38,
      1,
      0.1,
      100
    );

    camera.position.set(0, 0, 7);

    const globe = new THREE.Group();
    scene.add(globe);

    const getDarkMode = () =>
      document.documentElement.classList.contains("dark");

    let isDark = getDarkMode();

    const DARK = {
      atmosphere: 0x00aeef,
      surface: 0x071a2b,
      outerWire: 0x00aeef,
      innerWire: 0x3157d5,
      equator: 0x00aeef,
      nodes: 0xfd3b30,
      halo: 0x3157d5,
      shell: 0x3157d5,
      ring: 0x7c3aed,
      particles: 0x00aeef,
    };

    const LIGHT = {
      atmosphere: 0x2563eb,
      surface: 0xf8fbff,
      outerWire: 0xcbd5e1,
      innerWire: 0x2563eb,
      equator: 0x2563eb,
      nodes: 0xe11d48,
      halo: 0x2563eb,
      shell: 0xcbd5e1,
      ring: 0x2563eb,
      particles: 0x2563eb,
    };

    const themeColor = (dark, key) =>
      dark ? DARK[key] : LIGHT[key];

    /* =====================================================
       ATMOSPHERE
    ===================================================== */

    const atmosphereGeometry =
      new THREE.SphereGeometry(2.22, 64, 64);

    const atmosphereMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "atmosphere"),
        transparent: true,
        opacity: isDark ? 0.105 : 0.045,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const atmosphere = new THREE.Mesh(
      atmosphereGeometry,
      atmosphereMaterial
    );

    globe.add(atmosphere);

    /* =====================================================
       INNER GLOW
    ===================================================== */

    const innerGlowGeometry =
      new THREE.SphereGeometry(2.12, 64, 64);

    const innerGlowMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "innerWire"),
        transparent: true,
        opacity: isDark ? 0.045 : 0.012,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const innerGlow = new THREE.Mesh(
      innerGlowGeometry,
      innerGlowMaterial
    );

    globe.add(innerGlow);

    /* =====================================================
       OUTER HALO
    ===================================================== */

    const haloGeometry =
      new THREE.SphereGeometry(2.48, 64, 64);

    const haloMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "halo"),
        transparent: true,
        opacity: isDark ? 0.065 : 0.028,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const halo = new THREE.Mesh(
      haloGeometry,
      haloMaterial
    );

    globe.add(halo);

    /* =====================================================
       MAIN GLOBE
    ===================================================== */

    const globeGeometry =
      new THREE.SphereGeometry(2.15, 42, 28);

    const globeMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "surface"),
        transparent: true,
        opacity: isDark ? 0.30 : 0.12,
        side: THREE.FrontSide,
        depthWrite: false,
      });

    const globeSurface = new THREE.Mesh(
      globeGeometry,
      globeMaterial
    );

    globe.add(globeSurface);

    /* =====================================================
       MAIN LATTICE
    ===================================================== */

    const wireframeMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "outerWire"),
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.34 : 0.45,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const wireframe = new THREE.Mesh(
      globeGeometry,
      wireframeMaterial
    );

    globe.add(wireframe);

    /* =====================================================
       SECOND BLUE MESH
    ===================================================== */

    const innerWireGeometry =
      new THREE.SphereGeometry(
        2.17,
        18,
        12
      );

    const innerWireMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(isDark, "innerWire"),
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.13 : 0.58,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const innerWire = new THREE.Mesh(
      innerWireGeometry,
      innerWireMaterial
    );

    globe.add(innerWire);

    /* =====================================================
       EQUATOR
    ===================================================== */

    const equatorPoints = [];
    const equatorRadius = 2.18;

    for (let i = 0; i <= 128; i++) {
      const angle =
        (i / 128) * Math.PI * 2;

      equatorPoints.push(
        new THREE.Vector3(
          Math.cos(angle) * equatorRadius,
          0,
          Math.sin(angle) * equatorRadius
        )
      );
    }

    const equatorGeometry =
      new THREE.BufferGeometry().setFromPoints(
        equatorPoints
      );

    const equatorMaterial =
      new THREE.LineBasicMaterial({
        color: themeColor(isDark, "equator"),
        transparent: true,
        opacity: isDark ? 0.24 : 0.42,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
      });

    const equator = new THREE.Line(
      equatorGeometry,
      equatorMaterial
    );

    globe.add(equator);

    /* =====================================================
       NODE LOCATIONS
    ===================================================== */

    const nodeCoordinates = [
      { lat: 27.7, lon: 85.3 },
      { lat: 28.6, lon: 77.2 },
      { lat: 31.2, lon: 121.5 },
      { lat: 35.6, lon: 139.7 },
      { lat: 37.6, lon: 127.0 },
      { lat: 22.3, lon: 114.2 },
      { lat: 1.35, lon: 103.8 },
      { lat: 13.7, lon: 100.5 },
      { lat: 25.2, lon: 55.3 },
      { lat: 24.7, lon: 46.7 },
      { lat: 41.0, lon: 29.0 },
      { lat: 39.9, lon: 116.4 },

      { lat: 51.5, lon: -0.1 },
      { lat: 48.8, lon: 2.3 },
      { lat: 52.5, lon: 13.4 },
      { lat: 41.9, lon: 12.5 },
      { lat: 40.4, lon: -3.7 },
      { lat: 59.3, lon: 18.1 },

      { lat: 40.7, lon: -74.0 },
      { lat: 37.8, lon: -122.4 },
      { lat: 34.0, lon: -118.2 },
      { lat: 49.3, lon: -123.1 },
      { lat: 43.7, lon: -79.4 },
      { lat: 19.4, lon: -99.1 },

      { lat: -23.5, lon: -46.6 },
      { lat: -34.6, lon: -58.4 },
      { lat: -12.0, lon: -77.0 },
      { lat: 4.7, lon: -74.1 },

      { lat: 30.0, lon: 31.2 },
      { lat: 6.5, lon: 3.4 },
      { lat: -1.3, lon: 36.8 },
      { lat: -33.9, lon: 18.4 },
      { lat: -26.2, lon: 28.0 },

      { lat: -33.9, lon: 151.2 },
      { lat: -37.8, lon: 144.9 },
      { lat: -27.5, lon: 153.0 },

      { lat: 64.1, lon: -21.9 },
      { lat: 25.8, lon: -80.2 },
      { lat: 32.1, lon: 34.8 },
      { lat: 55.7, lon: 37.6 },
      { lat: 35.7, lon: 51.4 },
      { lat: 23.1, lon: 72.6 },
      { lat: -6.2, lon: 106.8 },
      { lat: 14.6, lon: 121.0 },
    ];

    /* =====================================================
       NODE POSITIONS
    ===================================================== */

    const nodePositions = [];
    const nodeVectors = [];
    const nodeRadius = 2.205;

    nodeCoordinates.forEach(
      ({ lat, lon }) => {
        const phi =
          (90 - lat) *
          (Math.PI / 180);

        const theta =
          (lon + 180) *
          (Math.PI / 180);

        const x =
          -nodeRadius *
          Math.sin(phi) *
          Math.cos(theta);

        const y =
          nodeRadius *
          Math.cos(phi);

        const z =
          nodeRadius *
          Math.sin(phi) *
          Math.sin(theta);

        nodePositions.push(
          x,
          y,
          z
        );

        nodeVectors.push(
          new THREE.Vector3(
            x,
            y,
            z
          )
        );
      }
    );

    const nodeGeometry =
      new THREE.BufferGeometry();

    nodeGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        nodePositions,
        3
      )
    );

    /* =====================================================
       NODE DOTS
    ===================================================== */

    const nodeMaterial =
      new THREE.PointsMaterial({
        color: themeColor(isDark, "nodes"),
        size: isDark ? 0.105 : 0.095,
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const nodes = new THREE.Points(
      nodeGeometry,
      nodeMaterial
    );

    globe.add(nodes);

    /* =====================================================
       NODE GLOW
    ===================================================== */

    const nodeGlowMaterial =
      new THREE.PointsMaterial({
        color: themeColor(isDark, "nodes"),
        size: isDark ? 0.24 : 0.17,
        transparent: true,
        opacity: isDark ? 0.32 : 0.18,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const nodeGlow = new THREE.Points(
      nodeGeometry,
      nodeGlowMaterial
    );

    globe.add(nodeGlow);

    /* =====================================================
       SPARKLE TEXTURE
    ===================================================== */

    const sparkleCanvas =
      document.createElement("canvas");

    sparkleCanvas.width = 96;
    sparkleCanvas.height = 96;

    const sparkleContext =
      sparkleCanvas.getContext("2d");

    if (sparkleContext) {
      const center = 48;

      const glow =
        sparkleContext.createRadialGradient(
          center,
          center,
          0,
          center,
          center,
          44
        );

      glow.addColorStop(
        0,
        "rgba(253,59,48,1)"
      );

      glow.addColorStop(
        0.10,
        "rgba(253,59,48,1)"
      );

      glow.addColorStop(
        0.24,
        "rgba(253,59,48,0.70)"
      );

      glow.addColorStop(
        0.48,
        "rgba(253,59,48,0.22)"
      );

      glow.addColorStop(
        0.72,
        "rgba(253,59,48,0.07)"
      );

      glow.addColorStop(
        1,
        "rgba(253,59,48,0)"
      );

      sparkleContext.fillStyle = glow;
      sparkleContext.fillRect(
        0,
        0,
        96,
        96
      );

      const vertical =
        sparkleContext.createLinearGradient(
          0,
          5,
          0,
          91
        );

      vertical.addColorStop(
        0,
        "rgba(255,255,255,0)"
      );

      vertical.addColorStop(
        0.40,
        "rgba(255,255,255,0.08)"
      );

      vertical.addColorStop(
        0.50,
        "rgba(255,255,255,1)"
      );

      vertical.addColorStop(
        0.60,
        "rgba(255,255,255,0.08)"
      );

      vertical.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      sparkleContext.fillStyle =
        vertical;

      sparkleContext.fillRect(
        43,
        5,
        10,
        86
      );

      const horizontal =
        sparkleContext.createLinearGradient(
          5,
          0,
          91,
          0
        );

      horizontal.addColorStop(
        0,
        "rgba(255,255,255,0)"
      );

      horizontal.addColorStop(
        0.40,
        "rgba(255,255,255,0.08)"
      );

      horizontal.addColorStop(
        0.50,
        "rgba(255,255,255,1)"
      );

      horizontal.addColorStop(
        0.60,
        "rgba(255,255,255,0.08)"
      );

      horizontal.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      sparkleContext.fillStyle =
        horizontal;

      sparkleContext.fillRect(
        5,
        43,
        86,
        10
      );

      sparkleContext.beginPath();

      sparkleContext.arc(
        center,
        center,
        5.5,
        0,
        Math.PI * 2
      );

      sparkleContext.fillStyle =
        "rgba(255,255,255,1)";

      sparkleContext.fill();

      sparkleContext.beginPath();

      sparkleContext.arc(
        center,
        center,
        3.1,
        0,
        Math.PI * 2
      );

      sparkleContext.fillStyle =
        "rgba(253,59,48,1)";

      sparkleContext.fill();
    }

    const sparkleTexture =
      new THREE.CanvasTexture(
        sparkleCanvas
      );

    sparkleTexture.needsUpdate = true;

    /* =====================================================
       MOVING SPARKLE
    ===================================================== */

    const sparklePosition =
      new Float32Array(3);

    let currentNodeIndex =
      Math.floor(
        Math.random() *
          nodeVectors.length
      );

    let targetNodeIndex =
      currentNodeIndex;

    sparklePosition[0] =
      nodeVectors[
        currentNodeIndex
      ].x;

    sparklePosition[1] =
      nodeVectors[
        currentNodeIndex
      ].y;

    sparklePosition[2] =
      nodeVectors[
        currentNodeIndex
      ].z;

    const movingSparkleGeometry =
      new THREE.BufferGeometry();

    movingSparkleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        sparklePosition,
        3
      )
    );

    const movingSparkleMaterial =
      new THREE.PointsMaterial({
        color: themeColor(
          isDark,
          "nodes"
        ),
        map: sparkleTexture,
        size: isDark ? 0.54 : 0.42,
        transparent: true,
        opacity: 1,
        sizeAttenuation: true,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
        alphaTest: 0.01,
      });

    const movingSparkle =
      new THREE.Points(
        movingSparkleGeometry,
        movingSparkleMaterial
      );

    globe.add(movingSparkle);

    /* =====================================================
       SPARKLE GLOWS
    ===================================================== */

    const sparkleGlowMaterial =
      new THREE.PointsMaterial({
        color: themeColor(
          isDark,
          "nodes"
        ),
        size: isDark ? 0.34 : 0.24,
        transparent: true,
        opacity: isDark ? 0.48 : 0.32,
        sizeAttenuation: true,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
      });

    const sparkleGlow =
      new THREE.Points(
        movingSparkleGeometry,
        sparkleGlowMaterial
      );

    globe.add(sparkleGlow);

    const sparkleOuterGlowMaterial =
      new THREE.PointsMaterial({
        color: themeColor(
          isDark,
          "nodes"
        ),
        size: isDark ? 0.70 : 0.48,
        transparent: true,
        opacity: isDark ? 0.20 : 0.11,
        sizeAttenuation: true,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
      });

    const sparkleOuterGlow =
      new THREE.Points(
        movingSparkleGeometry,
        sparkleOuterGlowMaterial
      );

    globe.add(sparkleOuterGlow);

    /* =====================================================
       SURFACE PARTICLES
    ===================================================== */

    const positionAttribute =
      globeGeometry.attributes.position;

    const pointPositions = [];

    for (
      let i = 0;
      i < positionAttribute.count;
      i += 14
    ) {
      pointPositions.push(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );
    }

    const pointGeometry =
      new THREE.BufferGeometry();

    pointGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        pointPositions,
        3
      )
    );

    const pointMaterial =
      new THREE.PointsMaterial({
        color: themeColor(
          isDark,
          "particles"
        ),
        size: isDark ? 0.026 : 0.020,
        transparent: true,
        opacity: isDark ? 0.56 : 0.42,
        sizeAttenuation: true,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const surfacePoints =
      new THREE.Points(
        pointGeometry,
        pointMaterial
      );

    globe.add(surfacePoints);

    /* =====================================================
       OUTER TECH SHELL
    ===================================================== */

    const shellGeometry =
      new THREE.SphereGeometry(
        2.34,
        32,
        24
      );

    const shellMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(
          isDark,
          "shell"
        ),
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.07 : 0.30,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const shell = new THREE.Mesh(
      shellGeometry,
      shellMaterial
    );

    globe.add(shell);

    /* =====================================================
       OUTER RING
    ===================================================== */

    const ringGeometry =
      new THREE.RingGeometry(
        2.35,
        2.39,
        96
      );

    const ringMaterial =
      new THREE.MeshBasicMaterial({
        color: themeColor(
          isDark,
          "ring"
        ),
        transparent: true,
        opacity: isDark ? 0.16 : 0.08,
        side: THREE.DoubleSide,
        blending: isDark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending,
        depthWrite: false,
      });

    const ring = new THREE.Mesh(
      ringGeometry,
      ringMaterial
    );

    ring.rotation.x =
      Math.PI / 2;

    globe.add(ring);

    /* =====================================================
       THEME UPDATE
    ===================================================== */

    const applyTheme = (dark) => {
      isDark = dark;

      globeMaterial.color.set(
        themeColor(
          dark,
          "surface"
        )
      );

      atmosphereMaterial.color.set(
        themeColor(
          dark,
          "atmosphere"
        )
      );

      haloMaterial.color.set(
        themeColor(
          dark,
          "halo"
        )
      );

      wireframeMaterial.color.set(
        themeColor(
          dark,
          "outerWire"
        )
      );

      innerWireMaterial.color.set(
        themeColor(
          dark,
          "innerWire"
        )
      );

      equatorMaterial.color.set(
        themeColor(
          dark,
          "equator"
        )
      );

      nodeMaterial.color.set(
        themeColor(
          dark,
          "nodes"
        )
      );

      nodeGlowMaterial.color.set(
        themeColor(
          dark,
          "nodes"
        )
      );

      movingSparkleMaterial.color.set(
        themeColor(
          dark,
          "nodes"
        )
      );

      sparkleGlowMaterial.color.set(
        themeColor(
          dark,
          "nodes"
        )
      );

      sparkleOuterGlowMaterial.color.set(
        themeColor(
          dark,
          "nodes"
        )
      );

      pointMaterial.color.set(
        themeColor(
          dark,
          "particles"
        )
      );

      shellMaterial.color.set(
        themeColor(
          dark,
          "shell"
        )
      );

      ringMaterial.color.set(
        themeColor(
          dark,
          "ring"
        )
      );

      globeMaterial.opacity =
        dark ? 0.30 : 0.12;

      atmosphereMaterial.opacity =
        dark ? 0.105 : 0.045;

      innerGlowMaterial.opacity =
        dark ? 0.045 : 0.012;

      haloMaterial.opacity =
        dark ? 0.065 : 0.028;

      wireframeMaterial.opacity =
        dark ? 0.34 : 0.45;

      wireframeMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      innerWireMaterial.opacity =
        dark ? 0.13 : 0.58;

      innerWireMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      equatorMaterial.opacity =
        dark ? 0.24 : 0.42;

      equatorMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      nodeMaterial.size =
        dark ? 0.105 : 0.095;

      nodeMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      nodeGlowMaterial.size =
        dark ? 0.24 : 0.17;

      nodeGlowMaterial.opacity =
        dark ? 0.32 : 0.18;

      movingSparkleMaterial.size =
        dark ? 0.54 : 0.42;

      sparkleGlowMaterial.size =
        dark ? 0.34 : 0.24;

      sparkleOuterGlowMaterial.size =
        dark ? 0.70 : 0.48;

      sparkleOuterGlowMaterial.opacity =
        dark ? 0.20 : 0.11;

      pointMaterial.size =
        dark ? 0.026 : 0.020;

      pointMaterial.opacity =
        dark ? 0.56 : 0.42;

      pointMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      shellMaterial.opacity =
        dark ? 0.07 : 0.30;

      shellMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;

      ringMaterial.opacity =
        dark ? 0.16 : 0.08;

      ringMaterial.blending =
        dark
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;
    };

    applyTheme(isDark);

    const themeObserver =
      new MutationObserver(() => {
        const dark =
          document.documentElement.classList.contains(
            "dark"
          );

        if (dark !== isDark) {
          applyTheme(dark);
        }
      });

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      }
    );

    /* =====================================================
       RESIZE
    ===================================================== */

    const resize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      if (!width || !height) return;

      renderer.setSize(
        width,
        height,
        false
      );

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();
    };

    const resizeObserver =
      new ResizeObserver(resize);

    resizeObserver.observe(container);

    resize();

    /* =====================================================
       ANIMATION
    ===================================================== */

    let frameId = 0;

    const clock =
      new THREE.Clock();

    let sparkleTravelProgress = 1;
    let sparkleWait = 0;

    let sparkleTravelDuration =
      1.5 +
      Math.random() * 1.8;

    let sparkleWaitDuration =
      0.35 +
      Math.random() * 1.0;

    const sparkleStart =
      new THREE.Vector3();

    const sparkleTarget =
      new THREE.Vector3();

    const chooseNextSparkleNode =
      () => {
        let nextIndex =
          Math.floor(
            Math.random() *
              nodeVectors.length
          );

        while (
          nextIndex ===
            currentNodeIndex &&
          nodeVectors.length > 1
        ) {
          nextIndex =
            Math.floor(
              Math.random() *
                nodeVectors.length
            );
        }

        targetNodeIndex =
          nextIndex;

        sparkleStart.copy(
          nodeVectors[
            currentNodeIndex
          ]
        );

        sparkleTarget.copy(
          nodeVectors[
            targetNodeIndex
          ]
        );

        sparkleTravelProgress = 0;

        sparkleTravelDuration =
          1.35 +
          Math.random() * 1.65;

        sparkleWaitDuration =
          0.35 +
          Math.random() * 1.05;
      };

    const animate = () => {
      frameId =
        requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      globe.rotation.y += 0.0017;
      globe.rotation.x += 0.00015;

      /* SPARKLE */

      if (sparkleWait > 0) {
        sparkleWait -= 1 / 60;

        const current =
          nodeVectors[
            currentNodeIndex
          ];

        sparklePosition[0] =
          current.x;

        sparklePosition[1] =
          current.y;

        sparklePosition[2] =
          current.z;

        movingSparkleGeometry
          .attributes
          .position
          .needsUpdate = true;
      } else {
        if (
          sparkleTravelProgress >=
          1
        ) {
          currentNodeIndex =
            targetNodeIndex;

          sparkleWait =
            sparkleWaitDuration;

          chooseNextSparkleNode();
        }

        sparkleTravelProgress +=
          1 /
          60 /
          sparkleTravelDuration;

        const progress =
          Math.min(
            sparkleTravelProgress,
            1
          );

        const smoothProgress =
          progress *
          progress *
          (3 - 2 * progress);

        sparklePosition[0] =
          THREE.MathUtils.lerp(
            sparkleStart.x,
            sparkleTarget.x,
            smoothProgress
          );

        sparklePosition[1] =
          THREE.MathUtils.lerp(
            sparkleStart.y,
            sparkleTarget.y,
            smoothProgress
          );

        sparklePosition[2] =
          THREE.MathUtils.lerp(
            sparkleStart.z,
            sparkleTarget.z,
            smoothProgress
          );

        movingSparkleGeometry
          .attributes
          .position
          .needsUpdate = true;
      }

      /* SPARKLE PULSE */

      const sparklePulse =
        0.82 +
        Math.sin(elapsed * 5.5) *
          0.16;

      movingSparkleMaterial.opacity =
        Math.max(
          0.72,
          sparklePulse
        );

      sparkleGlowMaterial.opacity =
        (isDark
          ? 0.38
          : 0.26) +
        Math.sin(elapsed * 4.5) *
          (isDark
            ? 0.10
            : 0.06);

      sparkleOuterGlowMaterial.opacity =
        (isDark
          ? 0.16
          : 0.09) +
        Math.sin(elapsed * 4) *
          (isDark
            ? 0.045
            : 0.025);

      /* NODES */

      nodeMaterial.opacity =
        0.92 +
        Math.sin(elapsed * 2.2) *
          0.08;

      nodeGlowMaterial.opacity =
        (isDark
          ? 0.26
          : 0.15) +
        Math.sin(elapsed * 2.2) *
          (isDark
            ? 0.08
            : 0.04);

      /* ATMOSPHERE */

      atmosphereMaterial.opacity =
        (isDark
          ? 0.095
          : 0.042) +
        Math.sin(elapsed * 0.9) *
          (isDark
            ? 0.022
            : 0.008);

      haloMaterial.opacity =
        (isDark
          ? 0.055
          : 0.024) +
        Math.sin(elapsed * 0.7) *
          (isDark
            ? 0.015
            : 0.006);

      /* LATTICE */

      wireframeMaterial.opacity =
        (isDark
          ? 0.31
          : 0.42) +
        Math.sin(elapsed * 0.8) *
          (isDark
            ? 0.035
            : 0.025);

      innerWireMaterial.opacity =
        (isDark
          ? 0.115
          : 0.54) +
        Math.sin(elapsed * 1.1) *
          (isDark
            ? 0.025
            : 0.035);

      /* PARTICLES */

      pointMaterial.opacity =
        (isDark
          ? 0.50
          : 0.38) +
        Math.sin(elapsed * 1.2) *
          (isDark
            ? 0.10
            : 0.06);

      /* RING */

      ring.rotation.z += 0.0007;

      renderer.render(
        scene,
        camera
      );
    };

    chooseNextSparkleNode();
    animate();

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(
        frameId
      );

      resizeObserver.disconnect();
      themeObserver.disconnect();

      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();

      innerGlowGeometry.dispose();
      innerGlowMaterial.dispose();

      haloGeometry.dispose();
      haloMaterial.dispose();

      globeGeometry.dispose();
      globeMaterial.dispose();

      wireframeMaterial.dispose();

      innerWireGeometry.dispose();
      innerWireMaterial.dispose();

      equatorGeometry.dispose();
      equatorMaterial.dispose();

      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeGlowMaterial.dispose();

      sparkleTexture.dispose();

      movingSparkleGeometry.dispose();
      movingSparkleMaterial.dispose();

      sparkleGlowMaterial.dispose();
      sparkleOuterGlowMaterial.dispose();

      pointGeometry.dispose();
      pointMaterial.dispose();

      shellGeometry.dispose();
      shellMaterial.dispose();

      ringGeometry.dispose();
      ringMaterial.dispose();

      renderer.dispose();

      if (
        canvas.parentNode ===
        container
      ) {
        container.removeChild(
          canvas
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const sectionRef =
    useRef(null);

  const reducedMotion =
    useReducedMotion();

  const [activeSlide, setActiveSlide] =
    useState(0);

  const [displayedSlide, setDisplayedSlide] =
    useState(0);

  const [isFlipping, setIsFlipping] =
    useState(false);

  const [imagesReady, setImagesReady] =
    useState(false);

  /* =======================================================
     GLOBAL THEME TRANSITION LOCK
  ======================================================= */

  const themeTransitionTimerRef = useRef(null);
  const lastThemeRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // One global overlay is intentionally used instead of a section-only
    // overlay. Theme changes affect the whole document, and a section-only
    // veil can still reveal a browser paint/compositing mismatch underneath.
    const styleId = "bytherix-theme-transition-style";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        html.bytherix-theme-switching,
        html.bytherix-theme-switching * {
          transition: none !important;
          animation: none !important;
        }

        body.bytherix-theme-transitioning::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 2147483647;
          pointer-events: auto;
          background: var(--bytherix-theme-transition-color, #ffffff);
          opacity: 1;
        }

        body.bytherix-theme-transition-fade::before {
          opacity: 0;
          transition: opacity 180ms ease-out !important;
        }
      `;
      document.head.appendChild(style);
    }

    const finishTransition = () => {
      body.classList.remove(
        "bytherix-theme-transitioning"
      );
      root.classList.remove(
        "bytherix-theme-switching"
      );
      body.classList.remove(
        "bytherix-theme-transition-fade"
      );
      root.style.removeProperty(
        "--bytherix-theme-transition-color"
      );
    };

    const startTransition = () => {
      const dark = root.classList.contains("dark");

      // Ignore unrelated <html className="..."> mutations.
      if (lastThemeRef.current === dark) return;
      lastThemeRef.current = dark;

      if (themeTransitionTimerRef.current) {
        clearTimeout(themeTransitionTimerRef.current);
      }

      // Lock every transition/animation before the new theme is exposed.
      root.classList.add("bytherix-theme-switching");
      root.style.setProperty(
        "--bytherix-theme-transition-color",
        dark ? "#020817" : "#ffffff"
      );
      body.classList.remove(
        "bytherix-theme-transition-fade"
      );
      body.classList.add(
        "bytherix-theme-transitioning"
      );

      // Wait for at least one rendered frame with the complete new theme
      // underneath the opaque overlay. Two RAFs make this reliable even
      // when the theme toggle and React updates happen in the same tick.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.classList.add(
            "bytherix-theme-transition-fade"
          );

          themeTransitionTimerRef.current =
            window.setTimeout(() => {
              finishTransition();
            }, 190);
        });
      });
    };

    const observer = new MutationObserver((mutations) => {
      const themeChanged = mutations.some(
        (mutation) =>
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
      );

      if (themeChanged) {
        startTransition();
      }
    });

    lastThemeRef.current = root.classList.contains("dark");

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();

      if (themeTransitionTimerRef.current) {
        clearTimeout(themeTransitionTimerRef.current);
      }

      finishTransition();
    };
  }, []);

  /* =======================================================
     PRELOAD
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    const preloadImages =
      BUILDER_SLIDES.map(
        (slide) =>
          new Promise((resolve) => {
            const img =
              new Image();

            img.onload = () =>
              resolve();

            img.onerror = () =>
              resolve();

            img.src =
              slide.image;
          })
      );

    Promise.all(
      preloadImages
    ).then(() => {
      if (mounted) {
        setImagesReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const currentSlide =
    BUILDER_SLIDES[
      activeSlide
    ];

  /* =======================================================
     SCROLL
  ======================================================= */

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,
    offset: [
      "start 90%",
      "end 10%",
    ],
  });

  const browserY =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [18, 0, -18]
    );

  const browserScale =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.985, 1, 0.99]
    );

  const globeY =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [5, -10, -35]
    );

  const globeX =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [10, 0, -10]
    );

  const globeScale =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [0.98, 1, 1.02]
    );

  /* =======================================================
     IMAGE CLICK
  ======================================================= */

  const handleImageClick =
    () => {
      if (
        !imagesReady ||
        isFlipping
      )
        return;

      const nextSlide =
        (displayedSlide + 1) %
        BUILDER_SLIDES.length;

      setActiveSlide(
        nextSlide
      );

      setIsFlipping(true);
    };

  /* =======================================================
     FINISH FLIP
  ======================================================= */

  const finishFlip = () => {
    if (!isFlipping) return;

    const nextSlide =
      (displayedSlide + 1) %
      BUILDER_SLIDES.length;

    setDisplayedSlide(
      nextSlide
    );

    setActiveSlide(
      nextSlide
    );

    setIsFlipping(false);
  };

  const flipTarget =
    BUILDER_SLIDES[
      (displayedSlide + 1) %
        BUILDER_SLIDES.length
    ];

  /* =======================================================
     FEATURE COLOR
  ======================================================= */

  const getFeatureColor = (
    index
  ) => {
    if (index === 0)
      return AZURE_BLUE;

    if (index === 1)
      return "#d6332f";

    return FEATURE_GREEN;
  };

 return (
  <section
    ref={sectionRef}
    className="
      relative
      isolate
      overflow-hidden
      bg-white
      text-slate-900
      dark:bg-[#020817]
      dark:text-white
      py-6
      sm:py-8
      lg:py-10
    "
  >
      {/* ===================================================
          BACKGROUND
    =================================================== */}

<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  {/* Right Blur Glow */}
  <div
    className="
      absolute
      -right-20
      -top-20
      h-[450px]
      w-[450px]
      rounded-full
      bg-[#3157d5]/[0.1]
      blur-[120px]
      dark:bg-[#3157d5]/[0.1]
      sm:-right-32
      md:h-[600px]
      md:w-[600px]
    "
  />

  {/* Left Blur Glow */}
  <div
    className="
      absolute
      -bottom-20
      left-0
      h-[400px]
      w-[400px]
      rounded-full
      bg-[#fd3b30]/[0.05]
      blur-[120px]
      dark:bg-[#fd3b30]/[0.04]
      md:h-[500px]
      md:w-[500px]
    "
  />

  {/* Grid Pattern */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.025]
      [background-image:linear-gradient(rgba(0,174,239,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,.35)_1px,transparent_1px)]
      [background-size:70px_70px]
      dark:opacity-[0.018]
      dark:[background-image:linear-gradient(rgba(0,174,239,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,.5)_1px,transparent_1px)]
    "
  />
</div>

      {/* ===================================================
          GLOBE
      =================================================== */}

      <motion.div
        style={
          reducedMotion
            ? undefined
            : {
                x: globeX,
                y: globeY,
                scale: globeScale,
              }
        }
        className="
          pointer-events-none
          absolute
          z-0

          -right-[105px]
          top-[45px]
          h-[260px]
          w-[260px]

          opacity-[0.45]
          dark:opacity-[0.38]

          sm:-right-[105px]
          sm:top-[45px]
          sm:h-[340px]
          sm:w-[340px]

          sm:opacity-[0.50]
          sm:dark:opacity-[0.52]

          lg:-right-[75px]
          lg:top-[40px]
          lg:h-[410px]
          lg:w-[410px]

          lg:opacity-[0.55]
          lg:dark:opacity-90

          xl:-right-[95px]
          xl:top-[5px]
          xl:h-[460px]
          xl:w-[460px]

          xl:opacity-[0.55]
          xl:dark:opacity-90
        "
      >
        <GlobeCanvas />

        <div
          className="
            absolute
            inset-[12%]
            -z-10
            rounded-full

            bg-[radial-gradient(circle,rgba(37,99,235,.13)_0%,rgba(59,130,246,.07)_35%,rgba(203,213,225,.04)_55%,transparent_72%)]
            blur-[42px]

            dark:bg-[radial-gradient(circle,rgba(0,174,239,.34)_0%,rgba(49,87,213,.22)_32%,rgba(124,58,237,.18)_55%,transparent_75%)]
            dark:blur-[55px]

            dark:opacity-[0.65]
            lg:dark:opacity-100
          "
        />
      </motion.div>

      {/* ===================================================
          CONTENT
    =================================================== */}

<div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
  {/* =================================================
      TOP SECTION
  ================================================= */}

  <div
    className="
      grid
      items-center
      gap-6
      lg:grid-cols-[0.88fr_1.12fr]
      lg:gap-4
      xl:gap-6
    "
  >
    {/* =================================================
        LEFT
    ================================================= */}

    <div className="relative z-20">
      <motion.h2
        initial={
          reducedMotion
            ? false
            : {
                opacity: 0,
                y: 24,
              }
        }
        whileInView={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          max-w-[520px]
          text-[32px]
          font-bold
          leading-[1]
          tracking-[-0.04em]
          text-slate-900
          dark:text-white
          sm:text-[42px]
          md:text-[48px]
          lg:text-[46px]
          xl:text-[52px]
        "
      >
        We engineer{" "}
        <span className="text-[#3157d5] dark:text-[#3157d5]">
          the
        </span>
        <br />

        <span className="text-[#3157d5] dark:text-[#3157d5]">
          future
        </span>
        <br />

        <span className="text-slate-900 dark:text-white">
          one system at a time.
        </span>
      </motion.h2>

      <motion.p
        initial={
          reducedMotion
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        whileInView={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.08,
        }}
        className="
          mt-4
          max-w-[500px]
          text-[12px]
          leading-[1.7]
          text-slate-600
          dark:text-slate-300
          sm:text-[13px]
        "
      >
        Bytherix is Nepal&apos;s
        full-spectrum technology
        partner. We design and build
        web applications, AI solutions,
        IoT systems, robotics, mobile
        apps, and custom PCBs — all
        protected by enterprise-grade
        cybersecurity.
      </motion.p>

      {/* =================================================
          INFO CARD
      ================================================= */}

      <motion.div
        initial={
          reducedMotion
            ? false
            : {
                opacity: 0,
                y: 28,
              }
        }
        whileInView={
          reducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.65,
          delay: 0.16,
        }}
        className="
          group
          mt-6
          overflow-hidden
          rounded-[18px]
          border
          border-[#3157d5]/25
          bg-gradient-to-br
          from-[#3157d5]/[0.08]
          via-white/95
          to-[#fd3b30]/[0.06]
          p-3.5
          shadow-[0_25px_80px_rgba(0,174,239,.10)]
          backdrop-blur-xl
          dark:border-white/[0.13]
          dark:bg-gradient-to-br
          dark:from-[#071522]/95
          dark:via-[#07111f]/90
          dark:to-[#160b0b]/95
          dark:shadow-[0_25px_80px_rgba(0,0,0,.25)]
          transition-[background-color,border-color,box-shadow,color]
          duration-150
          ease-out
        "
      >
        <motion.div
          key={`info-${activeSlide}`}
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration:
              reducedMotion
                ? 0
                : 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="flex gap-4"
        >
          <div
            className="
              flex
              h-[62px]
              w-[62px]
              shrink-0
              items-center
              justify-center
              rounded-[11px]
              border
              border-[#3157d5]/30
              bg-gradient-to-br
              from-[#3157d5]/[0.20]
              via-[#3157d5]/[0.08]
              to-[#fd3b30]/[0.12]
              dark:border-[#3157d5]/30
              dark:from-[#3157d5]/[0.25]
              dark:via-[#3157d5]/[0.10]
              dark:to-[#fd3b30]/[0.15]
            "
          >
            <svg
              viewBox="0 0 64 64"
              className="
                h-9
                w-9
                text-[#3157d5]
              "
              fill="none"
            >
              <path
                d="M15 13h22c8 0 12 5 12 12v18c0 5-4 8-9 8H25c-6 0-10-4-10-10V13Z"
                fill="currentColor"
                opacity=".18"
              />

              <path
                d="M18 18 31 31 20 42"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M35 42h13"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="min-w-0">
            <div
              className="
                font-mono
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#3157d5]
              "
            >
              {currentSlide.label}
            </div>

            <h3
              className="
                mt-1
                text-[14px]
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {currentSlide.title}
            </h3>

            <p
              className="
                mt-1
                whitespace-pre-line
                text-[11px]
                leading-[1.6]
                text-slate-600
                dark:text-slate-300
              "
            >
              {currentSlide.body}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

          {/* =================================================
              IMAGE / FLIP
          ================================================= */}

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    y: browserY,
                    scale: browserScale,
                  }
            }
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={
              reducedMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative
              z-20
              flex
              w-full
              justify-center
              lg:-translate-y-5
            "
          >
            <div
              className="
                absolute
                -inset-4
                -z-10
                mx-auto
                w-[65%]
                rounded-[32px]
                bg-[#3157d5]/[0.10]
                blur-2xl
                dark:bg-[#3157d5]/[0.07]
              "
            />

            <div
              className="
                relative
                mx-auto
                aspect-[16/10]
                w-[92%]
                max-w-[760px]
              "
              style={{
                perspective: "1600px",
              }}
            >
              <motion.div
                key={displayedSlide}
                className="
                  relative
                  h-full
                  w-full
                  cursor-pointer
                  rounded-[22px]
                  border
                  border-[#3157d5]/25
                  bg-white
                  shadow-[0_35px_100px_rgba(0,174,239,.12)]
                  dark:border-white/[0.14]
                  dark:bg-[#07101d]
                  dark:shadow-[0_35px_100px_rgba(0,0,0,.55)]
                  transition-[background-color,border-color,box-shadow,color]
                  duration-150
                  ease-out
                "
                style={{
                  transformStyle:
                    "preserve-3d",
                }}
                animate={{
                  rotateY:
                    isFlipping
                      ? 180
                      : 0,
                }}
                transition={{
                  duration:
                    reducedMotion
                      ? 0
                      : 0.7,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                onAnimationComplete={
                  finishFlip
                }
                onClick={
                  handleImageClick
                }
              >
                {/* FRONT */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[22px]
                    bg-white
                    dark:bg-[#07101d]
                    transition-[background-color]
                    duration-150
                    ease-out
                  "
                  style={{
                    backfaceVisibility:
                      "hidden",
                    WebkitBackfaceVisibility:
                      "hidden",
                    transform:
                      "rotateY(0deg)",
                  }}
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#3157d5]/80
                      to-[#fd3b30]/70
                    "
                  />

                  <img
                    src={
                      BUILDER_SLIDES[
                        displayedSlide
                      ].image
                    }
                    alt={`Bytherix experience ${
                      displayedSlide + 1
                    }`}
                    draggable={false}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      select-none
                      object-contain
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#3157d5]/[0.08]
                      via-transparent
                      to-transparent
                      dark:from-black/25
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-3
                      right-3
                      z-30
                      rounded-full
                      border
                      border-[#3157d5]/25
                      bg-black/20
                      px-2.5
                      py-1
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-slate-700
                      backdrop-blur-md
                      dark:border-white/10
                      dark:bg-black/30
                      dark:text-white/60
                      sm:bottom-4
                      sm:right-4
                      sm:px-3
                      sm:py-1.5
                      sm:text-[9px]
                    "
                  >
                    Click to explore
                  </div>
                </div>

                {/* BACK */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[22px]
                    bg-white
                    dark:bg-[#07101d]
                    transition-[background-color]
                    duration-150
                    ease-out
                  "
                  style={{
                    backfaceVisibility:
                      "hidden",
                    WebkitBackfaceVisibility:
                      "hidden",
                    transform:
                      "rotateY(180deg)",
                  }}
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      z-30
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#3157d5]/80
                      to-[#fd3b30]/70
                    "
                  />

                  <img
                    src={
                      flipTarget.image
                    }
                    alt={`Bytherix experience ${
                      ((displayedSlide + 1) %
                        BUILDER_SLIDES.length) +
                      1
                    }`}
                    draggable={false}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      select-none
                      object-contain
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#fd3b30]/[0.07]
                      via-transparent
                      to-transparent
                      dark:from-black/25
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-3
                      right-3
                      z-30
                      rounded-full
                      border
                      border-[#fd3b30]/25
                      bg-black/20
                      px-2.5
                      py-1
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-slate-700
                      backdrop-blur-md
                      dark:border-white/10
                      dark:bg-black/30
                      dark:text-white/60
                      sm:bottom-4
                      sm:right-4
                      sm:px-3
                      sm:py-1.5
                      sm:text-[9px]
                    "
                  >
                    Click to explore
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FEATURES
        ================================================= */}

        <div
          className="
            relative
            mt-6
            overflow-hidden
            rounded-[18px]
            border
            border-slate-200/80
            bg-white/90
            shadow-[0_18px_55px_rgba(15,23,42,0.06)]
            backdrop-blur-xl
            sm:mt-8
            sm:rounded-[20px]
            lg:mt-7
            dark:border-white/[0.12]
            dark:bg-[#06101d]/75
            dark:shadow-[0_20px_70px_rgba(0,0,0,0.28)]
            transition-[background-color,border-color,box-shadow]
            duration-150
            ease-out
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-10
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#3157d5]/60
              to-transparent
              dark:via-[#3157d5]/40
            "
          />

          <motion.div
            key={`features-${activeSlide}`}
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration:
                reducedMotion
                  ? 0
                  : 0.55,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              grid
              lg:grid-cols-3
            "
          >
            {currentSlide.features.map(
              (feature, index) => {
                const featureColor =
                  getFeatureColor(
                    index
                  );

                return (
                  <motion.div
                    key={`${activeSlide}-${feature.num}`}
                    initial={
                      reducedMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 12,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration:
                        reducedMotion
                          ? 0
                          : 0.5,
                      delay:
                        reducedMotion
                          ? 0
                          : index * 0.08,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    className={`
                      group
                      relative
                      overflow-hidden
                      px-3
                      py-3
                      transition-colors
                      duration-300
                      sm:px-5
                      sm:py-4
                      lg:px-6
                      lg:py-5

                      ${
                        index !== 0
                          ? `
                            border-t
                            border-slate-200/80
                            lg:border-l
                            lg:border-t-0
                            dark:border-white/[0.12]
                          `
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        opacity-0
                        bg-gradient-to-br
                        from-[#3157d5]/[0.045]
                        via-transparent
                        to-[#fd3b30]/[0.035]
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        dark:from-[#3157d5]/[0.055]
                        dark:to-[#fd3b30]/[0.04]
                      "
                    />

                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* =================================================
                          FEATURE ICON CONTAINER

                          Light:
                          Same feature color with white mixed in.

                          Dark:
                          Same feature color with black mixed in.

                          No slate/gray background.
                      ================================================= */}

                      <motion.div
                        whileHover={
                          reducedMotion
                            ? undefined
                            : {
                                scale: 1.06,
                                rotate: 2,
                              }
                        }
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        style={{
                          "--feature-color":
                            featureColor,
                        }}
                        className="
                          relative
                          flex
                          h-[44px]
                          w-[44px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[10px]

                          border
                          shadow-[0_6px_18px_rgba(0,0,0,0.05)]

                          transition-all
                          duration-300

                          sm:h-[52px]
                          sm:w-[52px]
                          sm:rounded-[11px]

                          dark:shadow-none
                        "
                      >
                        {/* LIGHT / DARK FEATURE BACKGROUND */}

                        <div
                          className="
                            absolute
                            inset-0
                            rounded-[10px]
                            transition-all
                            duration-300

                            bg-[color-mix(in_srgb,var(--feature-color)_11%,white)]

                            border
                            border-[color-mix(in_srgb,var(--feature-color)_24%,white)]

                            dark:bg-[color-mix(in_srgb,var(--feature-color)_16%,#020817)]
                            dark:border-[color-mix(in_srgb,var(--feature-color)_32%,#020817)]

                            dark:shadow-[inset_0_0_18px_color-mix(in_srgb,var(--feature-color)_7%,transparent)]
                          "
                        />

                        {/* ICON GLOW */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-[10px]
                            opacity-0
                            blur-md
                            transition-opacity
                            duration-300
                            group-hover:opacity-100

                            bg-[color-mix(in_srgb,var(--feature-color)_14%,transparent)]

                            dark:bg-[color-mix(in_srgb,var(--feature-color)_18%,transparent)]
                          "
                        />

                        {/* ICON */}

                        <div className="relative z-10">
                          <FeatureIcon
                            type={
                              feature.icon
                            }
                            color={
                              featureColor
                            }
                          />
                        </div>
                      </motion.div>

                      {/* =================================================
                          FEATURE CONTENT
                      ================================================= */}

                      <div className="min-w-0 flex-1">
                        <motion.div
                          className={`
                            mb-0.5
                            font-mono
                            text-[11px]
                            font-medium
                            sm:text-[12px]
                            dark:opacity-90
                          `}
                          style={{
                            color:
                              featureColor,
                          }}
                        >
                          {feature.num}
                        </motion.div>

                        <h3
                          className="
                            text-[13px]
                            font-semibold
                            leading-snug
                            text-slate-900
                            transition-transform
                            duration-300
                            group-hover:translate-x-[1px]
                            sm:text-[14px]
                            dark:text-white
                          "
                        >
                          {feature.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            leading-[1.5]
                            text-slate-500
                            transition-colors
                            duration-300
                            group-hover:text-slate-600
                            sm:text-[11px]
                            sm:leading-[1.55]
                            dark:text-slate-400
                            dark:group-hover:text-slate-300
                          "
                        >
                          {feature.body}
                        </p>
                      </div>
                    </div>

                    {/* =================================================
                        FEATURE BOTTOM LINE
                    ================================================= */}

                    <div
                      className="
                        relative
                        mt-2
                        h-[2px]
                        w-[38px]
                        overflow-hidden
                        rounded-full
                        sm:mt-3
                        sm:w-[45px]
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-y-0
                          left-0
                          w-full
                          rounded-full
                          transition-all
                          duration-500
                          ease-out
                          group-hover:w-[70px]
                        "
                        style={{
                          background:
                            index === 0
                              ? `linear-gradient(to right, ${AZURE_BLUE}, ${SOFT_TEAL})`
                              : index === 1
                              ? "linear-gradient(to right, #fd3b30, #ff6b61)"
                              : `linear-gradient(to right, ${FEATURE_GREEN}, ${AZURE_BLUE})`,
                        }}
                      />
                    </div>

                    {/* =================================================
                        FEATURE GLOW
                    ================================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-8
                        -right-8
                        h-20
                        w-20
                        rounded-full
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          `${featureColor}1A`,
                      }}
                    />
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>

        {/* =================================================
            TAGLINE
        ================================================= */}

        <motion.div
          key={`tagline-${activeSlide}`}
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration:
              reducedMotion
                ? 0
                : 0.7,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            mt-3
            flex
            items-center
            justify-center
            gap-2
            text-center
            sm:mt-4
            sm:gap-3
          "
        >
          <span
            className="
              hidden
              h-px
              w-8
              bg-gradient-to-r
              from-transparent
              to-[#3157d5]/80
              sm:block
            "
          />

          <p
            className="
              text-[10px]
              tracking-wide
              text-slate-500
              sm:text-[13px]
              dark:text-slate-400
            "
          >
            {currentSlide.tagline}
          </p>

          <span
            className="
              hidden
              h-px
              w-8
              bg-gradient-to-l
              from-transparent
              to-[#fd3b30]/80
              sm:block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
 