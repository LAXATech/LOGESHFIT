import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';

const TargetAudience = () => {
    const points = [
        "Business owners & executives with limited time",
        "Professionals who want to look athletic, not just 'skinny'",
        "People tired of restrictive diets that kill energy",
        "Those who need accountability and structured plans"
    ];

    return (
        <div className="bg-secondary border-y border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl font-heading font-bold text-white uppercase">
                            Who This Is For
                        </h2>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="text-accent shrink-0" size={24} />
                                <p className="text-gray-300 font-medium">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;
