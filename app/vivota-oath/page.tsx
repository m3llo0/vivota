const vivotaOathSections = [
    {
        title: "Student First, Syllabus Second",
        text: `Grades matter. Health matters more. We build plans that respect both parties.`,
        list: [
            "Fast replies everyday 24/7",
            "Weekly check-ins with each student to adjust workload and stress levels",
            "Optional 1-to-1 consults during crunch periods",
            "Bite-sized, spaced practice instead of endless extra papers",
        ],
        extraText: "Students work hard, sleep enough, and do not burn out for exams.",
        imgSrc: "/care.svg",
        imgAlt: "Wellbeing Icon",
    },
    {
        title: "We Teach What Matters",
        text: `No content dump, no fancy jargon. Just the parts that actually move marks.`,
        list: [
            "High-yield, syllabus-aligned lessons built from first principles",
            "Clarity Packs: one-page topic summaries with worked examples for fast revision",
            "Focus on exam craft: how to plan answers, show working, and avoid common traps",
        ],
        extraText: "No extra fluff, just simply a proven formula.",
        imgSrc: "/gears.svg",
        imgAlt: "Blueprint Icon",
    },
    {
        title: `"Do No Harm" to Curiosity`,
        text: `We protect curiosity while training for exam discipline.`,
        list: [
            "Small class sizes of 6-10 students",
            "Team-Based Learning as standard: discuss, argue, and decide with evidence",
            "Mistakes treated as data, not shame; questions are expected, not “extra”",
        ],
        extraText: "Students learn to think, not just copy model answers.",
        imgSrc: "/collab.svg",
        imgAlt: "Team-Based Learning Icon",
    },
    {
        title: "Transparency at our Core",
        text: `Parents should not have to chase for updates. 
        We build a holistic support system where Vivota Tutors work with parents to shape what is best for each child.`,
        list: [
            "Monthly updates (Mastery, Habits, Well-being, Next 14 days)",
            "Termly conversations to review goals, progress, and next steps",
            "Quick, direct replies from the House Tutor to parent enquiries",
            "Personalised adjustments to workload and support based on shared feedback"
        ],
        extraText: "You always know how your child is doing, what we are focusing on next, and how we are supporting them at home and in class.",
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
                            {section.list && (
                                <ul className="list-disc list-inside tracking-wide text-left text-sm sm:text-base md:text-base mb-6 md:mb-8 ">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.extraText && (
                                <p className="font-semibold tracking-wide text-sm sm:text-base md:text-base mb-3">
                                    {section.extraText}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
