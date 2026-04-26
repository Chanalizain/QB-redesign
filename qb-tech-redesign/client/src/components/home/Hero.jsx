const Hero = () => (
    <section id="home" className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center overflow-hidden bg-[#09090b]">
        {/* Cinematic Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

        <h1 className="text-white text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Bridging Today's Vision <br />
            <span className="text-blue-500">to Tomorrow's Technology</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            We architect cutting-edge software solutions that propel businesses into the future. From AI-driven platforms to cloud infrastructure — we build what's next.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
            <a href="#services" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Explore Services
            </a>
            <a href="#contact" className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold transition-all">
                Contact Us
            </a>
        </div>
    </section>
);
export default Hero;