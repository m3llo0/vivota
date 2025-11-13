import Carousel from "@/components/carousel";
import StepsComponent from "@/components/steps";

export default function VivotaSystem() {

    interface Point {
        sub: string;
        text: string;
    }

    interface Session {
        title: string;
        points: Point[];
    }

    const sessions: Session[] = [
        {
            title: "Session 1: Teach & Distil",
            points: [
                { sub: "High-yield delivery:", text: "Syllabus-aligned teaching, stripped of fluff and explained through first principles." },
                { sub: "Clarity Pack (same day):", text: "A clean one-pager, worked examples, and a brief model answer where helpful." },
                { sub: "Micro-prep (20–30 min):", text: "Light homework + a five-questions readiness check to seed the next quiz." }
            ],
        },

        {
            title: "Session 2: Dispel & Reinforce",
            points: [
                { sub: "IRAT Quiz:", text: "Individual quiz before class to identify knowledge gaps" },
                { sub: "TRAT Quiz:", text: "Team quiz in class with instant feedback and rationale sheets" },
                { sub: "Questions Clinic:", text: " Shoot your questions. We will rapidly debunk misconceptions" },
                { sub: " Application Exercise (AE):", text: "Model answers simulated under exam timing + debrief" }
            ],
        }
    ];

    return (
        <div className="max-w-7xl mx-auto my-36 md:my-38 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14 space-y-24 md:space-y-32 lg:space-y-48">

            {/* Hero Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
                    The Vivota System
                </h1>
                <div className="scale-60 md:scale-80 2xl:scale-100">
                    <Carousel />
                </div>
            </div>

            {/* In a Nutshell */}
            <div className="flex justify-center">
                <div className="flex flex-col text-white lg:flex-row justify-center items-center gap-8 md:gap-12">
                    <img src="/trophy.svg" className="w-24 md:w-32 lg:w-48 max-w-full" />
                    <div>
                        <p className="font-bold text-base md:text-lg leading-relaxed md:leading-loose">
                            Here at Vivota, we don’t “treat” low grades by spamming more worksheets
                            or yapping non-stop. We use a structured approach modelled from the study
                            methods we use daily in medical school.{" "}
                            <span className="block mt-6 md:inline md:mt-0">As doctors-to-be, we are taking
                                on the dual responsibilites of diagnosing our students' knowledge gaps
                                while also being relatable mentors/seniors who are willing to lend a helping
                                hand even outside of tuition (feel free to chat with us, we dont bite!)
                            </span>
                        </p>
                        <p className="font-bold text-base md:text-lg leading-relaxed md:leading-loose mt-6 md:mt-8">
                            We are fully committed to the long run and invested in our students' journey
                            both as an educator and simply as a friend.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Based Collab Learning */}
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mb-8">

                    {/* Session 1 Card */}
                    <div className="bg-gray-800 flex flex-col text-white rounded-xl shadow-lg px-6 py-8 md:px-8 md:py-12 hover:shadow-2xl transition leading-relaxed md:leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[0].title}</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            {sessions[0].points.map((point, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Two-cycle SVG in the centre */}
                    <div className="flex justify-center">
                        <img src="cycle.svg" className="w-32 md:w-40 max-w-full" />
                    </div>

                    {/* Session 2 Card */}
                    <div className="bg-gray-800 flex flex-col text-white rounded-xl shadow-lg px-6 py-8 md:px-8 md:py-12 hover:shadow-2xl transition leading-relaxed md:leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[1].title}</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            {sessions[1].points.map((point, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-12 border border-gray-200">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center md:text-left">Why It Works</h2>
                        <ul className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                            <li>
                                <span className="block md:inline font-semibold text-gray-900">Rapid Active Recall:{" "}</span>
                                IRAT and TRAT Quizzes build the ability to quickly retrieve information under timed conditions.
                            </li>
                            <li>
                                <span className="block md:inline font-semibold text-gray-900">Realistic Wargaming:{" "}</span>
                                AE mirrors the toughest A-level questions, enhancing performance.
                            </li>
                            <li>
                                <span className="block md:inline font-semibold text-gray-900">Tight Feedback Loop:{" "}</span>
                                Small errors are corrected at their roots before they snowball.
                            </li>
                            <li>
                                <span className="block md:inline font-semibold text-gray-900">Spaced Repetition:{" "}</span>
                                Content is reviewed at multiple stages to improve long-term retention.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Steps Component */}
            <div className="flex justify-center items-center">
                <StepsComponent />
            </div>

            {/* Video Recording Section */}
            <div className="flex justify-center text-white">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24">
                    <img src="/video.svg" className="w-24 md:w-32 lg:w-40 xl:w-48 max-w-full" />
                    <div>
                        <p className="font-bold text-base md:text-lg leading-relaxed md:leading-loose tracking-wide mb-12 text-center lg:text-left">
                            Every session in Vivota is recorded, giving students on-demand replays
                            to revisit any lesson they wish for future revision.
                        </p>
                        <ul className="space-y-4 text-base md:text-lg ml-4 lg:ml-0 leading-relaxed tracking-wide">
                            <li>
                                <p className="font-semibold">Any Place, Any Time:</p>
                                <p>Revise at your convenience.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Unlimited Replays:</p>
                                <p>Learn at your own speed, review your mistakes.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Back on Track:</p>
                                <p>Missed a lesson? Resync with your peers.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Easy Troubleshooting:</p>
                                <p>Seek help for any part of the replay. Minimal hassle!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}