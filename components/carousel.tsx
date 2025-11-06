'use client'
import { useState } from "react";

export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: "Collaborative Learning",
            img: "/teamwork.svg",
        },
        {
            id: 2,
            title: "Personalised Mastery Action Plan",
            img: "/mastery.svg",
        },
        {
            id: 3,
            title: "Dedicated Mentorship",
            img: "/gay.svg",
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="relative w-full max-w-4xl">
            {/* Slide container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="flex-shrink-0 w-full">
                            <div className="flex flex-col justify-center items-center h-full rounded-lg 
                            shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 text-white">
                                <img src={slide.img} className="w-32 h-32" alt={slide.title} />
                                <h1 className="text-3xl font-bold mt-4">{slide.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2
                w-12 h-12 flex items-center justify-center
                rounded-full
                bg-white/20 backdrop-blur-md border border-white/30
                text-white text-xl font-bold
                shadow-lg hover:bg-white/30 hover:border-white/50 transition cursor-pointer"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2
                w-12 h-12 flex items-center justify-center
                rounded-full
                bg-white/20 backdrop-blur-md border border-white/30
                text-white text-xl font-bold
                shadow-lg hover:bg-white/30 hover:border-white/50 transition cursor-pointer"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}