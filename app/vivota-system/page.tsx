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
                { sub: "Micro-prep (20–30 min):", text: "Light homework + a 5-questions readiness check to seed the next quiz." }
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
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-xl md:text-5xl text-center font-bold my-32">The Vivota System</h1>
                <Carousel />
            </div>

            {/* in a nutshell*/}
            <div className="flex justify-center h-screen">
                <div className="max-w-5xl flex justify-center items-center gap-12">
                    <img src="/trophy.svg" className="w-32 md:w-64" />
                    <div>
                        <p className="font-bold text-lg md:text-xl leading-loose">
                            Here at Vivota, we don’t “treat” low grades by spamming more worksheets
                            or yapping non-stop.
                            We use a structured approach modelled from the study methods we use daily in medical school. As doctors-to-be, we are taking on the dual responsibilites of diagnosing our students' knowledge gaps while also being relatable mentors/seniors who are willing to lend a helping hand even outside of tuition (feel free to chat with us, we dont bite!)
                        </p>
                        <p className="font-bold text-lg md:text-xl leading-loose mt-8">
                            We are fully committed to the long run and invested in our students' journey both as an educator and simply as a friend.
                        </p>
                    </div>
                </div>
            </div>


            {/* Team Based Collab Learning*/}
            <div className="h-screen">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-16">
                    {/* Session 1 Card */}
                    <div className="bg-gray-800 h-full flex flex-col text-white rounded-xl shadow-lg px-8 py-12 hover:shadow-2xl transition leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[0].title}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {sessions[0].points.map((point, idx) => (
                                <li key={idx} className="text-base">
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>))}
                        </ul>
                    </div>

                    {/* Two-cycle SVG in the centre */}
                    <div className="flex justify-center">
                        <img src="cycle.svg" className="w-48 md:w-64" />
                    </div>

                    {/* Session 2 Card */}
                    <div className="bg-gray-800 h-full flex flex-col text-white rounded-xl shadow-lg px-8 py-12 hover:shadow-2xl transition leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[1].title}</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {sessions[1].points.map((point, idx) => (
                                <li key={idx} className="text-base">
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-12 border border-gray-200">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Why It Works</h2>
                        <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <li>
                                <span className="font-semibold text-gray-900">Rapid Active Recall:</span>{" "}
                                IRAT and TRAT Quizzes build the ability to quickly retrieve information under timed conditions.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Realistic Wargaming:</span>{" "}
                                AE is specially designed to mirror the toughest A-level questions, to enhance students' performance in exams.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Tight Feedback Loop:</span>{" "}
                                Small errors are quickly corrected at their roots before they have a chance to snowball.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Spaced Repetition:</span>{" "}
                                Content is actively reviewed at multiple stages to improve long-term memory retention.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="h-screen flex justify-center items-center">
                <div>
                    <StepsComponent />
                </div>
            </div>

        </div>
    )
}