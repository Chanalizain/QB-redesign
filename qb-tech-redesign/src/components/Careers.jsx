const Careers = () => {
    const jobs = ["Software Engineer", "UI/UX Designer", "Cloud Architect"];
    return (
        <section id="careers" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-4xl mx-auto border border-white/10 rounded-3xl overflow-hidden">
                <div className="bg-white/5 p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold">Open Positions</h2>
                </div>
                {jobs.map((job, i) => (
                    <div key={i} className="p-6 flex justify-between items-center border-b border-white/5 hover:bg-white/5 transition-colors">
                        <span className="font-medium">{job}</span>
                        <button className="text-accentBlue text-sm font-semibold hover:underline">Apply Now →</button>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Careers;