const Navbar = () => {
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 px-8 py-5 flex justify-between items-center">
            <div className="text-white font-bold text-xl tracking-tighter">QB TECH</div>
            <div className="hidden md:flex gap-10">
                {links.map((link) => (
                    <a key={link.name} href={link.href} className="text-gray-400 text-sm font-medium hover:text-white transition-colors">
                        {link.name}
                    </a>
                ))}
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
                Get Started
            </button>
        </nav>
    );
};
export default Navbar;