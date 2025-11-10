import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function SchedulePage() {
    const schedule = [
        { day: 'Monday', time: '7:00 - 9:00 pm', subject_short: 'GP', subject_long: 'General Paper', tutor: 'Tenor' },
        { day: 'Wednesday', time: '5:00 - 7:00 pm', subject_short: 'Chem', subject_long: 'Chemistry', tutor: 'Shawn' },
        { day: 'Wednesday', time: '7:00 - 9:00 pm', subject_short: 'Spare Slot', subject_long: 'Spare Slot', tutor: '' },
        { day: 'Thursday', time: '5:00 - 7:00 pm', subject_short: 'Phy', subject_long: 'Physics', tutor: 'Tenor' },
        { day: 'Thursday', time: '7:00 - 9:00 pm', subject_short: 'Bio', subject_long: 'Biology', tutor: 'Kaiser' },
        { day: 'Friday', time: '5:00 - 7:00 pm', subject_short: 'Math', subject_long: 'Mathematics', tutor: 'Jaryl' },
        { day: 'Friday', time: '7:00 - 9:00 pm', subject_short: 'GP', subject_long: 'General Paper', tutor: 'Tenor' },
        { day: 'Saturday', time: '4:00 - 6:00 pm', subject_short: 'Chem', subject_long: 'Chemistry', tutor: 'Shawn' },
        { day: 'Saturday', time: '6:00 - 8:00 pm', subject_short: 'Bio', subject_long: 'Biology', tutor: 'Kaiser' },
        { day: 'Sunday', time: '4:00 - 6:00 pm', subject_short: 'Phy', subject_long: 'Physics', tutor: 'Jaryl' },
        { day: 'Sunday', time: '6:00 - 8:00 pm', subject_short: 'Math', subject_long: 'Mathematics', tutor: 'Jaryl' },
    ];

    const subjectColors = {
        'GP': 'bg-blue-50 border-blue-200 text-blue-900',
        'Chem': 'bg-red-50 border-red-200 text-red-900',
        'Phy': 'bg-yellow-50 border-yellow-200 text-yellow-900',
        'Bio': 'bg-green-50 border-green-200 text-green-900',
        'Math': 'bg-purple-50 border-purple-200 text-purple-900',
        'Spare Slot': 'bg-slate-50 border-slate-200 text-slate-500',
    };

    const groupedSchedule = schedule.reduce<Record<string, typeof schedule>>((acc, lesson) => {
        if (!acc[lesson.day]) acc[lesson.day] = [];
        acc[lesson.day].push(lesson);
        return acc;
    }, {});

    const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="min-h-screen max-w-7xl mx-auto my-32 md:my-36 lg:my-40 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Vivota Class Schedule
                    </h1>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <p className="text-base lg:text-lg font-semibold">Economics Cafe</p>
                        </div>
                        <p className="text-sm lg:text-base">505B Bishan St 11, #01-422</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {dayOrder.map(day => {
                        const lessons = groupedSchedule[day];
                        if (!lessons) return null;

                        return (
                            <div key={day} className="border-l-4 border-slate-300 pl-4 sm:pl-6">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                                    {day}
                                </h2>
                                <div className="space-y-3">
                                    {lessons.map((lesson, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${subjectColors[lesson.subject_short]}
                                                }`}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <div className="flex items-center gap-3">
                                                    <Clock className="w-5 h-5 flex-shrink-0" />
                                                    <span className="font-semibold text-base sm:text-lg">
                                                        {lesson.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3 ml-8 sm:ml-0">
                                                    <span className="text-lg sm:text-xl font-bold md:hidden">
                                                        {lesson.subject_short}
                                                    </span>
                                                    <span className="text-lg sm:text-xl font-bold hidden md:inline">
                                                        {lesson.subject_long}
                                                    </span>
                                                    {lesson.tutor && (
                                                        <span className="px-2 py-1 rounded-full bg-white bg-opacity-60 text-xs sm:text-sm font-medium">
                                                            {lesson.tutor}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center pt-24">
                <Link href="/enrolment">
                    <button
                        className="px-8 sm:px-12 md:px-18 lg:px-24 py-4 text-base sm:text-lg font-semibold bg-white 
                        text-black rounded-full shadow-lg transition-all 
                        hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                        active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                        Enrol Today!
                    </button>
                </Link>
            </div>
        </div>
    );
};
