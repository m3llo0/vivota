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
        <div className="max-w-7xl min-h-screen mx-auto my-16 md:my-24 lg:my-32">
            <div className="flex flex-col md:flex-row items-center md:items-start mt-48 gap-12">
                {/* Tutor Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <img
                        src={tutor.img}
                        alt={tutor.name}
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Tutor Info */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-4xl font-bold mb-4 text-yellow-500">{tutor.name}</h1>
                    <h2 className="text-2xl font-bold mb-12 tracking-wide">{tutor.subjects}</h2>
                    <h2 className="text-xl font-bold mb-4">My Highlights</h2>
                    <ul className="list-disc list-inside text-white/90 mb-12 space-y-1 tracking-wider">
                        {tutor.highlights.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>

                    <h2 className="text-xl text-white/90 font-bold mb-4">A Little About Me</h2>
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