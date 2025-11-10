type Tutor = {
    name: string;
    subjects: string;
    highlights: string[];
    bio: string;
    at_vivota: string;
    img: string;
};

type TutorDetailsProps = {
    tutor: Tutor;
};

export default function TutorDetails({ tutor }: TutorDetailsProps) {

    return (
        <div className="max-w-7xl min-h-screen mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Tutor Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                    <img
                        src={tutor.img}
                        alt={tutor.name}
                        className="rounded-xl shadow-lg w-2/3 sm:w-1/2 md:w-full object-cover"
                    />
                </div>

                {/* Tutor Info */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">{tutor.name}</h1>
                    <h2 className="text-xl md:text-2xl font-bold mb-12 tracking-wide">{tutor.name === "Tenor Ong" ? (
                        <>
                            {tutor.subjects.split(" (Dual Lead CE)")[0]}
                            <span className="block"> (Dual Lead CE) </span>
                        </>
                    ) : (
                        tutor.subjects
                    )}</h2>
                    <h2 className="text-lg md:text-xl font-bold mb-4">My Highlights</h2>
                    <ul className="list-disc list-inside text-white/90 mb-12 space-y-1 tracking-wider">
                        {tutor.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>

                    <h2 className="text-lg md:text-xl text-white/90 font-bold mb-4">A Little About Me</h2>
                    <p className="mb-6 leading-normal tracking-wider">
                        {tutor.bio}
                    </p>

                    <p className="leading-normal tracking-wider">
                        {tutor.at_vivota}
                    </p>
                </div>
            </div>
        </div>
    )
}