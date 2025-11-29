import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Dumbbell, Zap } from 'lucide-react';

const ProgramCard = ({ title, description, icon: Icon, features }) => (
    <div className="bg-secondary p-8 rounded-sm border border-gray-800 hover:border-accent transition-colors group">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {feature}
                </li>
            ))}
        </ul>
        <Button to="/programs" variant="outline" className="w-full justify-center text-sm">
            View Details
        </Button>
    </div>
);

const HomePrograms = () => {
    const programs = [
        {
            title: "Busy Pro 12-Week Cut",
            description: "Designed for executives who want to drop fat fast without sacrificing energy or time.",
            icon: Zap,
            features: ["1 Hour/Day Training", "Flexible Nutrition", "Weekly Check-ins"]
        },
        {
            title: "Foundations 8-Week Program",
            description: "Build the habits and strength you need to sustain a healthy lifestyle forever.",
            icon: Dumbbell,
            features: ["Home or Gym Workouts", "Habit Coaching", "24/7 Support"]
        }
    ];

    return (
        <Section background="dark" id="programs-overview">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    CHOOSE YOUR <span className="text-accent">PATH</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Specialized programs built for your lifestyle and goals.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {programs.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
        </Section>
    );
};

export default HomePrograms;
