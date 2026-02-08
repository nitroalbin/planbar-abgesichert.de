import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookie-consent', 'accepted');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-[999] p-4 md:p-6 pb-8 md:pb-6"
                >
                    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 pb-12 md:pb-0">
                        <div className="text-sm text-brand-600 leading-relaxed md:max-w-2xl text-center md:text-left">
                            <span className="font-bold text-brand-900 block mb-1">Wir schützen Ihre Privatsphäre</span>
                            Wir verwenden Cookies und ähnliche Technologien, um unsere Website für Sie zu optimieren und Ihnen personalisierte Inhalte anzubieten.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Button variant="ghost" onClick={handleAccept} className="w-full sm:w-auto border border-brand-200 justify-center">
                                Einstellungen
                            </Button>
                            <Button onClick={handleAccept} className="w-full sm:w-auto py-3 px-8 text-base justify-center shadow-lg shadow-brand-300/20">
                                Alles akzeptieren
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
