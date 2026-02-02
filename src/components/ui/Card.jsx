import React from 'react';

export const Card = ({ children, className = '', hover = true, ...props }) => {
    const baseStyles = 'glass rounded-xl p-6';
    const hoverStyles = hover ? 'glass-hover' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
            {children}
        </div>
    );
};
