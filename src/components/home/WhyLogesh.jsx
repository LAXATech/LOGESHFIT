import React from 'react';
import { ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';

const Feature = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const WhyLogesh = () => {
    return (
        <Section id="why-logesh" background="transparent">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    WHY TRAIN WITH <span className="text-accent">LOGESH?</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    I don't just give you a plan. I give you a lifestyle you can actually sustain.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature
                    icon={ShieldCheck}
                    title="Proven Authority"
                    description="With 3+ years of experience and over 100 successful transformations, my methods are backed by real-world results, not just theory."
                />
                <Feature
                    icon={Clock}
                    title="Time-Efficient"
                    description="Designed for busy professionals. Get maximum results with just 1 hour of training per day. No endless cardio sessions."
                />
                <Feature
                    icon={TrendingUp}
                    title="Sustainable Results"
                    description="No crash diets or starvation. Learn how to eat the foods you love while still dropping body fat and building muscle."
                />
            </div>
        </Section>
    );
};

export default WhyLogesh;
