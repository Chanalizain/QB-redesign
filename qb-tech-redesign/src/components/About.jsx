const About = () => (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                QB Tech is a leading technology company dedicated to helping businesses grow through
                digital transformation. Our mission is to provide intuitive and impactful solutions.
            </p>
        </div>
        <div className="flex-1 bg-accentBlue/10 border border-accentBlue/20 p-8 rounded-2xl">
            <h3 className="text-accentBlue font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h3>
            <p className="text-white text-xl font-medium">
                "To bridge today's vision to tomorrow's technology."
            </p>
        </div>
    </section>
);
export default About;