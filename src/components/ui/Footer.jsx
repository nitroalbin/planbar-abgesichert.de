import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-900 text-brand-200 py-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="font-serif font-bold text-white text-xl">Planbar Abgesichert</h4>
                        <p className="text-sm text-brand-400 max-w-xs">
                            Einfach. Sicher. Für ein gutes Gefühl.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm">
                        <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                    </div>
                </div>

                <div className="border-t border-brand-800 mt-8 pt-8 text-center text-xs text-brand-500">
                    &copy; {new Date().getFullYear()} Planbar Abgesichert. Alle Rechte vorbehalten.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
