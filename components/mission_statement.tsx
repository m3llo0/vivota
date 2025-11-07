import Link from "next/link"

export default function MissionStatement() {
    return (
        <div className="max-w-7xl min-h-screen mx-auto flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center my-8">Vivota's Core Mission</h1>
            <p className="text-base md:text-lg my-8 leading-loose">
                Vivota exists because students deserve more than just syllabus coverage. As both doctors and educational specialists,
                we’re here to diagnose our students' learning gaps and provide the timely treatment for them to ace their exams!
                We’re motivated by simple beliefs: that calm beats cram, that small wins compound, and that a learner who feels seen and heard always learns better.
                By relying on our unique and proprietary Vivota Mentorship System we alleviate
                our students' worries with a step-by-step educational framework that encourages curiosity in learning while ensuring full syllabus coverage.
            </p>
            <h2 className="text-base font-semibold md:text-lg my-8 leading-loose tracking-wider">Vivota: <span className="italic">vivo ("to live") + ta ("a place")</span></h2>
            <p className="max-w-3xl text-center text-base md:text-lg my-8 leading-loose">Our vision is for Vivota to be an exciting place where students can feel alive, even while they grind for the A Levels, and never forget that
                life is more than just academics!
            </p>
            <div className="text-center">
                <Link href="/vivota-oath">
                    <button className="btn btn-info">Find out More</button>
                </Link>
            </div>
        </div>
    )
}