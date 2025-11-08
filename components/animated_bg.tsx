'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type ParticleProps = {
    size: number;
    startX: number;
    delay: number;
    height: number;
    color: string;
};

const Particle = ({ size, startX, delay, height, color }: ParticleProps) => (
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
            filter: "blur(2px)", // subtle glow
        }}
        animate={{
            y: -height, // move upwards
            x: [startX, startX + Math.random() * 50 - 25, startX], // slight horizontal drift
            rotate: [0, Math.random() * 360],
            opacity: [0, 0.8, 0], // fade in and out
        }}
        transition={{
            duration: 5 + Math.random() * 3, // vary speed
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        }}
    />
);

export default function EmberBackground() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Only access window after mount
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () =>
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Don't render particles until we know window size
    if (!windowSize.width) return null;
    const colors = ["#fac043ff", "#e7e7e7ff"];
    const numParticles = 25;

    const colorList = [
        ...Array(Math.floor(numParticles / 2)).fill(colors[0]),
        ...Array(Math.ceil(numParticles / 2)).fill(colors[1]),
    ];

    for (let i = colorList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colorList[i], colorList[j]] = [colorList[j], colorList[i]];
    }

    const particles = colorList.map((color, i) => (
        <Particle
            key={i}
            size={10 + Math.random() * 5}
            startX={Math.random() * window.innerWidth}
            delay={Math.random() * 5}
            height={windowSize.height}
            color={color}
        />
    ));

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

