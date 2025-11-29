import React from 'react';
import Hero from '../components/home/Hero';
import TargetAudience from '../components/home/TargetAudience';

import FeaturedTransformations from '../components/home/FeaturedTransformations';
import WhyLogesh from '../components/home/WhyLogesh';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <TargetAudience />

            <FeaturedTransformations />
            <WhyLogesh />
            <FAQ />
            <CTA />
        </>
    );
};

export default Home;
