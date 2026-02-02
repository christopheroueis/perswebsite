import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Shield, Eye, Scale } from 'lucide-react';

export const Values = () => {
    const principles = [
        {
            icon: Eye,
            title: 'Transparent',
            description: 'Clear, explainable models that stakeholders can understand'
        },
        {
            icon: Scale,
            title: 'Accountable',
            description: 'Measurable performance with human oversight and review'
        },
        {
            icon: Shield,
            title: 'Equitable',
            description: 'Fair outcomes across all communities and populations'
        }
    ];

    return (
        <Section id="values">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Values & <span className="gradient-text">Approach</span>
                    </h2>
                </div>

                <Card className="mb-8 border-l-4 border-teal-500 bg-gradient-to-r from-teal-500/10 to-transparent">
                    <blockquote className="text-lg md:text-xl text-gray-200 italic leading-relaxed">
                        "AI systems deployed in government must be transparent, accountable, and equitable.
                        My work focuses on building ML tools that policymakers can trust and citizens can understand."
                    </blockquote>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <Card key={index} className="text-center">
                                <div className="inline-flex p-4 rounded-full bg-teal-500/10 mb-4">
                                    <Icon className="text-teal-400" size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
                                <p className="text-sm text-gray-400">{principle.description}</p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
