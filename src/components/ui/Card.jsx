import React from 'react';
import { cn } from '../../lib/utils';
import { ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ children, className, showFooter = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("glass-card w-full max-w-md mx-auto overflow-hidden flex flex-col", className)}
        >
            <div className="p-8 flex-grow">
                {children}
            </div>

            {showFooter && (
                <div className="bg-white/40 border-t border-white/50 p-4 flex justify-center gap-6 text-slate-500 text-xs font-semibold backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-brand-600" />
                        <span>Geprüfte Qualität</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-brand-600" />
                        <span>SSL Verschlüsselt</span>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Card;
