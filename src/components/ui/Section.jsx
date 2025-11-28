import React from 'react';

const Section = ({
    children,
    className = '',
    id = '',
    background = 'transparent' // 'transparent', 'dark', 'accent'
}) => {
    const bgStyles = {
        transparent: 'bg-transparent',
        dark: 'bg-secondary',
        accent: 'bg-accent/10',
    };

    return (
        <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default Section;
