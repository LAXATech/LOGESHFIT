import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <Section background="dark" className="pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        LET'S <span className="text-accent">TALK</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Ready to take the next step? Fill out the form below or reach out directly. I'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent border border-gray-800">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                                <p className="font-medium">coach@logeshfit.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent border border-gray-800">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
                                <p className="font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-accent/10 rounded-sm border border-accent/20">
                        <h3 className="text-accent font-bold mb-2">Not sure yet?</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Book a free 15-minute discovery call to see if we're a good fit.
                        </p>
                        <Button href="https://calendly.com" variant="primary" className="w-full text-center justify-center">
                            Book Discovery Call
                        </Button>
                    </div>
                </div>

                <div className="bg-secondary p-8 rounded-sm border border-gray-800">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                                <input type="text" className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone</label>
                                <input type="tel" className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="+91..." />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Goal</label>
                            <select className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors">
                                <option>Fat Loss</option>
                                <option>Muscle Gain</option>
                                <option>General Fitness</option>
                                <option>Competition Prep</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                            <textarea className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors h-32" placeholder="Tell me about your current routine..."></textarea>
                        </div>
                        <Button type="submit" variant="primary" className="w-full justify-center">
                            Send Application
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
