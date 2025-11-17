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
            title: "Session 1: Concept Class",
            points: [
                { sub: "High-yield Delivery:", text: "Syllabus-aligned teaching, stripped of fluff and explained through first principles." },
                { sub: "Interactive Discussion:", text: "Class discussion led by content experts, ensuring that no student is left out" },
                { sub: "Prep for Session 2:", text: "Light homework (individual quiz) to seed the next lesson." }
            ],
        },

        {
            title: "Session 2: Team Session",
            points: [
                { sub: "Individual Quiz:", text: "Should be attempted before class to identify knowledge gaps" },
                { sub: "Team Discussion:", text: "Team quiz in class with instant feedback and rationale sheets" },
                { sub: "Questions Clinic:", text: "Students shoot questions. Content Experts debunk misconceptions" },
                { sub: " Application Exercise (AE):", text: "The most challenging questions will be tackled and led by Content Experts" }
            ],
        }
    ];

    return (
        <div className="max-w-7xl mx-auto my-36 md:my-38 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14 space-y-24 md:space-y-32 lg:space-y-48">

            {/* Hero Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
                    The Vivota Learning System
                </h1>
                <div className="scale-60 md:scale-80 2xl:scale-100">
                    <Carousel />
                </div>
            </div>

            {/* In a Nutshell */}
            <div className="flex justify-center">
                <div className="flex flex-col text-white lg:flex-row justify-center items-center gap-8 md:gap-12">
                    <img src="/trophy.svg" className="w-20 md:w-30 lg:w-40 max-w-full" />
                    <div>
                        <p className="font-bold text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
                            Here at Vivota, we don’t “treat” low grades by spamming more worksheets
                            or yapping non-stop. We typically run in a two-session cycle, inspired by scientifically proven techniques
                            modelled after the methods used in medical school.
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
                                Individual quizzes build the ability to review current knowledge. Team Discussions enable students
                                 to work together in teams to generate ideas and exchange knowledge.
                            </li>
                            <li>
                                <span className="block md:inline font-semibold text-gray-900">Realistic Wargaming:{" "}</span>
                                AE mirrors the toughest exam-style questions, for all students to unlock their full potential.
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