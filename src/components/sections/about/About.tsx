"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

const FEATURES = [
  {
    num: "01",
    title: "Full-Spectrum Engineering",
    body: "Web & mobile apps, AI systems, IoT, robotics, and custom PCB design — complete products, not just code.",
  },
  {
    num: "02",
    title: "Security by Design",
    body: "Enterprise-grade cybersecurity baked into every layer: architecture, code, infrastructure, and deployment.",
  },
  {
    num: "03",
    title: "Built in Nepal. Ready for the World.",
    body: "Local understanding meets global engineering standards. Fast, reliable, and built to scale.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const isMobileRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    isMobile ? [0.65, 0.75, 0.6, 0.45] : [0.55, 0.7, 0.4, 0.22]
  );
  
  const xPos = useTransform(scrollYProgress, [0, 0.4, 1], [0.6, 1.8, 3.6]);
  const yPos = useTransform(scrollYProgress, [0, 0.5, 1], [0, -0.4, -0.9]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      isMobileRef.current = mq.matches;
      setIsMobile(mq.matches);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    const wireGeo = new THREE.IcosahedronGeometry(2.1, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    group.add(new THREE.Mesh(wireGeo, wireMat));

    const posAttr = wireGeo.attributes.position;
    const nodeGeo = new THREE.SphereGeometry(0.028, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xf87171,
      transparent: true,
      opacity: 0.9,
    });
    for (let i = 0; i < posAttr.count; i += 8) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      group.add(node);
    }

    const shellGeo = new THREE.SphereGeometry(2.6, 32, 32);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    group.add(new THREE.Mesh(shellGeo, shellMat));

    const sizeCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    sizeCanvas();
    const timer = setTimeout(sizeCanvas, 50);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.0025;
      group.rotation.x += 0.0007;
      renderer.render(scene, camera);
    };
    animate();

    const unsubScale = scale.on("change", (v) => {
      if (!groupRef.current) return;
      groupRef.current.scale.setScalar(v);
    });
    const unsubX = xPos.on("change", (v) => {
      if (!groupRef.current) return;
      groupRef.current.position.x = isMobileRef.current ? 0 : v;
    });
    const unsubY = yPos.on("change", (v) => {
      if (!groupRef.current) return;
      groupRef.current.position.y = isMobileRef.current ? 0 : v;
    });

    window.addEventListener("resize", sizeCanvas);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameId);
      unsubScale();
      unsubX();
      unsubY();
      window.removeEventListener("resize", sizeCanvas);
      renderer.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
    };
  }, [scale, xPos, yPos]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg-primary)] py-16 sm:py-24 lg:py-36"
    >
      {/* 
        Dedicated mobile globe container at the top of the section 
        so it's clearly visible and centered before content.
      */}
      <div className="relative w-full h-[280px] sm:h-[340px] lg:hidden mb-6 pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none" />
      </div>

      {/* Desktop absolute background globe */}
      <div className="hidden lg:block absolute inset-0 h-full w-full pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-80"
        />
      </div>

      {/* Text gradient mask for desktop layout */}
      <div
        className="
          hidden lg:block pointer-events-none absolute z-[1]
          left-0 top-0 h-full w-[46%]
          bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/55 to-transparent
        "
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="mb-5 flex items-center justify-center lg:justify-start gap-3">
            <span className="h-px w-6 bg-blue-500 hidden sm:inline-block" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">
              About Bytherix
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            We engineer{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              the future
            </span>
            <br className="hidden sm:inline" /> one system at a time.
          </h2>

          <p className="mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
            Bytherix is Nepal&apos;s full-spectrum technology partner. We design and
            build web applications, AI solutions, IoT systems, robotics, mobile
            apps, and custom PCBs — all protected by enterprise-grade
            cybersecurity.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm text-left"
            >
              <div className="mb-3 font-mono text-sm text-red-400">{f.num}</div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 sm:mt-12 max-w-lg text-xs sm:text-sm text-[var(--text-muted)] text-center lg:text-left mx-auto lg:mx-0">
          From architecture to deployment — we build systems that last.
        </p>
      </div>
    </section>
  );
}