import React from 'react';
import { Check } from 'lucide-react';
import Section from '../ui/Section';

const TargetAudience = () => {
    const points = [
        "Business owners & working professionals",
        "Remote coaching with 100% flexibility",
        "Flexible scheduling - train on your own time",
        "Those who need accountability and structured plans"
    ];

    return (
        <div className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wide">
                            Who This Is For
                        </h2>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center shrink-0">
                                    <Check className="text-accent" size={14} strokeWidth={3} />
                                </div>
                                <p className="text-gray-300 text-lg font-light">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;
