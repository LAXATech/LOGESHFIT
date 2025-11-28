import React from 'react';
import Section from '../components/ui/Section';
import CTA from '../components/home/CTA';
import meImg from '../assets/me.jpg';

const About = () => {
    return (
        <>
            <Section background="dark" className="pt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src={meImg}
                            alt="Coach Logesh"
                            className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            MEET YOUR <span className="text-accent">COACH</span>
                        </h1>
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                Hi, I'm Logesh. I'm not just another fitness influencer posting shirtless selfies. I'm a coach who specializes in helping busy professionals reclaim their health.
                            </p>
                            <p>
                                I understand the struggle. You have a demanding career, a family, and a social life. The last thing you need is a diet that requires you to weigh every gram of rice or a workout plan that takes 2 hours a day.
                            </p>
                            <p>
                                My methodology is built on <strong>efficiency</strong> and <strong>sustainability</strong>. We focus on the 20% of actions that drive 80% of the results.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-primary p-4 border border-gray-800">
                                    <h3 className="text-accent font-bold text-xl mb-1">3+ Years</h3>
                                    <p className="text-sm text-gray-400">Coaching Experience</p>
                                </div>
                                <div className="bg-primary p-4 border border-gray-800">
                                    <h3 className="text-accent font-bold text-xl mb-1">100+</h3>
                                    <p className="text-sm text-gray-400">Clients Transformed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <CTA />
        </>
    );
};

export default About;
