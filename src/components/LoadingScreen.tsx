import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const loadingMessages = [
        "Initializing core modules...",
        "Establishing secure connection...",
        "Loading UI components...",
        "Optimizing assets...",
        "Applying visual excellence...",
        "System Ready."
    ];

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.random() * 15;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(onComplete, 800);
            }
            setProgress(currentProgress);
        }, 200);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        let logIndex = 0;
        const logInterval = setInterval(() => {
            if (logIndex < loadingMessages.length) {
                setLogs(prev => [...prev, loadingMessages[logIndex]]);
                logIndex++;
            } else {
                clearInterval(logInterval);
            }
        }, 400);

        return () => clearInterval(logInterval);
    }, []);

    return (
        <div className="fixed inset-0 bg-[#020817] z-[9999] flex flex-col items-center justify-center p-6 font-mono overflow-hidden">
            <div className="max-w-xl w-full relative z-10">
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                        <h1 className="text-xl font-bold text-[#22d3ee] tracking-tighter">
                            HAZEL_SYS_BOOT <span className="text-xs opacity-50 ml-2 font-normal">v1.0.4</span>
                        </h1>
                        <span className="text-[#22d3ee] text-sm animate-pulse">STATUS: ACTIVE</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full relative rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#22d3ee] transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="space-y-3 mb-12 h-48 overflow-hidden bg-black/20 p-6 rounded-sm border border-white/5">
                    {logs.map((log, idx) => (
                        <p key={idx} className="text-gray-400 text-sm flex gap-3">
                            <span className="text-[#22d3ee]/40">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                            <span className="text-[#22d3ee]/60 mr-1">{'>'}</span>
                            <span className="animate-in fade-in slide-in-from-left-2 duration-300">{log}</span>
                        </p>
                    ))}
                    {progress < 100 && (
                        <span className="inline-block w-2 h-4 bg-[#22d3ee] animate-pulse ml-1 opacity-50"></span>
                    )}
                </div>

                <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                    <span>Memory: 256GB / 1024GB</span>
                    <span className="text-[#22d3ee]">Loading {Math.round(progress)}%</span>
                </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Scanning Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
                <div className="w-full h-1/2 bg-gradient-to-b from-[#22d3ee]/0 to-[#22d3ee]/5 absolute top-[-50%] left-0 animate-[scan_3s_linear_infinite]"></div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { top: -50%; }
                    100% { top: 100%; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
