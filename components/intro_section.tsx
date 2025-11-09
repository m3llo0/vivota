import Link from "next/link";


export default function IntroSection() {

    const tutors = [
        { name: "Shawn Lim", subjects: "Chemistry, Biology", img: "test_pic.jpg", link: "/shawn-lim" },
        { name: "Tenor Ong", subjects: "Physics, General Paper", img: "test_pic.jpg", link: "/tenor-ong" },
        { name: "Jaryl Lee", subjects: "Math, Physics", img: "test_pic.jpg", link: "/jaryl-lee" },
        { name: "Kaiser Tan", subjects: "Biology, Chemistry", img: "test_pic.jpg", link: "/kaiser-tan" },

    ];

    return (
        <div className="sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-8 md:px-12
        py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-12 md:mb-14 xl:mb-20 2xl:mb-24">
                <span className="block sm:inline">Meet our Vivota </span>
                <span className="block sm:inline">Content Experts</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-items-center">
                {tutors.map((tutor) => (
                    <Link key={tutor.name} href={tutor.link}>
                        <div className="relative w-full max-w-xs sm:max-w-none 2xl:scale-110 aspect-[3/4] rounded-lg overflow-hidden
                         shadow-md cursor-pointer transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-xl hover:brightness-110 hover:-translate-y-1">

                            <img
                                src={tutor.img}
                                alt={tutor.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200/90 to-transparent flex items-end p-4">
                                <div className="text-gray-900 md:p-2 lg:p-4 xl:p-0 2xl:p-2">
                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-lg font-bold">{tutor.name}</h3>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm">{tutor.subjects}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}