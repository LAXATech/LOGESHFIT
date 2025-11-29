import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, bgImage }) => {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
