import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className, variant = 'primary', ...props }) => {
    const baseStyles = "w-full py-4 px-6 rounded-2xl font-bold text-lg outline-none focus:ring-2 focus:ring-offset-2 tracking-wide";

    const variants = {
        primary: "bg-gradient-to-r from-brand-300 to-brand-400 text-white shadow-lg shadow-brand-300/30 hover:shadow-brand-300/40",
        outline: "border-2 border-brand-200 text-brand-700 hover:border-brand-300 hover:bg-brand-50/50 bg-white/50",
        ghost: "text-slate-500 hover:text-slate-800 font-normal py-2 text-sm",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
