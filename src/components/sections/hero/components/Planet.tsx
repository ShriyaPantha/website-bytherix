import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

interface PlanetProps {
    className?: string;
    size: string;
    color: string;
    opacity?: string;

    floatY?: number;
    floatX?: number;
    duration?: number;
    delay?: number;

    zIndex?: number;
}

const Planet = ({
    className = "",
    size,
    color,
    opacity = "opacity-100",
    floatY = 24,
    floatX = 14,
    duration = 4.5,
    delay = 0,
    zIndex = 50,
}: PlanetProps) => {
    const planetRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const planet = planetRef.current;
        if (!planet) return;

        const ctx = gsap.context(() => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            gsap.set(planet, {
                x: 0,
                y: 0,
                scale: 1,
                transformOrigin: "center center",
                force3D: true,
            });

            if (reduceMotion) return;

            gsap.to(planet, {
                x: floatX,
                y: floatY,
                scale: 1.05,
                duration,
                delay,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                force3D: true,
            });
        }, planet);

        return () => ctx.revert();
    }, [floatX, floatY, duration, delay]);

    return (
        <div
            className={`
                absolute
                pointer-events-none
                overflow-visible
                ${className}
            `}
            style={{ zIndex }}
        >
            <div
                ref={planetRef}
                className={`
                    relative
                    overflow-hidden
                    rounded-full
                    will-change-transform
                    ${opacity}
                `}
                style={{
                    width: size,
                    height: size,

                    background: `
                        radial-gradient(
                            circle at 32% 28%,
                            rgba(255,255,255,0.12) 0%,
                            rgba(255,255,255,0.035) 22%,
                            transparent 46%
                        ),
                        radial-gradient(
                            circle at 36% 34%,
                            ${color} 0%,
                            ${color} 58%,
                            rgba(0,0,0,0.10) 82%,
                            rgba(0,0,0,0.22) 100%
                        )
                    `,

                    boxShadow: `
                        inset -8px -10px 22px rgba(0,0,0,0.18),
                        inset 4px 4px 10px rgba(255,255,255,0.06),
                        0 10px 22px rgba(0,0,0,0.16)
                    `,
                }}
            >
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `
                            radial-gradient(
                                ellipse 75% 70% at 28% 24%,
                                rgba(255,255,255,0.14) 0%,
                                rgba(255,255,255,0.045) 28%,
                                transparent 58%
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `
                            radial-gradient(
                                ellipse 90% 95% at 82% 68%,
                                rgba(0,0,0,0.24) 0%,
                                rgba(0,0,0,0.12) 42%,
                                rgba(0,0,0,0.045) 64%,
                                transparent 82%
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `
                            radial-gradient(
                                ellipse 65% 70% at 78% 45%,
                                rgba(255,255,255,0.025) 0%,
                                transparent 70%
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `
                            radial-gradient(
                                circle,
                                transparent 78%,
                                rgba(255,255,255,0.018) 92%,
                                rgba(255,255,255,0.04) 100%
                            )
                        `,
                    }}
                />
            </div>
        </div>
    );
};

export default Planet;
