'use client'
import { useState } from "react";

export default function StepsComponent() {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { title: 'Review History', content: 'Analyze past performance and identify patterns' },
        { title: 'Diagnose Gaps', content: 'Pinpoint areas needing improvement' },
        { title: 'SMART 14-day Plan', content: 'Create specific, measurable, achievable goals' },
        { title: 'Weekly Check-Ins', content: 'Monitor progress and adjust as needed' }
    ];

    return (
        <div>
            {/* Steps Navigation */}
            <div className="mb-16">
                <ul className="flex justify-between relative gap-48">
                    {steps.map((step, index) => (
                        <li key={index} className="flex flex-col items-center flex-1">
                            <button
                                onClick={() => setCurrentStep(index)}
                                className={`w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24 rounded-full flex items-center justify-center
                                     font-semibold transition-all duration-300 md:text-2xl cursor-pointer ${index <= currentStep
                                        ? 'bg-green-600 text-white font-bold shadow-lg scale-110 '
                                        : 'bg-white text-gray-400 font-bold border-2 border-gray-300'
                                    }`}
                            >
                                {index + 1}
                            </button>
                            <span
                                className={`mt-2 md:mt-4 lg:mt-6 text-sm md:text-base lg:text-xl text-sm 
                                    font-bold text-center whitespace-nowrap px-2 
                                    transition-colors duration-300 ${index <= currentStep ? 'text-green-700' : 'text-gray-500'
                                    }`}
                            >
                                {step.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Step Content */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Step {currentStep + 1}: {steps[currentStep].title}
            </h2>
            <p className="text-white text-lg md:text-xl mb-6">
                {steps[currentStep].content}
            </p>

            <div className="flex justify-between mt-8 md:mt-10 lg:mt-16">
                {currentStep > 0 && (
                    <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="w-12 h-12 rounded-2xl backdrop-blur-md bg-white/90 
                        border border-white/20 shadow-lg hover:bg-white/70 transition-all duration-300 
                        flex items-center justify-center text-gray-700 text-2xl md:text-3xl lg:text-4xl 
                        font-light hover:scale-105 cursor-pointer"
                    >
                        ‹
                    </button>
                )}

                <div className={currentStep === 0 ? "ml-auto" : ""}>
                    {currentStep < steps.length - 1 && (
                        <button
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="w-12 h-12 rounded-2xl backdrop-blur-md bg-white/90 
                            border border-white/20 shadow-lg hover:bg-white/70 transition-all duration-300 
                            flex items-center justify-center text-gray-700 text-2xl md:text-3xl lg:text-4xl 
                            font-light hover:scale-105 cursor-pointer"
                        >
                            ›
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}