import React from 'react';
import { Section } from '../ui/Section';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../../data/education';

export const Education = () => {
    return (
        <Section id="education">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    <span className="gradient-text">Education</span>
                </h2>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="relative">
                            {/* Decorative accent line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-deep-red via-deep-red-dark to-transparent rounded-full" />

                            <div className="ml-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-deep-red/50 transition-all duration-300 hover:shadow-xl hover:shadow-deep-red/10">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Logo Section */}
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white p-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <img
                                                    src={`/${edu.logo}`}
                                                    alt={`${edu.institution} logo`}
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div style={{ display: 'none' }} className="w-full h-full items-center justify-center">
                                                    <GraduationCap className="w-16 h-16 text-gray-600" />
                                                </div>
                                            </div>
                                            {edu.status === 'current' && (
                                                <div className="absolute -top-2 -right-2 bg-deep-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                                    Current
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1">
                                        <div className="mb-3">
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-deep-red transition-colors">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-base md:text-lg text-gray-300 font-medium">
                                                {edu.degree}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                            <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg">
                                                <MapPin size={16} className="text-deep-red" />
                                                <span>{edu.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg">
                                                <Calendar size={16} className="text-deep-red" />
                                                <span>{edu.period}</span>
                                            </div>
                                        </div>

                                        {edu.highlights && edu.highlights.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {edu.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 bg-deep-red/10 border border-deep-red/30 text-deep-red px-3 py-1.5 rounded-lg text-sm font-medium">
                                                        <Award size={14} />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
