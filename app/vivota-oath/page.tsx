const vivotaOathSections = [
    {
        title: "Student First, Syllabus Second",
        text: `Your child’s wellbeing takes utmost precedence. No late-night demands, clear 9am–9pm boundaries, and bite-sized workloads with spaced practice.`,
        list: [
            "12-hour weekday replies",
            "Weekly check-in for each individual student",
            "Optional monthly 1-1 consult sessions",
            "Balanced workloads. No additional stress.",
        ],
        imgSrc: "/care.svg",
        imgAlt: "Wellbeing Icon",
    },
    {
        title: "We Teach What Matters",
        text: `We pride ourselves on our high-yield, syllabus oriented teaching plan inspired by Aristole's "First Principles Thinking", which breaks complex concepts into simple fundamentals. Gain access to our concise one-page content summaries for every topic + worked examples designed to ensure performance even under exam pressure.`,
        extraText: "No extra fluff, just simply a proven formula.",
        imgSrc: "/gears.svg",
        imgAlt: "Blueprint Icon",
    },
    {
        title: `"Do No Harm" to Curiosity`,
        text: `Team-Based Learning as standard. Students discuss, reason, and choose with evidence—not just guesswork.`,
        list: [
            "Small class sizes of 6-10 students",
            "Focus on classroom discussions and critical thinking",
            "Fully marked work within 72 hours with learning pointers",
            "Nurturing environment for study and growth",
        ],
        imgSrc: "/collab.svg",
        imgAlt: "Team-Based Learning Icon",
    },
    {
        title: "Transparency at our Core",
        text: `We believe in engaging fully with parents and keeping them in the loop on their child's progress every step of the way.`,
        list: [
            "Monthly updates (Mastery, Habits, Well-being, Next 14 days)",
            "Termly discussions with parents",
            "Quick replies to any enquiries",
        ],
        imgSrc: "/handshake.svg",
        imgAlt: "Parents Icon",
    },
];

export default function VivotaOath() {
    return (
        <div className="max-w-7xl mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
                The Vivota Oath
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-white text-center font-medium 
            mb-16 lg:mb-20 tracking-wide">
                <span className="block sm:inline">Our promise to every member of the{" "}</span>
                <span className="block sm:inline">Vivota Family.</span> 
            </h2>

            <section className="space-y-24 md:space-y-28 mb-32 text-white">
                {vivotaOathSections.map((section, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center gap-6 md:gap-12 md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image on top for mobile, side for desktop */}
                        <div className="flex justify-center items-center md:w-1/2">
                            <img
                                src={section.imgSrc}
                                alt={section.imgAlt}
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
                            />
                        </div>

                        {/* Text content below image on mobile, side-by-side on desktop */}
                        <div className="md:px-0 md:w-1/2 text-center md:text-left">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                                {section.title}
                            </h2>
                            <p className="mb-3 md:mb-4 tracking-wide text-left text-sm sm:text-base md:text-base">
                                {section.text}
                            </p>
                            {section.extraText && (
                                <p className="font-semibold tracking-wide text-sm sm:text-base md:text-base mb-3">
                                    {section.extraText}
                                </p>
                            )}
                            {section.list && (
                                <ul className="list-disc list-inside tracking-wide text-left text-sm sm:text-base md:text-base">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
