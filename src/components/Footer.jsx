import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, Dumbbell } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-heading font-bold text-white mb-4">
                            <Dumbbell className="text-accent" size={28} />
                            <span>LOGESH<span className="text-accent">FIT</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Helping busy professionals lose fat and build muscle without extreme dieting. 1 hour a day, real results.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">About Coach</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-accent transition-colors text-sm">Programs & Pricing</Link></li>
                            <li><Link to="/transformations" className="text-gray-400 hover:text-accent transition-colors text-sm">Success Stories</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-accent transition-colors text-sm">Free Resources</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Programs</h3>
                        <ul className="space-y-3">
                            <li><Link to="/programs" className="text-gray-400 hover:text-accent transition-colors text-sm">Busy Pro 12-Week Cut</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-accent transition-colors text-sm">Foundations 8-Week Program</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-accent transition-colors text-sm">1-on-1 Online Coaching</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-heading font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={16} className="text-accent" />
                                <span>coach@logeshfit.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={16} className="text-accent" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="mt-4">
                                <a
                                    href="https://wa.me/1234567890"
                                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-sm font-bold text-sm hover:bg-green-700 transition-colors"
                                >
                                    Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Logesh Fitness. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-xs">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white text-xs">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
