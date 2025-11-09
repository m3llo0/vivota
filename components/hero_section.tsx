import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <section className="min-h-screen flex flex-col xl:flex-row items-center 
            justify-center w-full text-white px-8 xl:px-48 mt-8 sm:mt-12 md:mt-16">
                <div className="xl:w-1/2 flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
                    <p className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight 
                    bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 text-transparent bg-clip-text drop-shadow-md">
                        <span className="block lg:inline xl:block 2xl:inline">VIVOTA{" "}</span>
                        <span className="block lg:inline xl:block 2xl:inline">EDUCATION</span>
                    </p>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-4xl text-gray-300 font-medium tracking-wide">
                        <span className="block 2xl:inline">
                            Venture Today,
                        </span>{" "}
                        <span className="block 2xl:inline text-yellow-600">
                            Victory Tomorrow
                        </span>
                    </p>
                    {/* CTA Button */}
                    <Link href="/enrolment">
                        <button
                            className="mt-6 md:mt-8 px-4 py-2 md:px-6 sm:py-3 md:mb-4 text-base md:text-lg font-semibold 
                        bg-gradient-to-r from-amber-400 to-yellow-500 
                        text-black rounded-full shadow-lg transition-all 
                        hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                        active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                            Join Us Today!
                        </button>
                    </Link>
                </div>

                <img
                    src="hero_trial.jpg"
                    alt="Hero"
                    className="w-11/12 md:w-8/12 lg:w-7/12 xl:w-1/2 mt-10 md:mt-4 
                    rounded-xl border-4 border-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.4)]" />
            </section>
        </>
    );
}
