import { Download, GraduationCap, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <p className="text-cyan-accent font-mono text-sm mb-2 uppercase tracking-widest">Discover</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        About <span className="text-cyan-accent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-accent mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-accent/20 to-purple-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/hel.png"
                                alt="Hazel Ann Sadangsal"
                                className="relative rounded-xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-top object-cover"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                                Passionate about creating purposeful digital experiences
                            </h3>
                            <div className="relative mb-8 bg-white/[0.02] border border-white/5 p-6 rounded-lg font-mono group/code overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 text-[10px] text-gray-600 font-mono uppercase tracking-tighter opacity-0 group-hover/code:opacity-100 transition-opacity">
                                    bio.ts
                                </div>
                                <div className="flex gap-2 sm:gap-4">
                                    <div className="hidden xs:flex flex-col text-gray-700 text-[10px] sm:text-xs select-none text-right pt-1 border-r border-white/5 pr-2 sm:pr-4">
                                        <span>01</span>
                                        <span>02</span>
                                        <span>03</span>
                                        <span>04</span>
                                        <span>05</span>
                                        <span>06</span>
                                        <span>07</span>
                                        <span>08</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-cyan-accent/40 text-xs sm:text-sm block mb-1">/**</span>
                                        <div className="text-gray-400 text-sm sm:text-base leading-relaxed italic space-y-4">
                                            <p>
                                                <span className="text-cyan-accent/40 mr-2">*</span>
                                                I'm an Information Technology student from STI College Global City skilled in
                                                UI/UX design, front-end development, and project documentation. I create
                                                responsive and user-friendly websites that work well on any device.
                                            </p>
                                            <p>
                                                <span className="text-cyan-accent/40 mr-2">*</span>
                                                I enjoy designing clean layouts and writing code that is easy to understand
                                                and maintain. I also help test websites and applications to make sure they
                                                work properly and find issues before they are released.
                                            </p>
                                            <p>
                                                <span className="text-cyan-accent/40 mr-2">*</span>
                                                I write clear documentation to explain technical tasks and processes. This helps
                                                me create solutions that are both useful and easy for people to use.
                                            </p>
                                        </div>
                                        <span className="text-cyan-accent/40 text-xs sm:text-sm block mt-1"> */</span>
                                    </div>
                                </div>

                                {/* Ambient glow inside code block */}
                                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-accent/5 blur-2xl rounded-full"></div>
                            </div>

                            <div className="space-y-6 mb-10">
                                {[
                                    { icon: GraduationCap, title: 'Education', desc: 'BS in Information Technology' },
                                    { icon: Target, title: 'Goals', desc: 'Building responsive and interactive user-friendly web applications' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-5">
                                        <div className="bg-cyan-accent/10 p-3 rounded-lg text-cyan-accent border border-cyan-accent/20">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm font-mono">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/resume.pdf"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan-accent text-primary-dark px-8 py-4 rounded-sm font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                            >
                                <Download size={20} /> Download CV
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
