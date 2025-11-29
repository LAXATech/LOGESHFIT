import React from 'react';
import Section from '../ui/Section';
import TransformationCard from '../ui/TransformationCard';
import Button from '../ui/Button';

const FeaturedTransformations = () => {
    const transformations = [
        {
            name: "Rahul S.",
            weightLoss: "12 kg",
            duration: "12 Weeks",
            quote: "Lost 12kg while working 12-hour shifts. No meal prep needed.",
            beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Priya M.",
            weightLoss: "8 kg",
            duration: "8 Weeks",
            quote: "Dropped 2 dress sizes without giving up my favorite foods.",
            beforeImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Arjun K.",
            weightLoss: "15 kg",
            duration: "16 Weeks",
            quote: "From dad bod to athletic physique. 1 hour training per day.",
            beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <Section background="dark" id="transformations">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    REAL PEOPLE. <span className="text-accent">REAL RESULTS.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl">
                    See what's possible when you have the right plan and accountability.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {transformations.map((item, index) => (
                    <TransformationCard key={index} {...item} />
                ))}
            </div>
            <div className="text-center">
                <Button to="/transformations" variant="outline">
                    View All Success Stories
                </Button>
            </div>
        </Section>
    );
};

export default FeaturedTransformations;
