'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

type Testimonial = {
    student: string;
    school: string;
    tutor: string;
    subjects: string[];
    testimonial: string;
    grade: string;
};


export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadTestimonials = async () => {
            try {
                const response = await fetch('/data/testimonials.json');
                if (!response.ok) {
                    throw new Error('Failed to load testimonials');
                }
                const data = await response.json();
                setTestimonials(Array.isArray(data) ? data : []);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err));
                }
            }
        };

        loadTestimonials();
    }, []);

    const itemsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 3
    };

    // Determine current items per view based on window width
    const getCurrentItemsPerView = () => {
        if (windowWidth >= 1024) return itemsPerView.desktop; // lg breakpoint
        if (windowWidth >= 768) return itemsPerView.tablet; // md breakpoint
        return itemsPerView.mobile;
    };

    const currentItemsPerView = getCurrentItemsPerView();
    const maxIndex = Math.max(0, testimonials.length - currentItemsPerView);
    const totalPages = Math.ceil(testimonials.length / currentItemsPerView);

    const goToPrevious = () => {
        setCurrentIndex(prev => {
            const newIndex = prev - currentItemsPerView;
            if (newIndex < 0) return maxIndex;     // wrap to last page
            return newIndex;
        });
    };

    const goToNext = () => {
        setCurrentIndex(prev => {
            const newIndex = prev + currentItemsPerView;
            if (newIndex > maxIndex) return 0;     // wrap to first page
            return newIndex;
        });
    };

    if (error) {
        return (
            <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Space</h1>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4 sm:my-6">Student Testimonials</h2>
                    <p className="text-base md:text-lg 2xl:text-xl">Hear what our students have to say</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / currentItemsPerView)}%)`
                            }}                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                                >
                                    <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex flex-col hover:shadow-2xl transition-shadow">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-yellow-100 rounded-full p-3">
                                                    <GraduationCap className="w-6 h-6 text-yellow-500" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-gray-800">{item.student}</h3>
                                                    <p className="text-sm text-gray-500">{item.school}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subjects */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.subjects.map((subject, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs font-medium"
                                                >
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <div className="flex-grow">
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                "{item.testimonial}"
                                            </p>
                                        </div>

                                        {/* Tutor */}
                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">
                                                Tutor: <span className="font-semibold text-yellow-600">{item.tutor}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => setCurrentIndex(pageIndex * currentItemsPerView)}
                                className={`w-2 h-2 rounded-full transition-all ${pageIndex === Math.floor(currentIndex / currentItemsPerView)
                                        ? 'bg-yellow-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};