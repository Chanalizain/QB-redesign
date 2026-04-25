const About = () => {
    const coreValues = [
        {
            title: "Excellence",
            desc: "We pursue the highest standards in every line of code and every client interaction.",
            icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> // Star/Quality
        },
        {
            title: "Innovation",
            desc: "We embrace emerging technologies and creative problem-solving to stay ahead.",
            icon: <path d="M9.663 17h4.674M12 3v1m8 8h-1M4 12H3m3.343-5.657l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707.707m12.728-12.728l-.707.707M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" /> // Lightbulb
        },
        {
            title: "Collaboration",
            desc: "Great solutions are built together – with our clients, partners, and each other.",
            icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m15-12a4 4 0 1 0-8 0 4 4 0 0 0 8 0m6 12v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /> // Users
        },
        {
            title: "Integrity",
            desc: "Transparency, honesty, and ethical practices guide every decision we make.",
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> // Shield
        },
        {
            title: "Impact",
            desc: "We measure success by the tangible value we create for businesses and communities.",
            icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" /> // Activity/Pulse
        }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-[#09090b]">
            <div className="max-w-6xl mx-auto">
                {/* Who We Are Intro */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <p className="text-accentBlue font-bold uppercase tracking-widest text-xs mb-4">About Us</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Who We Are</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Quantum Bridge Tech Solution (QB Tech) is a forward-thinking technology company founded on the belief that the right technology can bridge the gap between ambition and achievement.
                    </p>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <div className="bg-cardBg p-10 rounded-2xl border border-white/5 group hover:border-accentBlue/30 transition-all hover:-translate-y-2 duration-500">
                        <div className="w-12 h-12 bg-accentBlue/10 rounded-lg flex items-center justify-center text-accentBlue mb-8 group-hover:bg-accentBlue group-hover:text-white transition-all duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-accentBlue transition-colors">Our Vision</h3>
                        <p className="text-gray-400 text-base leading-relaxed">To become the most trusted technology partner in the world through innovation and excellence.</p>
                    </div>

                    <div className="bg-cardBg p-10 rounded-2xl border border-white/5 group hover:border-accentBlue/30 transition-all hover:-translate-y-2 duration-500">
                        <div className="w-12 h-12 bg-accentBlue/10 rounded-lg flex items-center justify-center text-accentBlue mb-8 group-hover:bg-accentBlue group-hover:text-white transition-all duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-accentBlue transition-colors">Our Mission</h3>
                        <p className="text-gray-400 text-base leading-relaxed">To empower organizations with cutting-edge technology solutions that accelerate growth.</p>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="py-24 border-t border-white/5">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <p className="text-accentBlue font-bold uppercase tracking-widest text-xs mb-4">What Drives Us</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="p-8 rounded-xl bg-cardBg border border-white/5 group hover:border-accentBlue/40 transition-all hover:-translate-y-2 duration-500 flex flex-col items-start cursor-default relative overflow-hidden">
                                <div className="absolute inset-0 bg-accentBlue/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                                <div className="w-10 h-10 bg-accentBlue/10 rounded-lg flex items-center justify-center text-accentBlue mb-6 group-hover:bg-accentBlue group-hover:text-white transition-all duration-500">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {value.icon}
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-accentBlue transition-colors">{value.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join CTA */}
                <div className="text-center pt-24 border-t border-white/5">
                    <h3 className="text-3xl font-extrabold mb-5 text-white">Want to Join Our Team?</h3>
                    <a href="#careers" className="inline-block bg-accentBlue text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] uppercase tracking-tighter active:scale-95">
                        View Open Positions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;