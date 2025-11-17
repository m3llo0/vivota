import { ReactNode } from "react";
import Link from "next/link";

export type SubjectDetailsProps = {
    subject: {
        type: string;
        method: string;
        description: string;
        blurb: string;
        cta: string;
        img: string;
    };
    keyFeatures: {
        icon: ReactNode;
        title: string;
        description: string;
    }[];
    topics: string[];
    methods: string[];
};

export default function SubjectDetails({ subject, keyFeatures, topics, methods }: SubjectDetailsProps) {
    return (
        <div className="max-w-7xl mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">
            {/* Hero Section */}
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 my-16 md:my-0">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                            Master {subject.type} Through {" "}
                            <span className="text-yellow-400">{subject.method}</span>
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            {subject.blurb}
                        </p>
                        <Link href="/plans-and-pricing">
                            <button className="btn btn-warning px-8 py-4 text-black rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-50 h-50 md:w-80 md:h-80 
                        bg-gradient-to-br from-blue-300 to-indigo-500 rounded-3xl 
                        shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={subject.img}
                                alt={subject.img}
                                className="w-full h-full object-contain p-12 filter brightness-0 invert"
                            />
                            <div className="absolute -top-4 -right-4 w-18 h-18 md:w-24 md:h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-18 h-18 md:w-32 md:h-32 bg-pink-400 rounded-full opacity-20 animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="container mx-auto my-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                    <p className="text-base md:text-lg  max-w-2xl mx-auto">
                        A systematic methodology that transforms you into a confident problem-solver
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100"
                        >
                            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Topics */}
            <div className="container mx-auto my-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="block sm:inline">Core Topics in{" "}</span>
                            <span>{subject.type == "General Paper" ? "H1" : "H2"}{" "}{subject.type}</span>
                        </h2>
                        <div className="space-y-3">
                            {topics.map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-x-2"
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Problem-Solving Tools</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {methods.map((method, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 bg-gradient-to-br from-blue-400 to-indigo-400 text-gray-900 rounded-lg 
                                    text-center font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105
                                    flex items-center justify-center"
                                >
                                    {method}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-gradient-to-r from-yellow-100 via-amber-200 to-orange-300 text-white px-4 py-12 sm:p-12 md:p-16 rounded-lg my-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-black text-center">The Vivota Difference</h2>
                        <div className="prose prose-lg prose-invert">
                            <p className="leading-relaxed text-black tracking-wide leading-loose font-medium">
                                {subject.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Learning?</h2>
                    <p className="text-base md:text-lg">
                        Join Vivota and {subject.cta}
                    </p>
                    <div className="flex gap-4 justify-center gap-8">
                        <Link href="/contact-us">
                            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 text-black text-base md:text-lg border-2 border-black rounded-lg 
                            font-semibold hover:scale-105 transition-all whitespace-nowrap">
                                Enrol Now
                            </button>
                        </Link>
                        <Link href="/plans-and-pricing">
                            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-neutral-100 text-black text-base md:text-lg rounded-lg 
                            font-semibold hover:scale-105 transition-all whitespace-nowrap">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}