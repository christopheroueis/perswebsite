import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'publications', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'publications', label: 'Publications' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20 px-6">
                    {/* Logo/Name */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-xl md:text-2xl font-display font-bold gradient-text hover:scale-105 transition-transform"
                    >
                        Christopher Oueis
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${activeSection === link.id
                                    ? 'text-deep-red bg-deep-red/10'
                                    : 'text-gray-300 hover:text-deep-red hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-deep-red transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass border-t border-white/10">
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${activeSection === link.id
                                        ? 'text-deep-red bg-deep-red/10'
                                        : 'text-gray-300 hover:text-deep-red hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
