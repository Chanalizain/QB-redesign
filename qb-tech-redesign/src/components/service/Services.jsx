const Services = () => {
    const serviceItems = [
        {
            title: "Custom Software",
            desc: "Full-stack application development from concept to deployment and beyond.",
            tags: ["React", "Node.js"],
            icon: (<><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></>)
        },
        {
            title: "AI & Automation",
            desc: "Custom AI models and intelligent automation solutions tailored to your business needs.",
            tags: ["AI", "Workflow"],
            icon: (<><circle cx="12" cy="12" r="3" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" /></>)
        },
        {
            title: "Digital Transformation",
            desc: "Strategic consulting to modernize legacy systems and accelerate innovation.",
            tags: ["Cloud", "Modernization"],
            icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-[#09090b]">
            <div className="max-w-6xl mx-auto">
                <p className="text-blue-500 font-bold text-center uppercase tracking-widest text-xs mb-4">What We Do</p>
                <h2 className="text-4xl font-bold mb-16 text-center text-white tracking-tight">Our Services</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {serviceItems.map((s, i) => (
                        <div key={i} className="relative group p-8 rounded-2xl border border-white/10 bg-[#0f0f12] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />

                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {s.icon}
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">{s.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6 text-sm">{s.desc}</p>
                            <div className="flex gap-2">
                                {s.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-500 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;