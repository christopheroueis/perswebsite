import React from 'react';
import { Section } from '../ui/Section';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';

export const Projects = () => {
    return (
        <Section id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Impactful work across defense, intelligence, and international development
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
