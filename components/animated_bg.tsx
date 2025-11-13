'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type ParticleProps = {
    size: number;
    startX: number;
    delay: number;
    height: number;
    color: string;
    rotate: number;
    drift: number;
};

const Particle = ({ size, startX, delay, height, color, rotate, drift }: ParticleProps) => (
    <motion.div
        style={{
            position: "absolute",
            bottom: 0,
            left: startX,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: 0.5 + Math.random() * 0.5,
            pointerEvents: "none",
            filter: "blur(2px)",
        }}
        animate={{
            y: -height,
            x: [startX, startX + drift, startX],
            rotate: [0, rotate],
            opacity: [0, 0.8, 0],
        }}
        transition={{
            duration: 5 + Math.random() * 3,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        }}
    />
);

export default function EmberBackground() {
    const [particles, setParticles] = useState<React.ReactNode[]>([]);
    const heightRef = useRef(typeof window !== "undefined" ? window.innerHeight : 0);

    useEffect(() => {
        // Update height on resize without recreating particles
        const handleResize = () => {
            heightRef.current = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const colors = ["#fac043ff", "#9ac2ffff"];
        const numParticles = 25;

        // Mix colors evenly
        const colorList = [
            ...Array(Math.floor(numParticles / 2)).fill(colors[0]),
            ...Array(Math.ceil(numParticles / 2)).fill(colors[1]),
        ];

        // Shuffle colors
        for (let i = colorList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colorList[i], colorList[j]] = [colorList[j], colorList[i]];
        }

        // Generate particles ONCE
        const initialParticles = colorList.map((color, i) => {
            const size = 10 + Math.random() * 5;
            const startX = Math.random() * window.innerWidth;
            const delay = Math.random() * 5;
            const rotate = Math.random() * 360;
            const drift = Math.random() * 50 - 25;

            return (
                <Particle
                    key={i}
                    size={size}
                    startX={startX}
                    delay={delay}
                    height={heightRef.current}
                    color={color}
                    rotate={rotate}
                    drift={drift}
                />
            );
        });

        setParticles(initialParticles);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#000000ff",
                overflow: "hidden",
                zIndex: -1,
            }}
        >
            {particles}
        </div>
    );
}
