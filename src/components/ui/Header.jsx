import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-brand-100 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-300 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-300/20">
                            {/* Simple Compass/Star Icon representation */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                            </svg>
                        </div>
                        <div>
                            <span className="font-serif font-bold text-xl text-brand-900 tracking-tight block leading-none">
                                Planbar Abgesichert
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">
                                Einfach. Sicher.
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
