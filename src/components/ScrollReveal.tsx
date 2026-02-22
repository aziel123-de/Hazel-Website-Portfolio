import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    duration?: number;
}

const ScrollReveal = ({
    children,
    width = "100%",
    direction = "up",
    delay = 0.2,
    duration = 0.8
}: ScrollRevealProps) => {

    const getInitialProps = () => {
        switch (direction) {
            case "left": return { x: -100, y: 0 };
            case "right": return { x: 100, y: 0 };
            case "down": return { x: 0, y: -100 };
            case "up":
            default: return { x: 0, y: 100 };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialProps(),
            scale: 0.9,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
        },
    };

    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    type: "spring",
                    duration,
                    delay,
                    stiffness: 100,
                    damping: 20,
                    bounce: 0.3
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
