import Carousel from "@/components/carousel";

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
                { sub: "High-yield delivery:", text: "Blueprint-aligned teaching, stripped of fluff and explained through first principles." },
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
                { sub: " Application Exercise:", text: "Model answers simulated under exam timing + debrief" }
            ],
        }
    ];

    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-xl md:text-5xl text-center font-bold my-32">The Vivota System</h1>
                <Carousel />
            </div>

            {/* Desktop: 3-column row; Mobile: stacked */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
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
        </div>
    )
}