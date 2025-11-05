import Link from "next/link";


export default function IntroSection() {

    const tutors = [
        { name: "Shawn Lim", subjects: "Chemistry, Biology", img: "test_pic.jpg", link: "/shawn-lim" },
        { name: "Tenor Ong", subjects: "Physics, General Paper", img: "test_pic.jpg", link: "/tenor-ong" },
        { name: "Jaryl Lee", subjects: "Math, Physics", img: "test_pic.jpg", link: "/jaryl-lee" },
        { name: "Kaiser Tan", subjects: "Biology, Chemistry", img: "test_pic.jpg", link: "/kaiser-tan" },

    ];

    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <h1 className="text-xl md:text-4xl text-center font-bold mb-12">Meet our Vivota Content Experts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {tutors.map((tutor) => (
                    <Link key={tutor.name} href={tutor.link}>

                        <div className="relative p-12 min-h-[24rem] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer 
                   transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 hover:-translate-y-1">

                            <img src={tutor.img} className="transform scale-300" />

                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-200/90 to-transparent">
                                <div className="absolute bottom-4 left-4 right-4 p-4 text-gray-900">
                                    <h3 className="text-xl font-bold">{tutor.name}</h3>
                                    <p className="text-base">{tutor.subjects}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}