import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-secondary rounded-full"></div>
                <div className="w-16 h-16 border-4 border-accent rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
            </div>
            <h2 className="mt-6 text-2xl font-heading font-bold text-white tracking-widest animate-pulse">
                LOGESHFIT
            </h2>
        </div>
    );
};

export default LoadingScreen;
