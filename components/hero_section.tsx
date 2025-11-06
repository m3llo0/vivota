export default function HeroSection() {
    return (
        <>
            <section className="h-screen flex flex-col md:flex-row items-center justify-center w-full text-white">
                <p className="md:w-1/2 ml-12 flex justify-center text-3xl">
                    Expert Tuition, Inspired by Medical Excellence<br />
                    + Financial Consultant Selling Insurance,<br />
                     <br />
                    Empowering students to reach max net worth<br />
                    with top-quality, holistic education.</p>
                    <img src="hero_trial.jpg" className="md: w-1/2 transform scale-75 rounded-xl mr-12"></img>
            </section>
        </>
    );
}
