import { useState, useEffect } from 'react';


const Hero = () => {
    const roles = ["Front-end Developer", "UI & UX Designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setTypSpeed(50);
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                setTypSpeed(150);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                setTypSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Hexagon shapes (decorative) */}
            <div className="absolute top-20 right-[10%] w-32 h-32 bg-cyan-accent/5 rotate-12 blur-2xl rounded-3xl -z-10"></div>
            <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-purple-500/5 -rotate-12 blur-3xl rounded-full -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left z-10">
                    <div className="inline-flex flex-col mb-10 group/terminal">
                        {/* Terminal Style Header */}
                        <div className="flex gap-1.5 bg-white/10 px-3 py-2 rounded-t-md border-x border-t border-white/10">
                            <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                        </div>
                        {/* Terminal Content */}
                        <div className="inline-flex items-center gap-2 font-mono text-xs bg-white/5 border border-white/10 px-4 py-3 rounded-b-md backdrop-blur-sm select-none group-hover/terminal:border-cyan-accent/30 transition-colors">
                            <span className="text-gray-600">01</span>
                            <span className="text-purple-400">import</span>
                            <span className="text-white">{'{'}</span>
                            <span className="text-cyan-accent">Welcome</span>
                            <span className="text-white">{'}'}</span>
                            <span className="text-purple-400">from</span>
                            <span className="text-yellow-200">'portfolio'</span>
                            <span className="w-1.5 h-3 bg-cyan-accent animate-pulse ml-1 opacity-50"></span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 font-mono text-sm sm:text-base mb-6 group/name">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-purple-400">const</span>
                            <span className="text-cyan-accent font-bold uppercase tracking-widest text-xs sm:text-sm">Name</span>
                            <span className="text-white">=</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight break-words text-center md:text-left">
                                <span className="bg-gradient-to-r from-white via-white to-cyan-accent/40 bg-clip-text text-transparent">
                                    "Hazel Ann Sadangsal"
                                </span>
                            </h1>
                            <span className="text-white">;</span>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 flex flex-wrap items-center justify-center md:justify-start gap-x-3">
                        <span className="text-gray-400">Aspiring</span>
                        <span className="text-cyan-accent min-w-[150px] sm:min-w-[200px] text-center md:text-left">
                            {displayText}
                            <span className="w-[3px] h-[1em] bg-cyan-accent inline-block ml-1 animate-pulse align-middle"></span>
                        </span>
                    </h2>

                    <div className="relative mb-10 max-w-xl mx-auto md:mx-0 group/info">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-accent/50 to-purple-500/50 rounded-full opacity-50 group-hover/info:opacity-100 transition-opacity hidden md:block"></div>
                        <p className="text-gray-400 text-lg leading-relaxed md:pl-6 font-mono text-sm sm:text-base text-center md:text-left">
                            <span className="text-cyan-accent/60 block mb-2">/**</span>
                            <span>“Code with purpose. Design with clarity.”</span>
                            <span className="block mt-2">Transforming ideas into powerful, responsive web experiences.</span>
                            <span className="text-cyan-accent/60 block mt-2"> */</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto text-center bg-transparent border border-cyan-accent text-cyan-accent px-8 py-3 font-mono text-sm hover:bg-cyan-accent/10 transition-all group cursor-tech-hover"
                        >
                            View My Work <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto text-center bg-transparent border border-gray-700 text-gray-300 px-8 py-3 font-mono text-sm hover:border-gray-500 transition-colors cursor-tech-hover"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center relative group">
                    {/* Main Image Container with 3D Perspective */}
                    <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 [perspective:1000px]">
                        <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-10deg)_rotateX(5deg)]">

                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-x-[-20px] inset-y-[-20px] border border-cyan-accent/10 pointer-events-none rounded-2xl hidden md:block">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-accent/40"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-accent/40"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-accent/40"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-accent/40"></div>
                            </div>

                            {/* Scanning Laser Effect */}
                            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
                                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-accent/30 to-purple-500/30 blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>

                            {/* Profile Image with Glass Border */}
                            <div className="absolute inset-0 p-[2px] rounded-xl bg-gradient-to-br from-white/20 via-transparent to-white/10">
                                <img
                                    src="/js.png"
                                    alt="Hazel Ann Sadangsal"
                                    className="w-full h-full object-cover rounded-[10px] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Data HUD (Lower left) */}
                            <div className="absolute bottom-4 left-4 z-30 bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[8px] font-mono text-cyan-accent/60 tracking-widest uppercase">Target_ID</p>
                                    <p className="text-[10px] font-mono text-white text-xs">HAZEL_ANN_S.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
