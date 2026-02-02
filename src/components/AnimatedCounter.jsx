import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        if (!inView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuad = (t) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progress) * end);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [inView, end, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};
