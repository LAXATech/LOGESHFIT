import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Gym Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-accent font-bold tracking-wider uppercase mb-4">
                            Online Coaching for Busy Professionals
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
                            LOSE FAT IN <span className="text-accent">1 HOUR/DAY</span> WITHOUT STARVING
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                            Join 500+ professionals who have transformed their physique while running businesses and managing careers. No extreme diets. Just real results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                                Book Free Consultation
                            </Button>
                            <Button href="https://wa.me/1234567890" variant="secondary" className="text-lg px-8 py-4">
                                WhatsApp Now
                            </Button>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-gray-400 text-sm font-bold uppercase tracking-wide">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                3+ Years Experience
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                100+ Transformations
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
