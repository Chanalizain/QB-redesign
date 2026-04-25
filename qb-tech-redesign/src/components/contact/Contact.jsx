const Contact = () => (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
        <p className="text-gray-400 mb-12">Let's discuss how QB Tech can accelerate your next project.</p>
        <form className="grid gap-4 text-left">
            <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Tell us about your project..." rows="4" className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500"></textarea>
            <button className="bg-blue-500 p-4 rounded-xl font-bold hover:bg-blue-600 transition-all mt-4">Send Message</button>
        </form>
    </section>
);
export default Contact;