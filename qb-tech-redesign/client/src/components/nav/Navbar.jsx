import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const links = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Careers', href: '#careers', id: 'careers' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        links.forEach((link) => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 px-8 py-5 flex justify-between items-center">
            <div className="text-white font-bold text-xl tracking-tighter">QB TECH</div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-10">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`text-sm font-medium transition-all duration-300 ${activeSection === link.id
                                ? 'text-blue-500 scale-110'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Updated Primary CTA */}
            <a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] active:scale-95"
            >
                Get Started
            </a>
        </nav>
    );
};

export default Navbar;