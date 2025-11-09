export default function HeroSection() {
    return (
        <>
            <section className="min-h-screen flex flex-col xl:flex-row items-center 
            justify-center w-full text-white px-8 xl:px-48">
                <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                    <p className="text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight 
                    bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 text-transparent bg-clip-text drop-shadow-md">
                        <span className="block 2xl:inline">VIVOTA{" "}</span>
                        <span className="block 2xl:inline">EDUCATION</span>
                    </p>
                    <span className="mt-4 text-xl sm:text-2xl md:text-3xl xl:text-4xl text-gray-300 font-medium tracking-wide">
                        <span className="block 2xl:inline">
                            Venture Today,
                        </span>{" "}
                        <span className="block 2xl:inline text-yellow-600">
                            Victory Tomorrow
                        </span>
                    </span>
                </div>

                <img
                    src="hero_trial.jpg"
                    alt="Hero"
                    className="w-11/12 sm:w-4/5 md:w-1/2 mt-10 md:mt-4 
                    transform scale-100 md:scale-90
                     rounded-xl border-4 border-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.4)]
                     " />
            </section>
        </>
    );
}
