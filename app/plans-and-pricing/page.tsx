import PricingTable from "@/components/pricing_table";

export default function PlansPricing() {
    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <div className="h-screen">
                <h1 className="text-xl md:text-4xl text-center font-bold mt-48 mb-8">Our Vivota Plans</h1>
                <h2 className="text-lg text-white text-center mb-24">Affordable, Comprehensive, Effective.</h2>

                <div className="flex flex-col md:flex-row justify-center gap-12">

                    <div className="card w-96 bg-base-100 shadow-sm flex flex-col min-h-[24rem]">
                        <div className="card-body flex flex-col h-full">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl font-bold">Diagnostic</h2>
                                <h3 className="text-xl">$100 (1 trial session, 2 hours)</h3>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Full access to Regimen benefits</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Not satisfied? 100% money-back guarantee.</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-warning btn-block">Enrol Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-sm flex flex-col">
                        <div className="card-body flex flex-col h-full">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-3xl font-bold">Rotation</h2>
                                <h3 className="text-xl">
                                    <span className="line-through text-gray-400 mr-2">$500</span>
                                    <span className="text-orange-500 font-semibold">$440</span>
                                    <span> (4 sessions x 2 hours)</span>
                                </h3>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Collaborative Learning Package</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Free online text consults</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to video learning resources</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-warning btn-block">Enrol Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-sm flex flex-col">
                        <div className="card-body flex flex-col h-full">
                            <div className="text-3xl font-bold inline-flex items-center gap-2">
                                <h2>Regimen</h2>
                                <img src="flame.svg" className="w-4 h-4" />
                            </div>
                            <h3 className="text-xl">
                                <span className="line-through text-gray-400 mr-2">$1200</span>
                                <span className="text-orange-500 font-semibold">$1100</span>
                                <span> (12 sessions x 2 hours)</span>
                            </h3>
                            <ul className="mt-6 flex flex-col gap-2 text-sm">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Rotation</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Personalised Mastery Action Plan</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority 1-1 consult booking</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Content Summaries for every topic</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated Vivota Mentor</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-warning btn-block">Enrol Now</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div>
                <h1 className="text-xl md:text-4xl text-center font-bold mb-8">Need help with multiple subjects?</h1>
                <h2 className="text-lg text-white text-center mb-8">Get more for greater value!</h2>
                <PricingTable />
            </div>
        </div>
    )
}   