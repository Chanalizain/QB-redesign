const Careers = () => {
    const opportunities = [
        { title: "DevOps Engineer", desc: "Design and build scalable backend systems and APIs powering our enterprise platforms." },
        { title: "Mobile Developer", desc: "Create responsive, high-performance web applications using modern frontend frameworks." },
        { title: "Frontend Developer", desc: "Develop and deploy modern, responsive frontend interfaces using React and TypeScript." },
        { title: "Backend Developer", desc: "Craft robust server-side applications, APIs, and database architectures." },
        { title: "Full-Stack Developer", desc: "Build end-to-end web applications spanning frontend, backend, and cloud infrastructure." }
    ];

    return (
        <section id="careers" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto">
                <p className="text-blue-500 font-bold text-center uppercase tracking-widest text-xs mb-4">Opportunities</p>
                <h2 className="text-4xl font-bold mb-16 text-center">Open Positions</h2>

                <div className="space-y-4 mb-20">
                    {opportunities.map((job, i) => (
                        <div key={i} className="group p-8 rounded-xl bg-[#0f0f12] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col md:flex-row justify-between md:items-center gap-6 cursor-pointer hover:bg-white/[0.03]">
                            <div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{job.title}</h3>
                                <p className="text-gray-400 text-sm max-w-2xl">{job.desc}</p>
                                <div className="flex gap-4 mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                                    <span>Engineering</span> • <span>Full-Time</span> • <span>Remote</span>
                                </div>
                            </div>
                            <button className="bg-blue-500/10 text-blue-500 px-6 py-2 rounded-lg font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-all whitespace-nowrap">
                                Apply Now →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Careers;