import React from 'react';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg';

    const variants = {
        primary: 'bg-deep-red hover:bg-deep-red-dark text-white',
        secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200',
        outline: 'border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white bg-transparent'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};
