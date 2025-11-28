import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold text-white pr-8">{question}</span>
                <span className="text-accent">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Do I need a gym membership?",
            answer: "While a gym membership is recommended for the best results, I also offer home workout plans requiring minimal equipment (dumbbells and resistance bands)."
        },
        {
            question: "I have a busy schedule. Can I still do this?",
            answer: "Absolutely. My program is specifically designed for busy professionals. Workouts are 45-60 minutes, and nutrition plans are simple to prep and follow."
        },
        {
            question: "Are there any food restrictions?",
            answer: "No. I believe in flexible dieting. You'll have a calorie and protein target, but you can choose the foods you enjoy. No banning carbs or sugar."
        },
        {
            question: "How does the online coaching work?",
            answer: "You'll get access to a training app with your custom plan. We'll have weekly check-ins via WhatsApp/Email to track progress, adjust macros, and ensure you're on track."
        }
    ];

    return (
        <Section id="faq" background="dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Everything you need to know about the coaching process.
                    </p>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
