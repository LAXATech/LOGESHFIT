import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const clients = [
    { name: "Rahul S.", result: "-12kg", role: "Software Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" },
    { name: "Priya M.", result: "-8kg", role: "Product Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
    { name: "Arjun K.", result: "Muscle Gain", role: "Founder", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { name: "Sneha R.", result: "-15kg", role: "Consultant", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { name: "Vikram S.", result: "6 Pack", role: "Architect", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop" },
    { name: "Anjali P.", result: "-10kg", role: "Doctor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
    { name: "Karan D.", result: "-20kg", role: "Lawyer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
    { name: "Meera S.", result: "Strength", role: "Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" },
];

const MarqueeRow = ({ duration, reverse = false }) => (
    <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear"
        }}
        className="flex gap-6 min-w-max"
    >
        {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="bg-secondary/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 flex items-center gap-4 w-72 shadow-lg hover:border-accent/30 transition-colors group">
                <div className="relative">
                    <img src={client.image} alt={client.name} className="w-14 h-14 rounded-full object-cover border-2 border-accent/20 group-hover:border-accent transition-colors" />
                    <div className="absolute -bottom-1 -right-1 bg-accent text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {client.result}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{client.name}</h4>
                    <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">{client.role}</p>
                    <div className="flex text-gold">
                        {[1, 2, 3, 4, 5].map(i => (
                            <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </motion.div>
);

const FeaturedTransformations = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden" id="transformations">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">
                        Real People. Real Results.
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
                        JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-200">WINNING TEAM</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        See what happens when you combine hard work with a smart plan.
                    </p>
                </div>
            </div>

            {/* Animated Marquee Grid */}
            <div className="relative flex flex-col gap-6 mask-gradient-x">
                <MarqueeRow duration={40} />
                <MarqueeRow duration={35} reverse={true} />
                <MarqueeRow duration={45} />
            </div>

            <div className="container mx-auto px-4 mt-16 text-center relative z-10">
                <Button to="/transformations" variant="primary" className="text-lg px-10 py-4 shadow-neon hover:shadow-neon-hover transition-all">
                    View All Success Stories
                </Button>
            </div>
        </section>
    );
};

export default FeaturedTransformations;
