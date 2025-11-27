import Link from "next/link";
import PricingTable from "@/components/pricing_table";


const plans = [
    {
        name: "Diagnostic",
        price: "Free",
        duration: "(1 trial lesson, 2hrs)",
        strike: null,
        benefits: [
            "Full access to Regimen benefits",
            "Not satisfied? 100% money-back guarantee.",
        ],
    },
    {
        name: "Standard",
        price: "$187.50",
        duration: "(4 lessons x 2hrs)",
        strike: "$375",
        benefits: [
            "Collaborative Learning Package",
            "Free online text consults",
            "Access to video learning resources",
        ],
    },
];

export default function PlansPricing() {
    return (
        <div className="max-w-7xl mx-auto my-32 md:my-36 lg:my-40 xl:mt-0 px-8 sm:px-10 md:px-12 lg:px-14">
            {/* Pricing Cards */}
            <div className="flex flex-col justify-center my-16 xl:min-h-screen">
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
                    Our Vivota Plans
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl text-white text-center font-medium 
                mb-16 lg:mb-20 tracking-wide">
                    Affordable, Comprehensive, Effective.
                </h2>

                <div className="flex flex-col justify-center items-center xl:flex-row xl:items-stretch gap-10 xl:gap-16">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="card w-full max-w-sm bg-neutral-800 shadow-sm flex flex-col"
                        >
                            <div className="card-body flex flex-col h-full">
                                {/* Title + price */}
                                <div className="flex flex-col items-center md:items-start gap-2">
                                    <div className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold">
                                        <h2>{plan.name}</h2>                                        
                                    </div>
                                    <h3 className="text-base md:text-xl text-center md:text-left">
                                        {plan.strike && (
                                            <span className="line-through text-gray-400 mr-2">
                                                {plan.strike}
                                            </span>
                                        )}
                                        <span className="text-orange-500 font-semibold">
                                            {plan.price}
                                        </span>{" "}
                                        <span>{plan.duration}</span>
                                    </h3>
                                </div>

                                {/* Benefits */}
                                <ul className="mt-6 flex flex-col gap-2 text-sm md:text-base">
                                    {plan.benefits.map((benefit, i) => (
                                        <li key={i} className="text-left">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-4 me-2 inline-block text-success"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6">
                                    <Link href="/contact-us">
                                        <button
                                            className="bg-yellow-500 text-black font-semibold px-6 py-3
                                             rounded-lg hover:bg-yellow-600 transition-colors duration-200 w-full"
                                        >
                                            Enrol Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Table */}
            <div className="">
                <div className="my-16">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6 md:mb-12">
                        Need help with multiple subjects?
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center">
                        Get more for greater value!
                    </h2>
                </div>
                <PricingTable />
            </div>
        </div>
    );
}
