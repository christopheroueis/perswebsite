import React, { useState } from 'react';
import { Card } from './ui/Card.jsx';
import { Badge } from './ui/Badge.jsx';
import { ArrowRight, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="group h-full flex flex-col">
            {/* Header - Always Visible */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                    <img
                        src={`/${project.logo}`}
                        alt={`${project.organization} logo`}
                        className="h-12 object-contain flex-shrink-0"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'inline-block';
                        }}
                    />
                    <div style={{ display: 'none' }} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700">
                        {project.organization}
                    </div>
                    <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                {/* Expand/Collapse Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex-shrink-0 p-2 rounded-lg bg-gray-800 hover:bg-deep-red/20 text-gray-400 hover:text-deep-red transition-colors"
                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            {/* Title - Always Visible */}
            <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-deep-red transition-colors">
                {project.title}
            </h3>

            {/* Minimal Info - Always Visible */}
            <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                <span className="font-medium">{project.metrics.value}</span>
            </div>

            {/* Collapsible Details */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-4 pt-3 border-t border-white/10">
                            {/* Description */}
                            <p className="text-sm text-gray-400">
                                {project.description}
                            </p>

                            {/* Impact Badge */}
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-800 border border-gray-700">
                                <TrendingUp size={16} className="text-gray-400 flex-shrink-0" />
                                <span className="text-xs text-gray-300 font-medium">{project.impact}</span>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <Badge key={index} variant="default" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {/* Learn More Link */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-muted-blue hover:text-blue-400 transition-colors gap-1"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
};
