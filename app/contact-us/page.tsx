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
        <div className="max-w-7xl mx-auto my-18 md:my-34 lg:my-38 px-8 sm:px-10 md:px-12 lg:px-14">

            <div className="container mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center py-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                        Contact us to book your seat today
                    </h1>
                    <p className="text-base md:text-base font-semibold max-w-2xl mx-auto">
                        Start your journey to academic excellence with one simple step
                    </p>
                </div>

                {/* Main Card */}
                {/* WhatsApp CTA */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-black border border-yellow-500 text-white text-center
                        py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-102 shadow-lg"
                >
                    <div className="flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 mr-4" />
                        <span className="text-2xl font-bold tracking-wide">8035 7523</span>
                    </div>
                </a>
            </div>

            {/* Footer Note */}
            <div className="text-center font-semibold space-y-2 py-16">
                <p className="text-sm md:text-base mb-4">
                    Our team will respond to your message as soon as possible to confirm your enrollment.
                </p>
                <p className="text-sm md:text-base">
                    Thank you for choosing Vivota Education!
                </p>
            </div>
        </div>
    );
}