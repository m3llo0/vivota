import Link from "next/link"

export default function MissionStatement() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-4 sm:my-6">
                Vivota's Core Mission
            </h1>

            <p className="text-sm sm:text-base md:text-lg 2xl:text-xl mt-4 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                JC students don’t need more content; they need clearer plans, faster feedback,
                and adults who actually keep track. As doctors-in-training and educators, we built
                Vivota to diagnose learning gaps and give structured, calm support week by week through the Vivota System.
            </p>

            <ul className="text-sm sm:text-base md:text-lg 2xl:text-xl my-12 lg:my-24 px-4 sm:px-8 leading-relaxed tracking-wide list-disc list-inside space-y-4 text-center sm:text-left">
                <li><strong>Calm over cram</strong> — personalised, steady, actionable study plans instead of last-minute panic.</li>
                <li><strong>Small wins that compound</strong> — regular check-ins and specific targets, not just “do more papers”.</li>
                <li><strong>Treating the student, not just the syllabus</strong> — wellbeing, habits, and workload tracked alongside marks so progress&nbsp;is&nbsp;sustainable.</li>
            </ul>

            <div>
                <h2 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold leading-relaxed tracking-wide text-center">
                    Vivota: <span className="italic">vivo ("to live") + ta ("a place")</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg 2xl:text-xl my-3 sm:my-5 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                    A place where learning feels alive, even while preparing for A-Levels
                </p>
            </div>

            <div className="text-center my-4 sm:my-6">
                <Link href="/vivota-oath">
                    <button className=" px-6 md:px-8 py-3 xl:px-10 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                text-black rounded-full shadow-lg transition-all 
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                        Find out More
                    </button>
                </Link>
            </div>
        </div>

    )
}