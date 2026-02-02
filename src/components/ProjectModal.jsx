import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from './ui/Badge.jsx';
import { Button } from './ui/Button.jsx';

export const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                    <X size={24} />
                </button>

                {/* Organization Logo */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/30">
                        <img
                            src={`/${project.logo}`}
                            alt={`${project.organization} logo`}
                            className="h-6 object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                        <span className="text-sm font-semibold text-teal-400">
                            {project.organization} • {project.year}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {project.title}
                </h3>

                {/* Full Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                    {project.fullDescription}
                </p>

                {/* Impact */}
                <div className="glass rounded-lg p-4 mb-6 border-l-4 border-gold-500">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Impact</div>
                    <div className="text-lg font-semibold text-gold-400">{project.impact}</div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                    <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <Badge key={index} variant="primary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Metrics */}
                <div className="glass rounded-lg p-6 border border-teal-500/30">
                    <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">
                            {project.metrics.value}
                        </div>
                        <div className="text-sm text-gray-400">{project.metrics.label}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
