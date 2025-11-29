import React from 'react';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';
import CTA from '../components/home/CTA';

const PricingCard = ({ title, price, description, features, recommended }) => (
    <div className={`p-8 rounded-sm border flex flex-col h-full ${recommended ? 'border-accent bg-secondary relative' : 'border-gray-800 bg-primary'}`}>
        {recommended && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary text-xs font-bold uppercase px-4 py-1 rounded-full">
                Recommended
            </div>
        )}
        <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-accent mb-4">{price}</div>
        <p className="text-gray-400 mb-8 text-sm">{description}</p>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="text-accent shrink-0" size={18} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Button to="/contact" variant={recommended ? 'primary' : 'outline'} className="w-full text-center justify-center">
            Get Started
        </Button>
    </div>
);

const ProgramsPage = () => {
    const programs = [
        {
            title: "Foundations",
            price: "₹4,999",
            description: "8-Week program to master the basics and build a solid physique.",
            features: [
                "Custom Training Plan",
                "Nutrition Guidelines",
                "Video Exercise Library",
                "Bi-weekly Email Check-ins"
            ],
            recommended: false
        },
        {
            title: "Busy Pro Transformation",
            price: "₹9,999",
            description: "12-Week intensive coaching for maximum fat loss and muscle retention.",
            features: [
                "Everything in Foundations",
                "Weekly WhatsApp Check-ins",
                "Custom Meal Plans",
                "Form Correction Analysis",
                "Travel/Hotel Workout Options"
            ],
            recommended: true
        },
        {
            title: "Elite 1-on-1",
            price: "₹19,999",
            description: "16-Week premium coaching with daily accountability.",
            features: [
                "Everything in Busy Pro",
                "Daily Accountability",
                "Supplementation Protocol",
                "Priority Support (24h response)",
                "1-on-1 Strategy Calls"
            ],
            recommended: false
        }
    ];

    return (
        <>
            <PageHero
                title="Choose Your Program"
                subtitle="Invest in your health and performance. No hidden fees, just results."
                bgImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            />
            <Section background="dark" className="pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <PricingCard key={index} {...program} />
                    ))}
                </div>
            </Section>
            <CTA />
        </>
    );
};

export default ProgramsPage;
