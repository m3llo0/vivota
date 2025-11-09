import Link from "next/link"

export default function MissionStatement() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-4 sm:my-6">
                Vivota's Core Mission
            </h1>

            <p className="text-sm sm:text-base md:text-lg 2xl:text-xl my-4 sm:my-6 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                Vivota exists because students deserve more than just syllabus coverage.
                As both doctors-to-be and educational specialists, we’re here to diagnose learning gaps
                and provide timely support for students to ace their exams.
            </p>

            <p className="text-sm sm:text-base md:text-lg 2xl:text-xl my-2 sm:my-4 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                We believe calm beats cram, small wins compound, and learners who feel seen always learn better.
                Our Vivota System guides students step-by-step, sparking curiosity while covering the syllabus.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold my-3 sm:my-5 leading-relaxed tracking-wide text-center">
                Vivota: <span className="italic">vivo ("to live") + ta ("a place")</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg 2xl:text-xl my-3 sm:my-5 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                Our vision is for Vivota to be an exciting place where students can feel alive,
                even while preparing for the A Levels. Life is more than just academics!
            </p>

            <div className="text-center my-4 sm:my-6">
                <Link href="/vivota-oath">
                    <button className="btn text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-6 bg-[#e6bb10] 
        text-black hover:bg-[#f7cd25] hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        Find out More
                    </button>
                </Link>
            </div>
        </div>

    )
}