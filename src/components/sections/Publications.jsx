import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FileText, Award, Newspaper, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { publications, awards } from '../../data/publications';

export const Publications = () => {
    return (
        <Section id="publications" className="bg-gradient-to-b from-navy-900/50 to-transparent">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Publications & <span className="gradient-text">Recognition</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Academic research, policy analysis, and distinguished honors
                </p>
            </div>

            {/* Publications */}
            <div className="mb-12">
                <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
                    <FileText className="text-teal-400" size={24} />
                    Publications & Media
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-teal-500/10">
                                        {pub.type === 'media' ? (
                                            <Newspaper className="text-teal-400" size={20} />
                                        ) : (
                                            <FileText className="text-teal-400" size={20} />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <Badge variant={pub.type === 'media' ? 'secondary' : 'primary'} className="mb-2">
                                            {pub.type === 'media' ? 'Media' : 'Research'}
                                        </Badge>
                                        <h4 className="font-semibold text-white mb-1">{pub.title}</h4>
                                        <div className="text-sm text-teal-400 mb-2">{pub.venue} • {pub.year}</div>
                                        <p className="text-sm text-gray-400">{pub.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Awards */}
            <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                    <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2 m-0">
                        <Award className="text-gold-400" size={24} />
                        Awards & Honors
                    </h3>
                    <a
                        href="https://www.usf.edu/honors/news/2024/usf-student-christopher-oueis-earns-multiple-national-awards-sets-sights-even-higher.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gold-400 hover:text-gold-300 transition-colors gap-1 group"
                    >
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full text-center">
                                <div className="inline-flex p-3 rounded-full bg-gold-500/10 mb-3">
                                    <Award className="text-gold-400" size={24} />
                                </div>
                                <h4 className="font-semibold text-white mb-1">{award.title}</h4>
                                <div className="text-xs text-gold-400 mb-2">{award.organization}</div>
                                <div className="text-xs text-gray-500 mb-2">{award.year}</div>
                                <p className="text-xs text-gray-400">{award.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
