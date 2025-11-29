import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Calculator = () => {
    const [currentWeight, setCurrentWeight] = useState('');
    const [goalWeight, setGoalWeight] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        if (!currentWeight || !goalWeight) return;
        const diff = parseFloat(currentWeight) - parseFloat(goalWeight);

        if (diff <= 0) {
            setResult("You're already at or below your goal!");
            return;
        }

        // Standard safe weight loss: 0.5kg to 1kg per week
        const weeksFast = Math.ceil(diff / 1.0); // 1kg per week
        const weeksSustainable = Math.ceil(diff / 0.5); // 0.5kg per week

        setResult({
            weeks: `${weeksFast} - ${weeksSustainable}`,
            loss: diff.toFixed(1)
        });
    };

    return (
        <Section background="accent" id="calculator">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            HOW FAST CAN YOU <span className="text-primary">TRANSFORM?</span>
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Find out how long it will take to reach your dream physique with our science-based approach.
                        </p>
                        <div className="bg-secondary p-6 rounded-sm border border-gray-800">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Current Weight (kg)</label>
                                    <input
                                        type="number"
                                        value={currentWeight}
                                        onChange={(e) => setCurrentWeight(e.target.value)}
                                        className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="85"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Goal Weight (kg)</label>
                                    <input
                                        type="number"
                                        value={goalWeight}
                                        onChange={(e) => setGoalWeight(e.target.value)}
                                        className="w-full bg-primary border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="75"
                                    />
                                </div>
                            </div>
                            <Button onClick={calculate} variant="primary" className="w-full justify-center">
                                Calculate Timeline
                            </Button>
                        </div>
                    </div>

                    <div className="bg-primary p-8 rounded-sm border border-gray-800 text-center flex flex-col justify-center h-full">
                        {result ? (
                            typeof result === 'string' ? (
                                <p className="text-xl font-bold text-white">{result}</p>
                            ) : (
                                <>
                                    <p className="text-gray-400 uppercase text-sm font-bold mb-2">Estimated Timeline</p>
                                    <div className="text-5xl font-heading font-bold text-accent mb-2">
                                        {result.weeks} <span className="text-2xl text-white">WEEKS</span>
                                    </div>
                                    <p className="text-gray-300">
                                        To lose <span className="text-white font-bold">{result.loss}kg</span> of pure fat.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-gray-800">
                                        <p className="text-sm text-gray-400 mb-4">Ready to start?</p>
                                        <Button to="/contact" variant="outline" className="w-full justify-center">
                                            Start Your Journey
                                        </Button>
                                    </div>
                                </>
                            )
                        ) : (
                            <div className="text-gray-500">
                                <p className="mb-2">Enter your details to see your personalized timeline.</p>
                                <p className="text-xs opacity-50">*Based on sustainable 0.5kg - 1kg weekly fat loss.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Calculator;
