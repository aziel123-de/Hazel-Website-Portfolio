import {
    Code2,
    Layers,
    Cpu,
    Palette,
    Globe,
    Terminal,
    Database,
    Layout,
    Workflow,
    ShieldCheck,
    FileText,
    MonitorSmartphone
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Code2,
            skills: [
                { name: 'React', icon: Layout },
                { name: 'TypeScript', icon: Terminal },
                { name: 'Tailwind CSS', icon: Palette },
                { name: 'Next.js', icon: Globe },
                { name: 'HTML5/CSS3', icon: Code2 }
            ]
        },
        {
            title: 'Technical Skills',
            icon: Cpu,
            skills: [
                { name: 'C#', icon: Terminal },
                { name: 'SQL Server', icon: Database },
                { name: 'MySQL', icon: Database },
                { name: 'Node.js', icon: Cpu },
                { name: 'Firebase', icon: ShieldCheck },
                { name: 'Java', icon: Terminal },
                { name: 'Python', icon: Terminal }
            ]
        },
        {
            title: 'Design & Expertise',
            icon: Palette,
            skills: [
                { name: 'UI/UX Design', icon: Layers },
                { name: 'Responsive Design', icon: MonitorSmartphone },
                { name: 'Documentation', icon: FileText },
                { name: 'Testing/QA', icon: ShieldCheck },
                { name: 'Usability', icon: Workflow }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col items-center mb-20 text-center">
                    <p className="text-cyan-accent font-mono text-sm mb-2 uppercase tracking-[0.3em]">System Manifest</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-cyan-accent tracking-tight">Capabilities</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-purple-500 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {skillCategories.map((category, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                            delay={index * 0.1}
                        >
                            <div className="flex flex-col h-full group/card">
                                {/* Category Header (Terminal-Like) */}
                                <div className="flex items-center justify-between bg-white/[0.03] border-x border-t border-white/10 px-5 py-3 rounded-t-xl group-hover/card:border-cyan-accent/20 transition-colors backdrop-blur-md">
                                    <div className="flex items-center gap-3">
                                        <category.icon size={18} className="text-cyan-accent opacity-70" />
                                        <h3 className="text-sm font-mono font-bold text-white tracking-wide uppercase">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-white/10"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/10"></div>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="flex-1 bg-white/[0.02] border border-white/10 p-8 rounded-b-xl group-hover/card:border-cyan-accent/20 transition-colors backdrop-blur-sm relative overflow-hidden">
                                    <div className="grid grid-cols-1 gap-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
                                            >
                                                <div className="p-2.5 bg-cyan-accent/5 border border-cyan-accent/10 rounded-lg text-cyan-accent group-hover/item:bg-cyan-accent group-hover/item:text-primary-dark transition-all duration-300">
                                                    <skill.icon size={20} />
                                                </div>
                                                <span className="text-gray-400 font-mono text-sm group-hover/item:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Inner corner accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-accent/5 blur-3xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
