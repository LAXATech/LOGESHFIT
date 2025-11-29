import React from 'react';
import Section from '../components/ui/Section';
import PageHero from '../components/ui/PageHero';
import TransformationCard from '../components/ui/TransformationCard';
import CTA from '../components/home/CTA';

const TransformationsPage = () => {
    const stories = [
        {
            beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Rahul S.",
            weightLoss: "12 kg",
            duration: "12 Weeks",
            quote: "Working 12 hours a day, I thought I didn't have time. Logesh showed me how to fit workouts into my lunch break. Dropped 12kg and feel more energetic than ever."
        },
        {
            beforeImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Mike T.",
            weightLoss: "5 kg Muscle",
            duration: "8 Weeks",
            quote: "I was 'skinny fat' for years. The Foundations program helped me understand nutrition and lifting. Gained 5kg of solid muscle in 8 weeks."
        },
        {
            beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            name: "Arjun K.",
            weightLoss: "8 kg",
            duration: "10 Weeks",
            quote: "Travelled 3 weeks out of the month. Logesh designed hotel workouts that kept me on track. Best investment I've made for myself."
        }
    ];

    return (
        <>
            <PageHero
                title="Success Stories"
                subtitle="Real people. Real results. See what's possible."
                bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            />
            <Section background="dark" className="pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <TransformationCard key={index} {...story} />
                    ))}
                </div>
            </Section>
            <CTA />
        </>
    );
};

export default TransformationsPage;
