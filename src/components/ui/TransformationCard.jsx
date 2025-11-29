import React from 'react';

const TransformationCard = ({ name, weightLoss, duration, quote, beforeImg, afterImg }) => {
    return (
        <div className="bg-secondary p-4 rounded-sm border border-gray-800 hover:border-accent transition-colors group">
            <div className="flex gap-2 mb-4 h-64">
                <div className="flex-1 relative">
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-sm">BEFORE</span>
                    <img src={beforeImg} alt={`${name} before`} className="w-full h-full object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-1 relative">
                    <span className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded-sm">AFTER</span>
                    <img src={afterImg} alt={`${name} after`} className="w-full h-full object-cover rounded-sm" />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-white font-heading font-bold text-xl mb-1">{name}</h3>
                <div className="flex justify-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="text-accent font-bold">-{weightLoss}</span>
                    <span>in {duration}</span>
                </div>
                <p className="text-gray-300 italic text-sm">"{quote}"</p>
            </div>
        </div>
    );
};

export default TransformationCard;
