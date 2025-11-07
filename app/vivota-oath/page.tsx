
export default function VivotaOath() {
    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <h1 className="text-2xl md:text-4xl text-center font-bold mb-12">The Vivota Oath</h1>
            <h2 className="text-xl text-white text-center font-semibold mb-12">Our promise to every student, parent and member of the Vivota Family.</h2>

            <section className="py-16 px-6 md:px-24 space-y-48">
                {/* 1. Student First */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Student First, Syllabus Second</h2>
                        <p className="mb-4">
                            Your child’s wellbeing takes utmost precedence. No late-night demands, clear 9am–9pm boundaries, and bite-sized workloads with spaced practice.
                        </p>
                        <ul className="list-disc list-inside ">
                            <li>12-hour weekday replies</li>
                            <li>Weekly check-in tailored to each individual student</li>
                            <li>Optional monthly 1-1 consult sessions (up to 20 mins)</li>
                            <li>Balanced workloads. No additional stress.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src="/care.svg" alt="Wellbeing Icon" className="w-48 h-48" />
                    </div>
                </div>

                {/* 2. We Teach What Matters */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src="/gears.svg" alt="Blueprint Icon" className="w-48 h-48" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">We Teach What Matters</h2>
                        <p className="mb-4">
                            We pride ourselves on our high-yield, syllabus oriented teaching plan inspired by Aristole's "First Principles Thinking", which breaks complex concepts into simple fundamentals. Gain access to our concise one-page content summaries for every topic + worked examples designed to ensure performance even under exam pressure.
                        </p>
                        <p className="font-semibold">No extra fluff, just simply a proven formula.</p>
                    </div>
                </div>

                {/* 3. Do No Harm to Curiosity */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">"Do No Harm" to Curiosity</h2>
                        <p className="mb-4">
                            Team-Based Learning as standard. Students discuss, reason, and choose with evidence—not just guesswork.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Quick readiness checks (IRAT/TRAT)</li>
                            <li>Application cases with one best answer</li>
                            <li>Instructor debriefs</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src="/collab.svg" alt="Team-Based Learning Icon" className="w-48 h-48" />
                    </div>
                </div>

                {/* 4. Keep Parents in the Loop */}
                <div className="flex flex-col md:flex-row items-start gap-12">
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src="/handshake.svg" alt="Parents Icon" className="w-48 h-48" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold mb-4">Transparency at our Core</h2>
                        <p className="mb-4">
                            We believe in engaging fully with parents and keeping them in the loop on their child's progress.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Marked work within 72 hours</li>
                            <li>Monthly 1-page snapshot (Mastery, Habits, Wellbeing, Next 14 days)</li>
                            <li>Termly consultation</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}   