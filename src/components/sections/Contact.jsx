import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'oueischristopher@gmail.com | coueis@andrew.cmu.edu',
            href: 'mailto:oueischristopher@gmail.com,coueis@andrew.cmu.edu'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (813) 598-5600',
            href: 'tel:+18135985600'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Pittsburgh, PA / Washington, D.C.',
            href: null
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: 'https://linkedin.com/in/christopher-oueis'
        }
    ];

    return (
        <Section id="contact" className="bg-gradient-to-b from-transparent to-navy-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Whether you're interested in collaboration, have questions about my work, or just want to connect — I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <Card className="flex items-center gap-4 h-full">
                                    <div className="p-3 rounded-lg bg-teal-500/10">
                                        <Icon className="text-teal-400" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1">{info.label}</div>
                                        <div className="text-sm font-medium text-white">{info.value}</div>
                                    </div>
                                </Card>
                            );

                            if (info.href) {
                                return (
                                    <a
                                        key={index}
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="block hover:scale-105 transition-transform"
                                    >
                                        {content}
                                    </a>
                                );
                            }

                            return <div key={index}>{content}</div>;
                        })}
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-white placeholder-gray-500 focus:border-teal-500/50 focus:outline-none transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Send size={18} className="mr-2" />
                                Send Message
                            </Button>
                            <p className="text-xs text-gray-500 text-center">
                                Note: This form is a placeholder. Please use email or LinkedIn to contact.
                            </p>
                        </form>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
