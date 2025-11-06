export default function SubjectsSection() {

    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-48">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Our JC Courses</h1>
            <h2 className="text-xl text-white text-center">Vivota specialises in delivering quality education tailored for Junior College students.</h2>
            <h2 className="text-xl text-white text-center mb-12">Explore the 5 subjects taught in-depth by our Content Experts!</h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3"> {/*Row 1*/}

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                    {/* Image / Thumbnail */}
                    <img src="https://via.placeholder.com/400x300" alt="Course 1" className="w-full h-64 object-cover" />

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl text-black font-semibold mb-4">Physics</h3>
                        <p className="text-gray-700 flex-grow">
                            This is a short description of the course. It explains what students will learn and why this course is valuable. Keep it concise and engaging.
                        </p>

                        {/* Button at bottom */}
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                    {/* Image / Thumbnail */}
                    <img src="https://via.placeholder.com/400x300" alt="Course 1" className="w-full h-64 object-cover" />

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl text-black font-semibold mb-4">Chemistry</h3>
                        <p className="text-gray-700 flex-grow">
                            This is a short description of the course. It explains what students will learn and why this course is valuable. Keep it concise and engaging.
                        </p>

                        {/* Button at bottom */}
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                    {/* Image / Thumbnail */}
                    <img src="https://via.placeholder.com/400x300" alt="Course 1" className="w-full h-64 object-cover" />

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl text-black font-semibold mb-4">Biology</h3>
                        <p className="text-gray-700 flex-grow">
                            This is a short description of the course. It explains what students will learn and why this course is valuable. Keep it concise and engaging.
                        </p>

                        {/* Button at bottom */}
                        <div className="mt-4">
                            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 flex justify-center gap-6"> {/*Row 2*/}

                    <div className="bg-white rounded-lg shadow-lg w-1/3 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                        {/* Image / Thumbnail */}
                        <img src="https://via.placeholder.com/400x300" alt="Course 1" className="w-full h-64 object-cover" />

                        {/* Card Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl text-black font-semibold mb-4">Math</h3>
                            <p className="text-gray-700 flex-grow">
                                This is a short description of the course. It explains what students will learn and why this course is valuable. Keep it concise and engaging.
                            </p>

                            {/* Button at bottom */}
                            <div className="mt-4">
                                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg w-1/3 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                        {/* Image / Thumbnail */}
                        <img src="https://via.placeholder.com/400x300" alt="Course 1" className="w-full h-64 object-cover" />

                        {/* Card Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl text-black font-semibold mb-4">General Paper</h3>
                            <p className="text-gray-700 flex-grow">
                                This is a short description of the course. It explains what students will learn and why this course is valuable. Keep it concise and engaging.
                            </p>

                            {/* Button at bottom */}
                            <div className="mt-4">
                                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}