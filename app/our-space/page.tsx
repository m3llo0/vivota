import Image from "next/image";

export default function OurSpace() {
    return (
        <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Space</h1>
                <p className="text-base md:text-lg leading-relaxed mb-12">
                    We co-share a cozy space in Bishan with Economics Cafe, a distinguished economics
                    tuition centre run by Mr Edmund Quek. The classroom can host up to 32 students,
                    which is sufficiently spacious for conducive learning and collaboration to take
                    place. It is fully equipped with in-house projectors and whiteboards. We intend to
                    keep our class sizes small to ensure every student receives the help they need.
                </p>

                {/* Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                        <Image
                            src="/classroom1.png"
                            alt="Classroom photo 1"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full h-80 sm:h-100 overflow-hidden shadow-md">
                        <Image
                            src="/classroom2.png"
                            alt="Classroom photo 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
