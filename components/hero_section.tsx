import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function HeroSection() {
    return (
        <>
            <section className="min-h-screen flex flex-col xl:flex-row items-center 
            justify-center w-full text-white px-8 xl:px-48 pt-24 sm:pt-28 md:pt-36">
                <div className="flex flex-col justify-center items-center text-center xl:w-1/2 xl:items-start xl:text-left">
                    {/* Vivota Education Header */}
                    <p className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight 
                    bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 text-transparent bg-clip-text drop-shadow-md mb-6 md:mb-8">
                        <span className="block md:inline xl:block 2xl:inline">VIVOTA{" "}</span>
                        <span className="block md:inline xl:block 2xl:inline">EDUCATION</span>
                    </p>

                    {/* LAYOUT FOR MOBILE & MD (hidden at XL) */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-10 md:gap-y-4 items-start md:py-4 xl:hidden">
                        {/* Top-left cell */}
                        <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide 
                        leading-snug text-center md:text-left whitespace-nowrap">
                            <span className="block md:py-1">Venture Today,</span>
                            <span className="block text-yellow-600">Victory Tomorrow</span>
                        </p>

                        {/* Top-right cell */}
                        <div className="flex flex-col items-center md:items-start gap-2 md:gap-1 text-center md:text-left mt-8 md:mt-2 font-medium">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                                <p className="text-sm md:text-base font-medium text-white whitespace-nowrap">
                                    505B Bishan St 11, #01-422
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                                <p className="text-sm md:text-base font-medium text-white transition-colors">
                                    8827 2531
                                </p>
                            </div>
                        </div>

                        {/* Bottom row: CTA button */}
                        <div className="col-span-1 md:col-span-2 flex justify-center pt-8 md:pt-4">
                            <Link href="/enrolment">
                                <button
                                    className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                    text-black rounded-full shadow-lg transition-all 
                                    hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                    active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                                    Join Us Today!
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* LAYOUT FOR XL (hidden below XL) */}
                    <div className="hidden xl:flex xl:flex-col xl:w-full xl:gap-6">
                        {/* Motto */}
                        <p className="text-3xl text-gray-300 font-medium tracking-wide leading-snug">
                            <span className="block">Venture Today,</span>
                            <span className="block text-yellow-600">Victory Tomorrow</span>
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col items-start gap-2 font-medium">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                                <p className="text-base font-medium text-white whitespace-nowrap">
                                    505B Bishan St 11, #01-422
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                                <p className="text-base font-medium text-white transition-colors">
                                    8827 2531
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link href="/enrolment">
                                <button
                                    className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                    text-black rounded-full shadow-lg transition-all 
                                    hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                    active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                                    Join Us Today!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <img
                    src="hero_trial.jpg"
                    alt="Hero"
                    className="w-11/12 md:w-8/12 lg:w-7/12 xl:w-1/2 
                    rounded-xl border-4 border-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.4)] mt-8 md:mt-4" />
            </section>
        </>
    );
}
