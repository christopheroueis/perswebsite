import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const Section = ({ children, id, className = '' }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className={`section-padding ${className}`}
        >
            <div className="container-custom">
                {children}
            </div>
        </motion.section>
    );
};
