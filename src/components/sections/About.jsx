import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { AnimatedCounter } from '../AnimatedCounter';
import { Building2, Globe, DollarSign, Shield } from 'lucide-react';

export const About = () => {
    const stats = [
        {
            icon: Building2,
            value: 3,
            label: 'Federal Agencies',
            color: 'teal'
        },
        {
            icon: Globe,
            value: 10,
            suffix: '+',
            label: 'Countries Analyzed',
            color: 'gold'
        },
        {
            icon: DollarSign,
            value: 500,
            suffix: 'M+',
            label: 'Aid Tracked',
            color: 'teal'
        }
    ];

    return (
        <Section id="about">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Photo and Badge */}
                <div className="space-y-6 mx-auto max-w-sm">
                    <div className="relative group">
                        {/* Profile Photo Container */}
                        <div className="relative overflow-hidden rounded-2xl glass border-2 border-teal-500/30 group-hover:border-teal-500/60 transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Christopher Oueis"
                                    className="w-full h-full object-cover object-[center_25%]"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <div class="text-center text-gray-400">
                          <svg class="w-32 h-32 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <p class="text-sm">Add profile photo:<br/>profile-photo.jpg</p>
                        </div>
                      </div>
                    `;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Clearance Badge */}
                        <div className="mt-4">
                            <Badge variant="primary" className="w-full justify-center py-2">
                                <Shield size={14} className="mr-2" />
                                Eligible for U.S. Federal Clearance
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Right Column - Bio and Stats */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            About <span className="gradient-text">Me</span>
                        </h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I turn complex data into actionable intelligence. With experience spanning federal intelligence agencies, the U.S. State Department, and the United Nations, I specialize in building predictive models and analytics systems that detect patterns, assess risk, and drive high-stakes decisions.
                            </p>

                            <p>
                                My foundation in <strong>econometrics, machine learning, and quantitative analysis</strong> from Carnegie Mellon and USF, combined with hands-on work at the <strong>Defense Intelligence Agency, U.S. State Department, and UN ESCWA</strong>, has given me deep expertise in anomaly detection, threat identification, and data pipeline engineering across large-scale, real-world datasets.
                            </p>

                            <p>
                                From reducing intelligence analysis lag times by 87% at CENTCOM to building ML forecasting tools processing data across 22 nations at the UN, I thrive at the intersection of <strong>data science, security, and decision-making under uncertainty</strong>. Currently pursuing my MS in Public Policy &amp; Data Analytics at CMU Heinz College.
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <Card key={index} className="text-center">
                                    <div className={`inline-flex p-3 rounded-full bg-${stat.color}-500/10 mb-3`}>
                                        <Icon className={`text-${stat.color}-400`} size={24} />
                                    </div>
                                    <div className={`text-3xl font-bold gradient-text mb-1`}>
                                        <AnimatedCounter
                                            end={stat.value}
                                            suffix={stat.suffix || ''}
                                        />
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};
