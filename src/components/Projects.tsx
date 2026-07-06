import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import inspireImage from '../assets/Inspire.png';

const Projects = () => {
    const projects = [
        {
            title: 'PC Planner',
            description: 'Web app for building custom PCs with clean interface, component database, compatibility checks, and budget tools.',
            image: '/pcplanner landing page.png',
            imagePosition: 'left',
            tech: ['React', 'Node.js', 'Firebase Authentication', 'MySQL'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'Library Management System',
            description: 'System for managing book records, student information, and transactions with normalized database and Windows Forms interface.',
            image: '/lbm.jpg',
            tech: ['C#', 'CSS', 'SQL Server'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'Tech Quester',
            description: 'TechQuester is an online learning platform designed for aspiring and experienced tech users who want to enhance their skills in coding, databases, and other technology-related fields.',
            image: '/tech.jpg',
            tech: ['React', 'Node.js', 'MySQL'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'HealthCheck',
            description: 'HealthCheck is a student-focused digital platform designed to help learners monitor and manage their emotional well-being in school.',
            image: '/healthcheck.png',
            tech: ['Figma'],
            liveUrl: 'https://www.figma.com/design/SZ2M2oZy39NZJswIDmtT2B/App-dev',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'Inspire Valentines Voting System',
            description: 'Inspire Voting System is a digital pageant voting platform developed for the company’s Valentine’s Pageant.',
            image: '/valentines voting.png',
            tech: ['Next.js', 'Typescript', 'Firebase'],
            liveUrl: 'https://pageant-inspire.vercel.app/',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'IHI Website',
            description: "The Inspire Holdings Inc. website serves as the company's official online platform, designed to introduce the organization, showcase its business portfolio, and provide information about its services, subsidiaries, and investment opportunities.",
            image: inspireImage,
            imagePosition: 'left',
            tech: ['Next.js', 'Firebase', 'Typescript'],
            liveUrl: 'https://www.inspireholdings.ph/',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'Inspire Admin',
            description: 'Add your project description here.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            tech: ['Add tech stack'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: "I'M Pay",
            description: 'Add your project description here.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            tech: ['Add tech stack'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: "I'M Pay Landing Page",
            description: 'Add your project description here.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            tech: ['Add tech stack'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: "I'M Pay Admin",
            description: 'Add your project description here.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            tech: ['Add tech stack'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        },
        {
            title: 'Culinara',
            description: 'Add your project description here.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80',
            tech: ['Add tech stack'],
            liveUrl: '#',
            githubUrl: 'https://github.com/aziel123-de'
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col items-center mb-16">
                    <p className="text-cyan-accent font-mono text-sm mb-2 uppercase tracking-widest">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        Featured <span className="text-cyan-accent">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-accent mt-4"></div>
                    <div className="mt-10 max-w-2xl w-full relative group/code">
                        <div className="absolute top-0 right-4 p-2 text-[10px] text-gray-600 font-mono uppercase tracking-tighter opacity-0 group-hover/code:opacity-100 transition-opacity z-10">
                            projects_manifest.json
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-lg font-mono relative overflow-hidden backdrop-blur-sm">
                            <span className="text-cyan-accent/40 text-xs sm:text-sm block mb-2">/**</span>
                            <p className="text-gray-400 text-xs sm:text-base leading-relaxed italic pl-3 sm:pl-4 border-l border-cyan-accent/10">
                                A collection of projects that highlight my skills in UI/UX design and front-end development,
                                focusing on usability, clarity, and real-world solutions.
                            </p>
                            <span className="text-cyan-accent/40 text-xs sm:text-sm block mt-2"> */</span>

                            {/* Decorative terminal dots */}
                            <div className="absolute top-3 left-3 flex gap-1.5 opacity-30">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                            <div className="bg-primary-dark/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-accent/30 transition-all duration-300 group h-full">
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500${'imagePosition' in project && project.imagePosition === 'left' ? ' object-left' : ''}`}
                                    />
                                    <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                                        <a href={project.liveUrl} className="p-3 bg-cyan-accent text-primary-dark rounded-full hover:bg-white transition-colors">
                                            <ExternalLink size={24} />
                                        </a>
                                        <a href={project.githubUrl} className="p-3 bg-white text-primary-dark rounded-full hover:bg-cyan-accent transition-colors">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-cyan-accent/5 text-cyan-accent text-xs font-mono border border-cyan-accent/10 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
