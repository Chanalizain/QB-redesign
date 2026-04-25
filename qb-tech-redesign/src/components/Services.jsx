const Services = () => {
    const items = [
        { title: "Custom Software", desc: "Full-stack application development from concept to deployment and beyond." },
        { title: "AI & Automation", desc: "Custom AI models and intelligent automation solutions tailored to your business needs." },
        { title: "Digital Transformation", desc: "Strategic consulting to modernize legacy systems and accelerate innovation." }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((s, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/10 bg-cardBg hover:border-accentBlue/50 transition-all group">
                            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accentBlue transition-colors">{s.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;