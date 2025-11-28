import React from 'react';
import Section from '../components/ui/Section';
import CTA from '../components/home/CTA';

const TransformationItem = ({ before, after, name, story }) => (
    <div className="bg-secondary p-6 rounded-sm border border-gray-800">
        <div className="grid grid-cols-2 gap-4 mb-6">
            <img src={before} alt="Before" className="w-full h-64 object-cover rounded-sm grayscale" />
            <img src={after} alt="After" className="w-full h-64 object-cover rounded-sm" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{story}</p>
    </div>
);

const TransformationsPage = () => {
    const stories = [
        {
            before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Rahul S. - IT Professional",
            story: "Working 12 hours a day, I thought I didn't have time. Logesh showed me how to fit workouts into my lunch break. Dropped 12kg and feel more energetic than ever."
        },
        {
            before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Mike T. - Entrepreneur",
            story: "I was 'skinny fat' for years. The Foundations program helped me understand nutrition and lifting. Gained 5kg of solid muscle in 8 weeks."
        },
        {
            before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Arjun K. - Consultant",
            story: "Travelled 3 weeks out of the month. Logesh designed hotel workouts that kept me on track. Best investment I've made for myself."
        }
    ];

    return (
        <>
            <Section background="dark" className="pt-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        SUCCESS <span className="text-accent">STORIES</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        These are real people with real jobs and real lives. If they can do it, so can you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <TransformationItem key={index} {...story} />
                    ))}
                </div>
            </Section>
            <CTA />
        </>
    );
};

export default TransformationsPage;
