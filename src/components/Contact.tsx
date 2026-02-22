import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Terminal, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorDetail, setErrorDetail] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSending(true);
        setStatus('idle');
        setErrorDetail('');

        const formData = new FormData(form.current);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('error');
            setErrorDetail('Please fill out all fields before sending.');
            setIsSending(false);
            return;
        }

        const SERVICE_ID = 'service_9oyzawc';
        const TEMPLATE_ID = 'template_fjr4gt7';
        const PUBLIC_KEY = 'c7vDFoMXqaGLG-NzJ';

        emailjs.init(PUBLIC_KEY);

        const templateParams = {
            name: name,
            email: email,
            message: message,
            time: new Date().toLocaleString()
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                form.current?.reset();
            })
            .catch((error) => {
                const errorMessage = error?.text || error?.message || JSON.stringify(error);
                console.error('EmailJS Error Details:', error);
                setStatus('error');
                setErrorDetail(errorMessage);
            })
            .finally(() => {
                setIsSending(false);
                setTimeout(() => setStatus('idle'), 10000);
            });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-primary-dark/80">
            {/* ... section header ... */}
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <p className="text-cyan-accent font-mono text-sm mb-2 uppercase tracking-widest">Connect</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        Let's <span className="text-cyan-accent">Connect</span>
                    </h2>
                    <div className="w-20 h-1 bg-cyan-accent mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-20">
                    <ScrollReveal direction="left">
                        <div>
                            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                                I'm always interested in hearing about new projects and opportunities.
                                Whether you have a question or just want to say hi, feel free to drop a message!
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: Mail, label: 'email', value: 'hazelann.dg.sadangsal@gmail.com', color: 'text-cyan-accent' },
                                    { icon: MapPin, label: 'location', value: 'Taguig, Philippines', color: 'text-yellow-200' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-6 group">
                                        <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10 group-hover:border-cyan-accent/50 transition-colors">
                                            <item.icon size={24} className="text-cyan-accent sm:w-7 sm:h-7" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <p className={`text-[10px] sm:text-xs font-mono uppercase tracking-widest ${item.color}`}>{item.label}</p>
                                                <span className="text-white">:</span>
                                            </div>
                                            <p className="text-base sm:text-lg font-medium text-white break-all sm:break-normal">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-6 mt-16">
                                {[
                                    { Icon: Github, href: 'https://github.com/aziel123-de' },
                                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/hazelannsadangsal' }

                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-cyan-accent/50 hover:bg-cyan-accent/10 transition-all group"
                                    >
                                        <item.Icon size={24} className="text-white group-hover:text-cyan-accent" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col group/form">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between bg-white/[0.05] border-x border-t border-white/10 px-5 py-3 rounded-t-xl group-hover/form:border-cyan-accent/20 transition-colors backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <Terminal size={16} className="text-cyan-accent" />
                                    <span className="text-xs font-mono text-gray-400">message_sender.js</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                                </div>
                            </div>

                            <div className="flex-1 bg-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-b-xl group-hover/form:border-cyan-accent/20 transition-colors backdrop-blur-sm space-y-6 sm:space-y-8">
                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        { id: 'name', name: 'name', label: 'from', type: 'text', placeholder: '"Your Name"', highlightColor: 'text-cyan-accent' },
                                        { id: 'email', name: 'email', label: 'email', type: 'email', placeholder: '"your@email.com"', highlightColor: 'text-purple-400' }
                                    ].map((field) => (
                                        <div key={field.id} className="relative group/field px-3 sm:px-4 border-l-2 border-transparent hover:border-cyan-accent/30 transition-all">
                                            <div className="flex items-center gap-3 mb-2 font-mono text-xs sm:text-sm">
                                                <span className={field.highlightColor}>{field.label}</span>
                                                <span className="text-white">:</span>
                                            </div>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                name={field.name}
                                                required
                                                className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:border-cyan-accent/50 transition-all font-mono text-xs sm:text-sm placeholder:text-gray-600"
                                                placeholder={field.placeholder}
                                            />
                                        </div>
                                    ))}

                                    <div className="relative group/field px-3 sm:px-4 border-l-2 border-transparent hover:border-cyan-accent/30 transition-all">
                                        <div className="flex items-center gap-3 mb-2 font-mono text-xs sm:text-sm">
                                            <span className="text-yellow-200">content</span>
                                            <span className="text-white">:</span>
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:border-cyan-accent/50 transition-all font-mono text-xs sm:text-sm placeholder:text-gray-600"
                                            placeholder='"Write your message here..."'
                                        ></textarea>
                                    </div>
                                    <input type="hidden" name="time" value={new Date().toLocaleString()} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full mt-4 sm:mt-6 bg-transparent border font-mono py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn ${isSending
                                        ? 'border-gray-500 text-gray-500 cursor-not-allowed'
                                        : 'border-cyan-accent/50 text-cyan-accent hover:bg-cyan-accent hover:text-primary-dark'
                                        }`}
                                >
                                    <span className={!isSending ? "text-cyan-accent group-hover:text-primary-dark" : "text-gray-500"}>
                                        {isSending ? 'sending...' : 'hazel'}
                                    </span>
                                    {!isSending && (
                                        <span className="text-white group-hover:text-primary-dark transition-colors">.sendMessage()</span>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400 font-mono text-sm animate-in fade-in slide-in-from-top-2">
                                        <CheckCircle size={18} />
                                        <span>Message successfully sent.</span>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400 font-mono text-sm animate-in fade-in slide-in-from-top-2">
                                        <AlertCircle size={18} />
                                        <span>Deployment failed: {errorDetail}</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </ScrollReveal>
                </div>

                <div className="mt-32 pt-10 border-t border-white/10 text-center">
                    <p className="text-gray-500 font-mono text-sm">&copy; 2025 Hazel Portfolio .</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
