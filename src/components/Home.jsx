import React, { Suspense } from 'react';
import Header from './Header';
import Hero from './Hero';
const LazyWhyUs = React.lazy(() => import('./WhyUs'));
// import WhyUs from './WhyUs';
const LazyBenefits = React.lazy(() => import('./Benefits'));
const LazyPrices = React.lazy(() => import('./Prices'));
const LazyCalculator = React.lazy(() => import('./Calculator'));
const LazyContact = React.lazy(() => import('./Contact'));
const LazyFooter = React.lazy(() => import('./Footer'));
// import Benefits from './Benefits';
// import Prices from './Prices';
// import Calculator from './Calculator';
// import Contact from './Contact';
// import Footer from './Footer';

function Home() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <LazyWhyUs />
                <LazyBenefits />
                <LazyPrices />
                <LazyCalculator />
                <LazyContact />
                <LazyFooter />
            </Suspense>
        </div>
    );
}

export default Home;
