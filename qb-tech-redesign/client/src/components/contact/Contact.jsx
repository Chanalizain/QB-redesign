import React, { useState } from 'react';
import { sendInquiry } from '../../services/api'; 

const Contact = () => {
    // state for form data and feedback
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            await sendInquiry(formData);
            setStatus({ type: 'success', msg: 'Message sent! We will contact you soon.' });
            setFormData({ name: '', email: '', message: '' }); 
        } catch (err) {
            setStatus({ type: 'error', msg: 'Failed to send. Please try again.' });
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-gray-400 mb-12">Let's discuss how QB Tech can accelerate your next project.</p>

            <form onSubmit={handleSubmit} className="grid gap-4 text-left">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500"
                ></textarea>

                <button
                    disabled={loading}
                    className={`p-4 rounded-xl font-bold transition-all mt-4 ${loading ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

                {/* Feedback Message */}
                {status.msg && (
                    <p className={`mt-4 text-center font-semibold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status.msg}
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;