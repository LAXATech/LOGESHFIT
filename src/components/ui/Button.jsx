import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
    children,
    to,
    href,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";

    const variants = {
        primary: "bg-accent text-primary hover:bg-accent-hover hover:scale-105",
        secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary",
        ghost: "text-gray-300 hover:text-accent",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    const content = (
        <span className="flex items-center gap-2">
            {children}
        </span>
    );

    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedClassName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedClassName}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
