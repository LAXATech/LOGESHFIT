import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import CTA from '../components/home/CTA';

const BlogPost = ({ title, category, image }) => (
    <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-sm mb-4">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{category}</span>
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-3">{title}</h3>
        <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Read Article <ArrowRight size={16} />
        </div>
    </div>
);

const Blog = () => {
    const posts = [
        {
            title: "3 Mistakes Busy Professionals Make When Trying to Lose Fat",
            category: "Fat Loss",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "How to Eat Healthy at Business Lunches",
            category: "Nutrition",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Only 3 Supplements You Actually Need",
            category: "Supplements",
            image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Why Sleep is More Important Than Cardio",
            category: "Recovery",
            image: "https://images.unsplash.com/photo-1511972893854-98754809524c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <>
            <Section background="dark" className="pt-32">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        FREE <span className="text-accent">RESOURCES</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Tips, tricks, and truth bombs to help you navigate your fitness journey.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
            </Section>
            <CTA />
        </>
    );
};

export default Blog;
