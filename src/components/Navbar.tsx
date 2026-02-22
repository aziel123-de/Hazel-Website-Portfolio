import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const menuItems = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' },
        { title: 'Skills', href: '#skills' },
        { title: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full bg-primary-dark/80 backdrop-blur-md z-50 border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center font-mono text-lg sm:text-xl tracking-tight">
                            <span className="text-cyan-accent font-bold">hazel</span>
                            <span className="text-gray-500">.</span>
                            <span className="text-purple-400">portfolio</span>
                            <span className="text-gray-400">(</span>
                            <span className="text-gray-400">)</span>
                            <span className="w-1.5 h-4 bg-cyan-accent/50 ml-1 animate-pulse"></span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
                            {menuItems.map((item) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className={`relative px-4 py-2 text-sm font-mono tracking-tighter uppercase transition-all duration-300 group ${isActive ? 'text-cyan-accent' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        <span className="relative z-10">{item.title}</span>
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                                        )}
                                        <span className={`absolute inset-0 bg-cyan-accent/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-0 ${isActive ? 'scale-100 opacity-100' : 'opacity-0'}`}></span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-primary-dark/95 backdrop-blur-xl border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {menuItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className={`block px-4 py-3 rounded-lg text-base font-mono transition-all ${isActive ? 'bg-cyan-accent/10 text-cyan-accent border-l-2 border-cyan-accent' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
