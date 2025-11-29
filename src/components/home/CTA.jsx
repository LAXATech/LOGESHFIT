import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <section className="py-20 bg-accent">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
                    READY TO TRANSFORM YOUR BODY?
                </h2>
                <p className="text-primary/80 text-xl mb-4 max-w-2xl mx-auto font-medium">
                    Ready to start? Book your free strategy call today.
                </p>
                <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-10">
                    ⚠️ Limited Spots Available for {new Date().toLocaleString('default', { month: 'long' })}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact" className="bg-primary text-white hover:bg-primary/90 px-10 py-4 text-lg">
                        Book Free Consultation
                    </Button>
                    <Button href="https://wa.me/1234567890" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg">
                        Chat on WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
