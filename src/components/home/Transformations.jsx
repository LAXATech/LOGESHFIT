import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const TransformationCard = ({ before, after, name, result, quote }) => (
    <div className="bg-secondary p-4 rounded-sm border border-gray-800">
        <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="relative">
                <img src={before} alt="Before" className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-sm">BEFORE</span>
            </div>
            <div className="relative">
                <img src={after} alt="After" className="w-full h-64 object-cover rounded-sm" />
                <span className="absolute bottom-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded-sm">AFTER</span>
            </div>
        </div>
        <div className="text-center">
            <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
            <p className="text-accent font-bold text-sm mb-3">{result}</p>
            <p className="text-gray-400 text-sm italic">"{quote}"</p>
        </div>
    </div>
);

const Transformations = () => {
    const transformations = [
        {
            before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Rahul S.",
            result: "Lost 12kg in 12 Weeks",
            quote: "I never thought I could get these results while travelling for work. Logesh's plan is a game changer."
        },
        {
            before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Mike T.",
            result: "Gained 5kg Muscle",
            quote: "Finally broke through my plateau. The training structure was exactly what I needed."
        },
        {
            before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Arjun K.",
            result: "Lost 8kg & 6 inches",
            quote: "Sustainable and effective. No starving, just smart eating and hard training."
        }
    ];

    return (
        <Section id="transformations" background="dark">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    REAL PEOPLE. <span className="text-accent">REAL RESULTS.</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    See what happens when you combine hard work with a smart plan.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {transformations.map((item, index) => (
                    <TransformationCard key={index} {...item} />
                ))}
            </div>

            <div className="text-center">
                <Button to="/transformations" variant="outline" className="px-8 py-4">
                    View All Success Stories
                </Button>
            </div>
        </Section>
    );
};

export default Transformations;
