import Link from "next/link"
export default function SubjectsSection() {

    const content = [
        { title: "Physics", pic: "/physics.svg", url: "/physics" },
        { title: "Chemistry", pic: "/chemistry.svg", url: "/chemistry" },
        { title: "Biology", pic: "/biology.svg", url: "/biology" },
        { title: "Math", pic: "/math.svg", url: "/math" },
        { title: "General Paper", pic: "/gp.svg", url: "/general-paper" }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 md:mb-8">
                Our JC Courses
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg 2xl:text-xl text-white text-center tracking-wide mb-4 md:mb-8">
                <span className="block lg:inline">Vivota specialises in delivering quality education{" "}</span>
                <span className="block lg:inline">tailored for Junior College students.</span>
            </h2>
            <h2 className="text-sm sm:text-base md:text-lg 2xl:text-xl text-white text-center mb-8 md:mb-12 tracking-wide">
                <span className="block md:inline">Explore the 5 subjects taught in-depth{" "}</span>
                <span className="block md:inline">by our Content Experts!</span>
            </h2>

            <div className="flex flex-col items-center max-w-xl lg:max-w-5xl lg:px-8 mx-auto w-full">
                {/* --- Row 1: First 3 cards --- */}
                <div className="flex flex-col items-center gap-6 md:w-full lg:grid lg:grid-cols-3">
                    {content.slice(0, 3).map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-lg shadow-lg overflow-hidden
                             hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full
                             min-w-2xs"
                        >
                            <div className="p-4 md:p-6 flex flex-col items-center">
                                <h3 className="text-xl md:text-2xl text-black font-semibold mb-4 md:mb-8 text-center">
                                    {item.title}
                                </h3>
                                <img src={item.pic} className="w-20 md:w-24 h-auto mb-4 md:mb-8" alt={item.title} />
                                <Link href={item.url}>
                                    <button className="bg-blue-500 font-bold text-white px-4 md:px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Row 2: Last 2 cards centered --- */}
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:col-span-3 mt-6 lg:mt-8 w-full">
                    {content.slice(3).map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-lg shadow-lg overflow-hidden 
                            hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full
                            min-w-2xs md:w-1/3"
                        >
                            <div className="p-4 md:p-6 flex flex-col items-center">
                                <h3 className="text-xl md:text-2xl text-black font-semibold mb-4 md:mb-8 text-center">
                                    {item.title}
                                </h3>
                                <img src={item.pic} className="w-20 md:w-24 h-auto mb-4 md:mb-8" alt={item.title} />
                                <Link href={item.url}>
                                    <button className="bg-blue-500 font-bold text-white px-4 md:px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}