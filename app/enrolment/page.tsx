import { MessageCircle, CheckCircle, User, GraduationCap, BookOpen, TrendingUp, Clock, CircleDollarSign } from 'lucide-react';

export default function EnrollmentPage() {
    const whatsappNumber = "80357523";
    const whatsappLink = `https://wa.me/65${whatsappNumber}`;

    const enrollmentDetails = [
        {
            icon: <User className="w-5 h-5" />,
            title: "Full Name",
        },
        {
            icon: <GraduationCap className="w-5 h-5" />,
            title: "School & Level",
        },
        {
            icon: <CircleDollarSign className="w-5 h-5" />,
            title: "Plan",
        },
        {
            icon: <BookOpen className="w-5 h-5" />,
            title: "Subjects",
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Timeslots",
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Current Grades",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">

            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center my-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
                        We are excited for you to join our{' '}
                        <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200 bg-clip-text text-transparent">
                            Vivota Family!
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-semibold max-w-2xl mx-auto">
                        Start your journey to academic excellence with just a few simple steps
                    </p>
                </div>

                {/* Main Card */}
                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 my-16">
                    <div className="flex items-center justify-center mb-4">
                        <img src="/whatsapp.svg" className="w-8 h-8 text-green-600 mr-4" />
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                            <span className="block sm:inline">Send us a{" "}</span>
                            <span>WhatsApp Message</span>
                        </h2>
                    </div>
                    <p className="text-center text-black mb-6 text-base md:text-lg">
                        Text us at the number below with your enrollment details
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-600 hover:bg-green-700 text-white text-center
                        py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-102 shadow-lg"
                    >
                        <div className="flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 mr-4" />
                            <span className="text-2xl font-bold tracking-wide">8035 7523</span>
                        </div>
                    </a>
                </div>

                {/* Required Information */}
                <div className='my-16'>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                        Please Include the Following Details:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base sm:text-lg">
                        {enrollmentDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-5 
                                    border border-blue-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="bg-white rounded-lg p-2 text-blue-600 mt-1">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold tracking-wide text-gray-900">{detail.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Example Message */}
                    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600 mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-4">EXAMPLE</span>
                            Sample Message:
                        </h4>
                        <div className="bg-white rounded p-4 font-mono text-sm text-gray-700 space-y-1">
                            <p>Full Name: John Tan Wei Ming</p>
                            <p>School: Raffles Institution, J2</p>
                            <p>Plan: Regimen</p>
                            <p>Subjects: H2 Math & H2 Physics</p>
                            <p>Timeslots: Fri 5pm Math, Sun 4pm Physics</p>
                            <p>Current Grades: S for Math, U for Physics</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer Note */}
            <div className="text-center font-semibold space-y-2">
                <p className="text-sm md:text-base">
                    Our team will respond to your message within 24 hours to confirm your enrollment.
                </p>
                <p className="text-sm md:text-base">
                    Thank you for choosing Vivota Education!
                </p>
            </div>
        </div>
    );
}