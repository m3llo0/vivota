import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function HeroSection() {
    return (
        <>
            <section className="min-h-screen flex flex-col xl:flex-row items-center justify-center w-full text-white px-8 xl:px-48 pt-24 sm:pt-28 md:pt-36">
                {/* Text container */}
                <div className="flex flex-col justify-center items-center text-center xl:items-start xl:text-left xl:w-1/2 space-y-6">

                    {/* Header */}
                    <p className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight 
                    bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 text-transparent bg-clip-text drop-shadow-md">
                        VIVOTA EDUCATION
                    </p>

                    {/* Motto */}
                    <p className="text-lg sm:text-xl xl:text-2xl text-gray-300 font-medium tracking-wide leading-snug">
                        <span className="block">Founded and Taught by</span>
                        <span className="block text-yellow-600">Singapore Medical Students</span>
                    </p>

                    {/* Location */}
                    <p className="text-base sm:text-lg xl:text-xl font-medium text-white">
                        <span className="block">JC Education Centre</span>
                        <span className="block">3 minutes away from Bishan MRT</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 pt-2 md:mb-4">
                        <Link href="/contact-us">
                            <button
                                className=" px-6 md:px-8 py-3 xl:px-10 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                text-black rounded-full shadow-lg transition-all 
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                                Contact Us
                            </button>
                        </Link>
                        <Link href="/class-schedule">
                            <button
                                className="px-6 md:px-8 py-3 xl:px-10 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                text-black rounded-full shadow-lg transition-all 
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                                Class Schedule
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Image (optional on XL, stacked below text on mobile) */}
                <img
                    src="hero_trial.jpg"
                    alt="Hero"
                    className="w-11/12 md:w-8/12 lg:w-7/12 xl:w-1/2 
                    rounded-xl border-4 border-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.4)] mt-8 md:mt-4 xl:mt-0 xl:ml-12"
                />
            </section>
        </>
    );
}
