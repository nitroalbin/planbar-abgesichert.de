import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-warm-50 selection:bg-brand-300/30 flex flex-col font-sans">
            <Header />

            {/* Spacer for fixed header */}
            <div className="h-16" />

            {/* Dynamic Background Mesh (More subtle now) */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-100/40 mix-blend-multiply filter blur-[100px] opacity-60 animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-warm-100/40 mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
                {children}
            </main>

            <Footer />
            <CookieBanner />
        </div>
    );
};

export default Layout;
