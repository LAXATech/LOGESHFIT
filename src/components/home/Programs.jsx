import React from 'react';
import { Check } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const ProgramCard = ({ title, description, features, popular }) => (
    <div className={`relative p-8 rounded-sm border ${popular ? 'border-accent bg-secondary' : 'border-gray-800 bg-primary'} flex flex-col h-full transition-transform hover:-translate-y-2 duration-300`}>
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold uppercase px-4 py-1 rounded-full">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-heading font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-8 flex-grow">{description}</p>
        <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="text-accent shrink-0" size={18} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Button to="/programs" variant={popular ? 'primary' : 'outline'} className="w-full text-center justify-center">
            View Details
        </Button>
    </div>
);

const Programs = () => {
    const programs = [
        {
            title: "Busy Pro 12-Week Cut",
            description: "Designed for executives and business owners who want to shred fat without giving up their lifestyle.",
            features: [
                "Customized Meal Plans (No Starving)",
                "3-4 Day Training Split (45-60 mins)",
                "Weekly Check-ins & Adjustments",
                "WhatsApp Support"
            ],
            popular: true
        },
        {
            title: "Foundations 8-Week Program",
            description: "Perfect for beginners looking to build a solid base and learn proper lifting techniques.",
            features: [
                "Video Exercise Library",
                "Nutrition Fundamentals Guide",
                "Home or Gym Workouts",
                "Bi-weekly Progress Reviews"
            ],
            popular: false
        },
        {
            title: "1-on-1 Elite Coaching",
            description: "The ultimate accountability package. I handle everything except lifting the weights for you.",
            features: [
                "Daily Accountability & Feedback",
                "Advanced Training Periodization",
                "Supplementation Guide",
                "Priority Support Access"
            ],
            popular: false
        }
    ];

    return (
        <Section id="programs" background="transparent">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    CHOOSE YOUR <span className="text-accent">PATH</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Structured programs designed to fit your busy schedule and deliver measurable results.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
        </Section>
    );
};

export default Programs;
