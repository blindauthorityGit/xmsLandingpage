import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const PercentageCircle = ({ percentage, color }) => {
    const circleControls = useAnimation();
    const circleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        circleControls.start({
                            strokeDashoffset: 2 * Math.PI * 45 - (2 * Math.PI * 45 * percentage) / 100,
                        });
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (circleRef.current) {
            observer.observe(circleRef.current);
        }

        return () => {
            if (circleRef.current) {
                observer.unobserve(circleRef.current);
            }
        };
    }, [circleControls, percentage]);

    return (
        <div ref={circleRef} style={{ width: "200px", height: "200px", position: "relative" }}>
            <svg viewBox="0 0 100 100" style={{ position: "absolute", top: "0", left: "0" }}>
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#f2f2f2"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={0}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke={color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 45}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={circleControls}
                    transition={{ duration: 1 }}
                />
            </svg>
            <div style={{ position: "absolute", top: "40%", left: "0", right: "0", textAlign: "center" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{percentage}%</span>
            </div>
        </div>
    );
};

export default PercentageCircle;
