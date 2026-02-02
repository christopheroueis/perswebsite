import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Code, Brain, Globe, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const iconMap = {
    Code: Code,
    Brain: Brain,
    Globe: Globe,
    Languages: Languages
};

export const Skills = () => {
    const skillCategories = [
        { key: 'technical', data: skills.technical },
        { key: 'methods', data: skills.methods },
        { key: 'domain', data: skills.domain },
        { key: 'languages', data: skills.languages }
    ];

    return (
        <Section id="skills">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Skills & <span className="gradient-text">Capabilities</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive toolkit spanning technical implementation, specialized methodologies, domain expertise, and multilingual capabilities
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, categoryIndex) => {
                    const Icon = iconMap[category.data.icon];

                    return (
                        <motion.div
                            key={category.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-teal-500/10">
                                        <Icon className="text-teal-400" size={24} />
                                    </div>
                                    <h3 className="text-xl font-display font-semibold text-white">
                                        {category.data.title}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {category.data.items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.3 }}
                                            viewport={{ once: true }}
                                            className="border-l-2 border-teal-500/30 pl-4 py-2 hover:border-teal-500/60 transition-colors"
                                        >
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                                                        {item.flag && <span className="text-2xl">{item.flag}</span>}
                                                        {item.name}
                                                    </h4>
                                                    {item.description && (
                                                        <p className="text-sm text-gray-400">{item.description}</p>
                                                    )}
                                                    {item.tools && (
                                                        <p className="text-xs text-teal-400 mt-1">
                                                            {item.tools.join(' • ')}
                                                        </p>
                                                    )}
                                                </div>
                                                {item.level && (
                                                    <span className="text-xs px-2 py-1 rounded bg-navy-800 text-gold-400 whitespace-nowrap">
                                                        {item.level}
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};
