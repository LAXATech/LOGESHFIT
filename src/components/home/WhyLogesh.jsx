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
                    title="3+ Years Experience"
                    description="Specialist in coaching busy professionals. I understand your time constraints and lifestyle challenges."
                />
                <Feature
                    icon={Clock}
                    title="The 1-Hour Method"
                    description="Get maximum results with just 1 hour of training per day. No endless cardio or time-wasting exercises."
                />
                <Feature
                    icon={TrendingUp}
                    title="Sustainable Results"
                    description="No extreme dieting or starvation. Learn to eat the foods you love while dropping body fat."
                />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">Certified By Leading Organizations</p>
                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for certification logos */}
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-white" />
                        <span className="text-white font-bold">NASM Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-white" />
                        <span className="text-white font-bold">ISSA Specialist</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-white" />
                        <span className="text-white font-bold">Precision Nutrition</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyLogesh;
