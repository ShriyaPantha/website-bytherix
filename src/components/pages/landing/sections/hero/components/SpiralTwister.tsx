import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const DESKTOP_STRANDS = 160;
const MOBILE_STRANDS = 85;

const POINTS_PER_STRAND = 110;
const PARTICLE_COUNT = 900;

type StrandData = {
    radius: number;
    phase: number;
    speed: number;
    depth: number;
    thickness: number;
    ellipse: number;
    turbulence: number;
};

const HeroTwister = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;

        if (!container || !canvas) return;

        const isMobile = window.innerWidth < 768;

        const strandCount = isMobile
            ? MOBILE_STRANDS
            : DESKTOP_STRANDS;

        // =====================================================
        // SCENE
        // =====================================================

        const scene = new THREE.Scene();

        // =====================================================
        // CAMERA
        // =====================================================

        const camera = new THREE.PerspectiveCamera(
            52,
            container.clientWidth / container.clientHeight,
            0.1,
            500
        );

        camera.position.set(0, 0, 20);

        // =====================================================
        // RENDERER
        // =====================================================

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 1.8)
        );

        // Transparent — background comes from HeroBackground
        renderer.setClearColor(0x000000, 0);

        // =====================================================
        // VORTEX GROUP
        // =====================================================

        const vortexGroup = new THREE.Group();

        scene.add(vortexGroup);

        // =====================================================
        // STRAND DATA
        // =====================================================

        const strandData: StrandData[] = [];

        // =====================================================
        // COLORS
        // =====================================================

        const cyan = new THREE.Color("#38bdf8");
        const teal = new THREE.Color("#17b6a7");
        const navy = new THREE.Color("#2f4ebc");

        // =====================================================
        // CREATE VORTEX STRANDS
        // =====================================================

        for (
            let strandIndex = 0;
            strandIndex < strandCount;
            strandIndex++
        ) {
            const positions = new Float32Array(
                POINTS_PER_STRAND * 3
            );

            const colors = new Float32Array(
                POINTS_PER_STRAND * 3
            );

            const radius =
                2.2 +
                Math.pow(
                    strandIndex / strandCount,
                    0.78
                ) *
                17;

            const phase =
                Math.random() *
                Math.PI *
                2;

            const speed =
                0.15 +
                Math.random() *
                0.32;

            const depth =
                -10 +
                Math.random() *
                20;

            const ellipse =
                0.58 +
                Math.random() *
                0.2;

            const turbulence =
                0.15 +
                Math.random() *
                0.35;

            const thickness =
                0.5 +
                Math.random() *
                1.1;

            strandData.push({
                radius,
                phase,
                speed,
                depth,
                thickness,
                ellipse,
                turbulence,
            });

            // ---------------------------------------------------
            // Initial strand geometry
            // ---------------------------------------------------

            for (
                let point = 0;
                point < POINTS_PER_STRAND;
                point++
            ) {
                const p =
                    point /
                    (POINTS_PER_STRAND - 1);

                const angle =
                    p *
                    Math.PI *
                    2 *
                    2.3;

                const currentRadius =
                    radius *
                    (0.28 + p * 0.72);

                const x =
                    Math.cos(
                        angle + phase
                    ) *
                    currentRadius;

                const y =
                    Math.sin(
                        angle + phase
                    ) *
                    currentRadius *
                    ellipse;

                const z =
                    depth +
                    (p - 0.5) *
                    28;

                const index = point * 3;

                positions[index] = x;
                positions[index + 1] = y;
                positions[index + 2] = z;

                // Original color distribution
                const color =
                    point % 7 === 0
                        ? cyan
                        : point % 5 === 0
                            ? teal
                            : navy;

                colors[index] = color.r;
                colors[index + 1] = color.g;
                colors[index + 2] = color.b;
            }

            const geometry =
                new THREE.BufferGeometry();

            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(
                    positions,
                    3
                )
            );

            geometry.setAttribute(
                "color",
                new THREE.BufferAttribute(
                    colors,
                    3
                )
            );

            const material =
                new THREE.LineBasicMaterial({
                    vertexColors: true,

                    transparent: true,

                    opacity:
                        0.12 +
                        Math.random() * 0.2,

                    blending:
                        THREE.AdditiveBlending,

                    depthWrite: false,
                });

            const line =
                new THREE.Line(
                    geometry,
                    material
                );

            line.userData = {
                strandIndex,
            };

            vortexGroup.add(line);
        }

        // =====================================================
        // PARTICLE FIELD
        // =====================================================

        const particlePositions =
            new Float32Array(
                PARTICLE_COUNT * 3
            );

        const particleColors =
            new Float32Array(
                PARTICLE_COUNT * 3
            );

        for (
            let i = 0;
            i < PARTICLE_COUNT;
            i++
        ) {
            const index = i * 3;

            const angle =
                Math.random() *
                Math.PI *
                2;

            const radius =
                4 +
                Math.random() *
                24;

            particlePositions[index] =
                Math.cos(angle) *
                radius;

            particlePositions[index + 1] =
                Math.sin(angle) *
                radius *
                0.55;

            particlePositions[index + 2] =
                -18 +
                Math.random() *
                36;

            const color =
                Math.random() > 0.55
                    ? cyan
                    : teal;

            particleColors[index] =
                color.r;

            particleColors[index + 1] =
                color.g;

            particleColors[index + 2] =
                color.b;
        }

        const particleGeometry =
            new THREE.BufferGeometry();

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(
                particlePositions,
                3
            )
        );

        particleGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(
                particleColors,
                3
            )
        );

        const particleMaterial =
            new THREE.PointsMaterial({
                size: isMobile
                    ? 0.06
                    : 0.09,

                vertexColors: true,

                transparent: true,

                opacity: 0.55,

                blending:
                    THREE.AdditiveBlending,

                depthWrite: false,
            });

        const particles =
            new THREE.Points(
                particleGeometry,
                particleMaterial
            );

        vortexGroup.add(
            particles
        );

        // =====================================================
        // CENTRAL GLOW
        // =====================================================

        const glowGeometry =
            new THREE.CircleGeometry(
                2.4,
                64
            );

        const glowMaterial =
            new THREE.MeshBasicMaterial({
                color: 0x38bdf8,

                transparent: true,

                opacity: 0.025,

                blending:
                    THREE.AdditiveBlending,

                depthWrite: false,
            });

        const centralGlow =
            new THREE.Mesh(
                glowGeometry,
                glowMaterial
            );

        centralGlow.position.z =
            -14;

        vortexGroup.add(
            centralGlow
        );

        // =====================================================
        // MOUSE PARALLAX
        // =====================================================

        const mouse = {
            x: 0,
            y: 0,
        };

        const targetMouse = {
            x: 0,
            y: 0,
        };

        const handleMouseMove = (
            event: MouseEvent
        ) => {
            const rect =
                container.getBoundingClientRect();

            targetMouse.x =
                (
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width
                ) -
                0.5;

            targetMouse.y =
                (
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height
                ) -
                0.5;
        };

        container.addEventListener(
            "mousemove",
            handleMouseMove
        );

        // =====================================================
        // GSAP INTRO
        // =====================================================

        const intro =
            gsap.timeline();

        intro
            .fromTo(
                vortexGroup.scale,
                {
                    x: 0.72,
                    y: 0.72,
                    z: 0.72,
                },
                {
                    x: 1,
                    y: 1,
                    z: 1,

                    duration: 2.2,

                    ease: "power3.out",
                }
            )
            .fromTo(
                vortexGroup.rotation,
                {
                    z: -0.15,
                },
                {
                    z: 0,

                    duration: 1.8,

                    ease: "power3.out",
                },
                "<"
            );

        // =====================================================
        // GSAP CONTINUOUS ROTATION
        // =====================================================

        const rotationTween =
            gsap.to(
                vortexGroup.rotation,
                {
                    z:
                        Math.PI * 2,

                    duration: 65,

                    repeat: -1,

                    ease: "none",
                }
            );

        // =====================================================
        // GSAP CENTRAL GLOW
        // =====================================================

        const glowTween =
            gsap.to(
                centralGlow.scale,
                {
                    x: 1.35,
                    y: 1.35,
                    z: 1.35,

                    duration: 2.8,

                    repeat: -1,

                    yoyo: true,

                    ease: "sine.inOut",
                }
            );

        // =====================================================
        // CLOCK
        // =====================================================

        const clock =
            new THREE.Clock();

        let animationFrame = 0;

        // =====================================================
        // ANIMATION
        // =====================================================

        const animate = () => {
            animationFrame =
                requestAnimationFrame(
                    animate
                );

            const elapsed =
                clock.getElapsedTime();

            // ---------------------------------------------------
            // Smooth mouse
            // ---------------------------------------------------

            mouse.x +=
                (
                    targetMouse.x -
                    mouse.x
                ) *
                0.035;

            mouse.y +=
                (
                    targetMouse.y -
                    mouse.y
                ) *
                0.035;

            // ---------------------------------------------------
            // Camera parallax
            // ---------------------------------------------------

            camera.position.x =
                mouse.x * 2.2;

            camera.position.y =
                -mouse.y * 1.4;

            camera.lookAt(
                0,
                0,
                -10
            );

            // ---------------------------------------------------
            // Animate vortex strands
            // ---------------------------------------------------

            vortexGroup.children.forEach(
                (child) => {
                    if (
                        !(child instanceof THREE.Line)
                    ) {
                        return;
                    }

                    const strandIndex =
                        child.userData
                            .strandIndex;

                    if (
                        strandIndex === undefined
                    ) {
                        return;
                    }

                    const data =
                        strandData[
                        strandIndex
                        ];

                    const geometry =
                        child.geometry;

                    const position =
                        geometry.getAttribute(
                            "position"
                        ) as THREE.BufferAttribute;

                    for (
                        let point = 0;
                        point < POINTS_PER_STRAND;
                        point++
                    ) {
                        const p =
                            point /
                            (
                                POINTS_PER_STRAND -
                                1
                            );

                        // ------------------------------------------------
                        // FLOWING ANGLE
                        // ------------------------------------------------

                        const angle =
                            p *
                            Math.PI *
                            2 *
                            2.3 +
                            data.phase +
                            elapsed *
                            data.speed;

                        // ------------------------------------------------
                        // TORNADO COMPRESSION
                        // ------------------------------------------------

                        const compression =
                            Math.pow(
                                p,
                                0.72
                            );

                        const currentRadius =
                            data.radius *
                            (
                                0.25 +
                                compression *
                                0.75
                            );

                        // ------------------------------------------------
                        // ORGANIC TURBULENCE
                        // ------------------------------------------------

                        const wave =
                            Math.sin(
                                p *
                                Math.PI *
                                8 +
                                elapsed *
                                0.7 +
                                data.phase
                            ) *
                            data.turbulence;

                        const wave2 =
                            Math.cos(
                                p *
                                Math.PI *
                                5 -
                                elapsed *
                                0.45 +
                                data.phase
                            ) *
                            data.turbulence *
                            0.5;

                        // ------------------------------------------------
                        // POSITION
                        // ------------------------------------------------

                        const x =
                            Math.cos(angle) *
                            (
                                currentRadius +
                                wave
                            );

                        const y =
                            Math.sin(angle) *
                            (
                                currentRadius *
                                data.ellipse
                            ) +
                            wave2;

                        const z =
                            data.depth +
                            (
                                p - 0.5
                            ) *
                            28 +
                            Math.sin(
                                angle * 0.45 +
                                elapsed * 0.25
                            ) *
                            1.5;

                        const index =
                            point * 3;

                        position.array[
                            index
                        ] = x;

                        position.array[
                            index + 1
                        ] = y;

                        position.array[
                            index + 2
                        ] = z;
                    }

                    position.needsUpdate =
                        true;
                }
            );

            // ---------------------------------------------------
            // PARTICLE FIELD
            // ---------------------------------------------------

            const particlePosition =
                particleGeometry.getAttribute(
                    "position"
                ) as THREE.BufferAttribute;

            for (
                let i = 0;
                i < PARTICLE_COUNT;
                i++
            ) {
                const index = i * 3;

                let x =
                    particlePosition.array[
                    index
                    ];

                let y =
                    particlePosition.array[
                    index + 1
                    ];

                let z =
                    particlePosition.array[
                    index + 2
                    ];

                const angle =
                    Math.atan2(y, x) +
                    0.0007;

                const radius =
                    Math.sqrt(
                        x * x +
                        y * y
                    );

                x =
                    Math.cos(angle) *
                    radius;

                y =
                    Math.sin(angle) *
                    radius;

                z += 0.015;

                if (z > 18) {
                    z = -18;
                }

                particlePosition.array[
                    index
                ] = x;

                particlePosition.array[
                    index + 1
                ] = y;

                particlePosition.array[
                    index + 2
                ] = z;
            }

            particlePosition.needsUpdate =
                true;

            renderer.render(
                scene,
                camera
            );
        };

        animate();

        // =====================================================
        // RESIZE
        // =====================================================

        const handleResize = () => {
            const width =
                container.clientWidth;

            const height =
                container.clientHeight;

            camera.aspect =
                width / height;

            camera.updateProjectionMatrix();

            renderer.setSize(
                width,
                height
            );

            renderer.setPixelRatio(
                Math.min(
                    window.devicePixelRatio,
                    1.8
                )
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        // =====================================================
        // CLEANUP
        // =====================================================

        return () => {
            cancelAnimationFrame(
                animationFrame
            );

            window.removeEventListener(
                "resize",
                handleResize
            );

            container.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            intro.kill();

            rotationTween.kill();

            glowTween.kill();

            vortexGroup.children.forEach(
                (child) => {
                    if (
                        child instanceof THREE.Line
                    ) {
                        child.geometry.dispose();

                        (
                            child.material as THREE.Material
                        ).dispose();
                    }
                }
            );

            particleGeometry.dispose();
            particleMaterial.dispose();

            glowGeometry.dispose();
            glowMaterial.dispose();

            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="
        absolute
        inset-0
        z-[1]
        pointer-events-none
        overflow-hidden
      "
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="
          absolute
          inset-0
          h-full
          w-full
        "
            />
        </div>
    );
};

export default HeroTwister;