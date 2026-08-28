"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const group = new THREE.Group();

    scene.add(group);

    const wireGeo = new THREE.IcosahedronGeometry(2.1, 3);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });

    const wireGlobe = new THREE.Mesh(wireGeo, wireMat);

    group.add(wireGlobe);

    const positionAttribute = wireGeo.attributes.position;

    const nodeGeo = new THREE.SphereGeometry(0.028, 8, 8);

    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xf87171,
      transparent: true,
      opacity: 0.9,
    });

    for (let i = 0; i < positionAttribute.count; i += 8) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);

      node.position.set(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );

      group.add(node);
    }

    const shellGeo = new THREE.SphereGeometry(2.55, 32, 32);

    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    const shell = new THREE.Mesh(shellGeo, shellMat);

    group.add(shell);

    const updateGlobeSize = (): void => {
      const width = window.innerWidth;

      if (width < 640) {
        group.scale.setScalar(0.58);
      } else if (width < 1024) {
        group.scale.setScalar(0.72);
      } else if (width < 1280) {
        group.scale.setScalar(0.85);
      } else {
        group.scale.setScalar(1.12);
      }
    };

    const resize = (): void => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (width === 0 || height === 0) {
        return;
      }

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      updateGlobeSize();
    };

    resize();

    window.addEventListener("resize", resize);

    let frameId: number = 0;

    const animate = (): void => {
      frameId = requestAnimationFrame(animate);

      group.rotation.y += 0.0025;
      group.rotation.x += 0.0007;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener("resize", resize);

      renderer.dispose();

      wireGeo.dispose();
      wireMat.dispose();

      nodeGeo.dispose();
      nodeMat.dispose();

      shellGeo.dispose();
      shellMat.dispose();

      scene.remove(group);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-visible">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}