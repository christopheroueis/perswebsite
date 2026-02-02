import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-gray-800 text-gray-300 border-gray-700',
        primary: 'bg-gray-800 text-gray-300 border-gray-700'
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
